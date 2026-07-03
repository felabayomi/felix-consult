param(
    [string]$Remote = "origin",
    [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

function Run-Git {
    param([string[]]$GitArgs)
    $output = & git @GitArgs 2>&1
    $code = $LASTEXITCODE
    if ($code -ne 0) {
        $text = ($output -join "`n")
        if ($GitArgs[0] -eq "stash" -and $text -match "No local changes to save") {
            return $output
        }
        throw "git $($GitArgs -join ' ') failed: $output"
    }
    return $output
}

function Has-UncommittedChanges {
    $status = & git status --porcelain
    return -not [string]::IsNullOrWhiteSpace(($status -join "`n"))
}

if (-not (Test-Path ".git")) {
    throw "This script must be run from the repository root."
}

$stashCreated = $false
$stashMessage = "sync-guard-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

try {
    $hasChanges = Has-UncommittedChanges
    if ($hasChanges) {
        Write-Host "[sync-guard] Stashing local changes..."
        $stashOutput = & git stash push --include-untracked -m $stashMessage 2>&1
        $stashCode = $LASTEXITCODE
        if ($stashCode -eq 0) {
            $stashCreated = $true
        }
        else {
            $stashListCheck = & git stash list
            $stashFound = $stashListCheck | Select-String -SimpleMatch $stashMessage
            if ($stashFound) {
                $stashCreated = $true
            }
            else {
                throw "git stash push failed: $stashOutput"
            }
        }
    }

    Write-Host "[sync-guard] Fetching latest remote refs..."
    Run-Git @("fetch", $Remote, "--prune") | Out-Null

    $remoteRef = "$Remote/$Branch"
    Run-Git @("show-ref", "--verify", "refs/remotes/$remoteRef") | Out-Null

    $localHead = (Run-Git @("rev-parse", "HEAD")).Trim()
    $remoteHead = (Run-Git @("rev-parse", $remoteRef)).Trim()
    $mergeBase = (Run-Git @("merge-base", "HEAD", $remoteRef)).Trim()

    if ($localHead -eq $remoteHead) {
        Write-Host "[sync-guard] Local branch is already up to date with $remoteRef."
    }
    elseif ($localHead -eq $mergeBase) {
        Write-Host "[sync-guard] Local branch is behind. Rebasing onto $remoteRef..."
        Run-Git @("rebase", $remoteRef) | Out-Null
    }
    elseif ($remoteHead -eq $mergeBase) {
        Write-Host "[sync-guard] Local branch is ahead of $remoteRef (no rebase needed)."
    }
    else {
        Write-Host "[sync-guard] Branches diverged. Rebasing local commits onto $remoteRef..."
        Run-Git @("rebase", $remoteRef) | Out-Null
    }

    if ($stashCreated) {
        Write-Host "[sync-guard] Restoring stashed local changes..."
        $stashList = & git stash list
        $match = $stashList | Select-String -SimpleMatch $stashMessage
        if ($match) {
            & git stash pop --index | Out-Null
            if ($LASTEXITCODE -ne 0) {
                throw "Failed to restore stashed changes automatically. Resolve stash conflicts manually."
            }
        }
    }

    $finalStatus = & git status --short
    Write-Host "[sync-guard] Done. Safe to continue with commit/push/deploy."
    if (-not [string]::IsNullOrWhiteSpace(($finalStatus -join "`n"))) {
        Write-Host "[sync-guard] Working tree changes present (expected before commit):"
        $finalStatus | ForEach-Object { Write-Host "  $_" }
    }
    else {
        Write-Host "[sync-guard] Working tree is clean."
    }
}
catch {
    Write-Error "[sync-guard] $($_.Exception.Message)"

    if (Test-Path ".git\rebase-merge" -or Test-Path ".git\rebase-apply") {
        Write-Host "[sync-guard] Attempting to abort in-progress rebase..."
        & git rebase --abort | Out-Null
    }

    if ($stashCreated) {
        Write-Host "[sync-guard] Your changes were stashed as: $stashMessage"
        Write-Host "[sync-guard] Use 'git stash list' and 'git stash pop' to restore when ready."
    }

    exit 1
}
