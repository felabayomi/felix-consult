"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { archiveData } from "./archiveData"

type Status =
    | "Live Demo"
    | "App Store"
    | "Prototype"
    | "Private Build"
    | "Available For Customization"
    | "Coming Soon"

type Budget = "Under $250" | "$499 Setup" | "$1,500+ Custom"
type LaunchSpeed = "72 Hours" | "1-2 Weeks" | "2-4 Weeks"
type BuyerType = "Entrepreneur" | "Agency" | "Local Business" | "Creator" | "Nonprofit" | "Consultant"
type AppType = "Booking" | "Finance" | "Travel" | "Media" | "Logistics" | "Dashboard" | "Nonprofit"

type CatalogItem = {
    name: string
    outcome: string
    bestFor: string
    status: Status
    startingPackage: string
    budget: Budget
    appType: AppType
    buyerType: BuyerType
    launchSpeed: LaunchSpeed
    url: string
}

function personaMessage(item: CatalogItem): string {
    if (item.buyerType === "Entrepreneur") return "Launch fast, validate demand, and start selling under your brand."
    if (item.buyerType === "Agency") return "Offer this as a client-ready productized service with faster delivery."
    if (item.buyerType === "Local Business") return "Convert local demand into bookings, orders, and repeat customers."
    if (item.buyerType === "Nonprofit") return "Turn mission goals into measurable impact with structured digital workflows."
    if (item.buyerType === "Creator") return "Monetize your audience with a branded app experience you control."
    return "Package expertise into a repeatable platform you can deploy and scale."
}

function archiveOutcome(appType: AppType): string {
    if (appType === "Booking") return "Launch a booking workflow your audience can start using immediately."
    if (appType === "Finance") return "Launch a finance workflow that improves visibility and control."
    if (appType === "Travel") return "Launch a travel product for discovery, planning, and conversion."
    if (appType === "Media") return "Launch a content product that publishes, distributes, and grows audience."
    if (appType === "Logistics") return "Launch an operations app that streamlines service and fulfillment flow."
    if (appType === "Nonprofit") return "Launch a mission platform for programs, storytelling, and coordination."
    return "Launch an internal dashboard that makes your operations easier to run."
}

function archiveBestFor(buyerType: BuyerType): string {
    if (buyerType === "Entrepreneur") return "Founders building their first sellable app product."
    if (buyerType === "Agency") return "Agencies packaging ready-made delivery offers for clients."
    if (buyerType === "Local Business") return "Local operators who need bookings, requests, and workflow control."
    if (buyerType === "Nonprofit") return "Nonprofits and impact teams scaling outreach and operations."
    if (buyerType === "Creator") return "Creators building direct digital products around their audience."
    return "Consultants and teams standardizing service delivery with software."
}

const featuredApps: CatalogItem[] = [
    {
        name: "ReserveEZ / TablePilot",
        outcome: "Launch a branded booking and reservation app.",
        bestFor: "Restaurants, venues, salons, consultants, service providers.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Booking",
        buyerType: "Local Business",
        launchSpeed: "72 Hours",
        url: "https://tablepilot.io",
    },
    {
        name: "Letter Vault",
        outcome: "Launch a document and mail organizer your customers can use daily.",
        bestFor: "Households, freelancers, consultants, admin-heavy businesses.",
        status: "App Store",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Finance",
        buyerType: "Entrepreneur",
        launchSpeed: "72 Hours",
        url: "https://apps.apple.com/us/app/letter-vault/id6760270008",
    },
    {
        name: "BillWatch / ExpenseWatch",
        outcome: "Launch a finance tracker for recurring bills and expense control.",
        bestFor: "Individuals, accountants, coaches, small operators.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Finance",
        buyerType: "Entrepreneur",
        launchSpeed: "72 Hours",
        url: "https://billwatch.pro",
    },
    {
        name: "City Discoverer / Travel Planner",
        outcome: "Launch a destination discovery and itinerary planning platform.",
        bestFor: "Travel brands, creators, city guides, tourism operators.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Travel",
        buyerType: "Creator",
        launchSpeed: "1-2 Weeks",
        url: "https://plan.citydiscoverer.ai",
    },
    {
        name: "Errand Easy / ARK Logistics",
        outcome: "Launch a service operations and delivery workflow app.",
        bestFor: "Errand brands, delivery operators, local service businesses.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Logistics",
        buyerType: "Local Business",
        launchSpeed: "1-2 Weeks",
        url: "https://errandeasy.app/",
    },
    {
        name: "SocialMediaMaster",
        outcome: "Launch a social posting and media workflow tool.",
        bestFor: "Creators, agencies, growth teams.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Media",
        buyerType: "Agency",
        launchSpeed: "1-2 Weeks",
        url: "https://mediahost.app/",
    },
    {
        name: "Project Pulse",
        outcome: "Launch a project and customer operations dashboard.",
        bestFor: "Agencies, consultants, internal teams.",
        status: "Private Build",
        startingPackage: "$1,500+ custom",
        budget: "$1,500+ Custom",
        appType: "Dashboard",
        buyerType: "Consultant",
        launchSpeed: "1-2 Weeks",
        url: "https://projectpulse.felixconsult.co/",
    },
    {
        name: "Inquiry Hub",
        outcome: "Launch a research, cohort, and learning collaboration workspace.",
        bestFor: "Educators, learning programs, research teams.",
        status: "Live Demo",
        startingPackage: "$499 launch setup",
        budget: "$499 Setup",
        appType: "Dashboard",
        buyerType: "Consultant",
        launchSpeed: "1-2 Weeks",
        url: "https://inquiryhub.app",
    },
    {
        name: "Tax Automator",
        outcome: "Launch a tax workflow automation app for process-heavy operations.",
        bestFor: "Tax advisors, financial operators, admin teams.",
        status: "Private Build",
        startingPackage: "$1,500+ custom",
        budget: "$1,500+ Custom",
        appType: "Finance",
        buyerType: "Consultant",
        launchSpeed: "2-4 Weeks",
        url: "https://taxflowpro.felixconsult.co/",
    },
]

const browseByType: Array<{ heading: string; items: CatalogItem[] }> = [
    {
        heading: "Booking & Scheduling",
        items: [
            featuredApps[0],
            {
                name: "Calendar Scheduler",
                outcome: "Launch a scheduling app for customer appointments and sessions.",
                bestFor: "Consultants, planners, service teams.",
                status: "Live Demo",
                startingPackage: "$499 launch setup",
                budget: "$499 Setup",
                appType: "Booking",
                buyerType: "Local Business",
                launchSpeed: "72 Hours",
                url: "https://appointment.expeditionamerica.us/",
            },
            {
                name: "City Discoverer Agent SchedEZ",
                outcome: "Offer guided planning bookings through a branded agent portal.",
                bestFor: "Travel advisors, itinerary services.",
                status: "Live Demo",
                startingPackage: "$499 launch setup",
                budget: "$499 Setup",
                appType: "Booking",
                buyerType: "Entrepreneur",
                launchSpeed: "1-2 Weeks",
                url: "https://citydiscoverer.guide/book",
            },
            {
                name: "Travel Deals Curator",
                outcome: "Package and distribute booking deals through your own app brand.",
                bestFor: "Travel curators and deal publishers.",
                status: "Available For Customization",
                startingPackage: "$1,500+ custom",
                budget: "$1,500+ Custom",
                appType: "Booking",
                buyerType: "Creator",
                launchSpeed: "2-4 Weeks",
                url: "#",
            },
        ],
    },
    {
        heading: "Finance & Documents",
        items: [featuredApps[1], featuredApps[2], featuredApps[8], {
            name: "Debt to Legacy",
            outcome: "Launch a financial growth and debt-elimination coaching platform.",
            bestFor: "Financial coaches and education brands.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Finance",
            buyerType: "Consultant",
            launchSpeed: "1-2 Weeks",
            url: "https://debttolegacy.com",
        }],
    },
    {
        heading: "Travel & City Discovery",
        items: [featuredApps[3], featuredApps[4], {
            name: "Travel Center Hub",
            outcome: "Launch a travel portal combining flights, hotels, and experiences.",
            bestFor: "Travel agencies and destination brands.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Travel",
            buyerType: "Agency",
            launchSpeed: "1-2 Weeks",
            url: "https://travelcenterhub.com",
        }, {
            name: "LiveLoop",
            outcome: "Launch real-time local recommendation feeds for travelers.",
            bestFor: "Travel creators and city discovery teams.",
            status: "App Store",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Travel",
            buyerType: "Creator",
            launchSpeed: "72 Hours",
            url: "https://apps.apple.com/us/app/live-loop/id6760877693",
        }],
    },
    {
        heading: "Media & Content",
        items: [featuredApps[5], {
            name: "Campaign Signal Studio",
            outcome: "Launch a message and content workflow hub for campaign teams.",
            bestFor: "Political creators, advocacy teams, strategists.",
            status: "Available For Customization",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Media",
            buyerType: "Agency",
            launchSpeed: "2-4 Weeks",
            url: "#",
        }, {
            name: "News Showcase",
            outcome: "Launch a niche news publishing product in your market.",
            bestFor: "Media brands and local publishers.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Media",
            buyerType: "Creator",
            launchSpeed: "1-2 Weeks",
            url: "https://news.expeditionamerica.us/",
        }, {
            name: "App Showcase",
            outcome: "Launch a curated app/product showcase portal for your audience.",
            bestFor: "Founders, agencies, product communities.",
            status: "Private Build",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Media",
            buyerType: "Agency",
            launchSpeed: "1-2 Weeks",
            url: "https://appaggregator.felixconsult.co/",
        }],
    },
    {
        heading: "Logistics & Local Services",
        items: [
            featuredApps[4],
            {
                name: "AFLaundry",
                outcome: "Launch a local service operations app for order tracking and customer flow.",
                bestFor: "Laundry, cleaning, and home services.",
                status: "Live Demo",
                startingPackage: "$499 launch setup",
                budget: "$499 Setup",
                appType: "Logistics",
                buyerType: "Local Business",
                launchSpeed: "1-2 Weeks",
                url: "https://aflaundry.com/",
            },
            {
                name: "Errand Mover",
                outcome: "Launch scheduling and dispatch operations for local fulfillment.",
                bestFor: "Delivery operators and service dispatch teams.",
                status: "Live Demo",
                startingPackage: "$499 launch setup",
                budget: "$499 Setup",
                appType: "Logistics",
                buyerType: "Local Business",
                launchSpeed: "1-2 Weeks",
                url: "https://errandeasyscheduler.com",
            },
            {
                name: "AFLaundry-New",
                outcome: "Launch a new branded variant of proven laundry operations workflows.",
                bestFor: "Local operators expanding into app-led delivery.",
                status: "Available For Customization",
                startingPackage: "$1,500+ custom",
                budget: "$1,500+ Custom",
                appType: "Logistics",
                buyerType: "Entrepreneur",
                launchSpeed: "2-4 Weeks",
                url: "#",
            },
        ],
    },
    {
        heading: "Dashboards & Internal Tools",
        items: [featuredApps[6], featuredApps[7], {
            name: "Felix App Manager",
            outcome: "Launch an internal operations dashboard to monitor your app portfolio.",
            bestFor: "Studios, agencies, multi-product founders.",
            status: "Private Build",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Dashboard",
            buyerType: "Agency",
            launchSpeed: "1-2 Weeks",
            url: "http://felixdgreatapps.felixconsult.co/",
        }, {
            name: "Customer Support Tracker",
            outcome: "Launch a centralized support portal for customer issue tracking.",
            bestFor: "Service businesses and support-heavy teams.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Dashboard",
            buyerType: "Consultant",
            launchSpeed: "1-2 Weeks",
            url: "https://agent.citydiscoverer.ai/",
        }],
    },
    {
        heading: "Civic, Nonprofit & Conservation",
        items: [{
            name: "Civic Candidate Support Platform (CCSP)",
            outcome: "Launch a campaign operations foundation for teams and supporters.",
            bestFor: "Candidates, civic teams, political operators.",
            status: "Available For Customization",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Nonprofit",
            buyerType: "Nonprofit",
            launchSpeed: "2-4 Weeks",
            url: "#",
        }, {
            name: "WACI Action Hub",
            outcome: "Launch a storytelling and community mobilization nonprofit platform.",
            bestFor: "Conservation groups and impact organizations.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Nonprofit",
            buyerType: "Nonprofit",
            launchSpeed: "1-2 Weeks",
            url: "https://wacihub.org",
        }, {
            name: "WildlifeHarmony",
            outcome: "Launch a wildlife impact awareness and coordination platform.",
            bestFor: "Conservation initiatives and NGOs.",
            status: "Available For Customization",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Nonprofit",
            buyerType: "Nonprofit",
            launchSpeed: "2-4 Weeks",
            url: "#",
        }, {
            name: "Wildlife of Africa Initiative Voice for Wildlife",
            outcome: "Launch an events and advocacy platform for environmental missions.",
            bestFor: "Nonprofits, foundations, impact campaigns.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Nonprofit",
            buyerType: "Nonprofit",
            launchSpeed: "1-2 Weeks",
            url: "https://wacicrew.org",
        }],
    },
    {
        heading: "Education & Learning",
        items: [{
            name: "LearnFlow",
            outcome: "Launch a structured learning and curriculum delivery experience.",
            bestFor: "Educators, coaches, cohort-based programs.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Dashboard",
            buyerType: "Consultant",
            launchSpeed: "1-2 Weeks",
            url: "https://learn.debttolegacy.com/",
        }, featuredApps[7], {
            name: "DTL Learning",
            outcome: "Launch a branded education portal tied to your program method.",
            bestFor: "Training programs and membership educators.",
            status: "Available For Customization",
            startingPackage: "$1,500+ custom",
            budget: "$1,500+ Custom",
            appType: "Dashboard",
            buyerType: "Consultant",
            launchSpeed: "2-4 Weeks",
            url: "#",
        }, {
            name: "Inquiry-Hub",
            outcome: "Launch a cohort and inquiry workspace for collaborative learning.",
            bestFor: "Program operators, facilitators, learning labs.",
            status: "Live Demo",
            startingPackage: "$499 launch setup",
            budget: "$499 Setup",
            appType: "Dashboard",
            buyerType: "Consultant",
            launchSpeed: "1-2 Weeks",
            url: "https://inquiryhub.app",
        }],
    },
]

function inferStatus(url: string): Status {
    if (!url || url === "#") return "Available For Customization"
    if (url.includes("apps.apple.com")) return "App Store"
    if (url.includes("felixconsult.co") && !url.includes("www.felixconsult.co")) return "Private Build"
    return "Live Demo"
}

function mapAppType(sourceType: string, name: string): AppType {
    const n = name.toLowerCase()
    if (n.includes("book") || n.includes("schedule") || n.includes("calendar") || n.includes("reserve")) return "Booking"
    if (sourceType.includes("Financial")) return "Finance"
    if (sourceType.includes("Travel")) return "Travel"
    if (sourceType.includes("Media")) return "Media"
    if (sourceType.includes("Logistics")) return "Logistics"
    if (sourceType.includes("Nonprofit") || n.includes("wild") || n.includes("civic") || n.includes("waci")) return "Nonprofit"
    return "Dashboard"
}

function mapBudget(status: Status): Budget {
    if (status === "App Store") return "Under $250"
    if (status === "Available For Customization") return "$1,500+ Custom"
    return "$499 Setup"
}

function mapBuyerType(appType: AppType): BuyerType {
    if (appType === "Media") return "Creator"
    if (appType === "Nonprofit") return "Nonprofit"
    if (appType === "Dashboard") return "Consultant"
    if (appType === "Booking" || appType === "Logistics") return "Local Business"
    if (appType === "Travel") return "Entrepreneur"
    return "Agency"
}

function mapLaunchSpeed(status: Status): LaunchSpeed {
    if (status === "App Store" || status === "Live Demo") return "72 Hours"
    if (status === "Private Build") return "1-2 Weeks"
    return "2-4 Weeks"
}

const fullArchive: CatalogItem[] = archiveData.map((item) => {
    const status = inferStatus(item.url)
    const appType = mapAppType(item.appType, item.name)
    const budget = mapBudget(status)
    const buyerType = mapBuyerType(appType)
    return {
        name: item.name,
        outcome: archiveOutcome(appType),
        bestFor: archiveBestFor(buyerType),
        status,
        startingPackage: budget === "Under $250" ? "$99 app business review" : budget === "$499 Setup" ? "$499 launch setup" : "$1,500+ custom build",
        budget,
        appType,
        buyerType,
        launchSpeed: mapLaunchSpeed(status),
        url: item.url,
    }
})

function StatusBadge({ status }: { status: Status }) {
    return (
        <span className="text-xs px-3 py-1 rounded-full bg-[#C6A75E]/15 text-[#C6A75E] border border-[#C6A75E]/30">
            {status}
        </span>
    )
}

function CatalogCard({ item }: { item: CatalogItem }) {
    return (
        <article className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 hover:border-[#C6A75E]/60 transition-all duration-300">
            <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <StatusBadge status={item.status} />
            </div>
            <p className="text-gray-300 mb-4">{item.outcome}</p>
            <p className="text-gray-300 text-sm mb-2"><span className="text-[#C6A75E] font-semibold">Buyer fit ({item.buyerType}):</span> {personaMessage(item)}</p>
            <p className="text-gray-400 text-sm mb-2"><span className="text-white font-semibold">Best for:</span> {item.bestFor}</p>
            <p className="text-gray-400 text-sm mb-4"><span className="text-white font-semibold">Starting at:</span> {item.startingPackage}</p>
            <div className="flex flex-wrap gap-3">
                {item.url !== "#" && (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#C6A75E]/50 text-[#C6A75E] px-4 py-2 rounded-md text-sm font-semibold hover:border-[#C6A75E]"
                    >
                        View Demo
                    </a>
                )}
                <Link
                    href="/contact"
                    className="bg-[#C6A75E] text-black px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90"
                >
                    Request This App
                </Link>
            </div>
        </article>
    )
}

export default function AppCatalogPage() {
    const [search, setSearch] = useState("")
    const [appType, setAppType] = useState<string>("All")
    const [budget, setBudget] = useState<string>("All")
    const [status, setStatus] = useState<string>("All")
    const [buyerType, setBuyerType] = useState<string>("All")
    const [launchSpeed, setLaunchSpeed] = useState<string>("All")

    const filteredArchive = useMemo(() => {
        return fullArchive.filter((item) => {
            if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false
            if (appType !== "All" && item.appType !== appType) return false
            if (budget !== "All" && item.budget !== budget) return false
            if (status !== "All" && item.status !== status) return false
            if (buyerType !== "All" && item.buyerType !== buyerType) return false
            if (launchSpeed !== "All" && item.launchSpeed !== launchSpeed) return false
            return true
        })
    }, [search, appType, budget, status, buyerType, launchSpeed])

    return (
        <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#C6A75E]/10 blur-[160px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <section className="max-w-4xl mb-14">
                    <p className="inline-block text-xs tracking-[0.2em] uppercase text-[#C6A75E] border border-[#C6A75E]/40 rounded-full px-3 py-1 mb-4">Storefront Catalog</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[#C6A75E]">Choose a Ready-Made App And Launch It Under Your Brand</h1>
                    <p className="text-gray-300 text-lg mb-8">Pick a proven app foundation. Brand it. Launch it fast.</p>
                    <Link href="/contact" className="inline-block bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90">Not sure which app fits? Get a $99 App Business Review</Link>
                </section>

                <section className="mb-16 border border-[#C6A75E]/20 rounded-2xl p-8 bg-[#101014]">
                    <h2 className="text-3xl font-semibold mb-4">Why not just use AI?</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        AI can generate code, but code is not a launched app. Felix Consult gives you a working app foundation, deployment support, branding guidance, offer positioning, and customization help. You are not buying prompts. You are buying a shortcut from idea to live product.
                    </p>
                    <Link href="/contact" className="inline-block bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90">
                        Get My App Matched
                    </Link>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-3">Featured App Packages</h2>
                    <p className="text-gray-400 mb-8">Start here. These are the fastest-to-sell app offers.</p>
                    <div className="grid lg:grid-cols-3 gap-6">
                        {featuredApps.map((item) => (
                            <CatalogCard key={item.name} item={item} />
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-3">Browse By App Type</h2>
                    <p className="text-gray-400 mb-10">Choose by outcome, not internal category.</p>
                    <div className="space-y-12">
                        {browseByType.map((group) => (
                            <div key={group.heading}>
                                <h3 className="text-2xl font-semibold text-[#C6A75E] mb-5">{group.heading}</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {group.items.map((item) => (
                                        <CatalogCard key={`${group.heading}-${item.name}`} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <details className="group border border-[#C6A75E]/20 rounded-2xl p-6 bg-[#101014]">
                        <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-semibold text-[#C6A75E]">
                            <span>View Full App Library ({fullArchive.length} Apps)</span>
                            <span className="text-sm text-gray-400 group-open:hidden">Expand</span>
                            <span className="text-sm text-gray-400 hidden group-open:inline">Collapse</span>
                        </summary>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-4">Filter Library</h3>
                            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search app name"
                                    className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm"
                                />
                                <select value={appType} onChange={(e) => setAppType(e.target.value)} className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm">
                                    <option>All</option><option>Booking</option><option>Finance</option><option>Travel</option><option>Media</option><option>Logistics</option><option>Dashboard</option><option>Nonprofit</option>
                                </select>
                                <select value={budget} onChange={(e) => setBudget(e.target.value)} className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm">
                                    <option>All</option><option>Under $250</option><option>$499 Setup</option><option>$1,500+ Custom</option>
                                </select>
                                <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm">
                                    <option>All</option><option>Live Demo</option><option>App Store</option><option>Prototype</option><option>Private Build</option><option>Available For Customization</option><option>Coming Soon</option>
                                </select>
                                <select value={buyerType} onChange={(e) => setBuyerType(e.target.value)} className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm">
                                    <option>All</option><option>Entrepreneur</option><option>Agency</option><option>Local Business</option><option>Creator</option><option>Nonprofit</option><option>Consultant</option>
                                </select>
                                <select value={launchSpeed} onChange={(e) => setLaunchSpeed(e.target.value)} className="bg-[#0B0B0F] border border-[#C6A75E]/20 rounded-md px-3 py-2 text-sm">
                                    <option>All</option><option>72 Hours</option><option>1-2 Weeks</option><option>2-4 Weeks</option>
                                </select>
                            </div>

                            <p className="text-gray-400 mb-4 text-sm">Showing {filteredArchive.length} of {fullArchive.length} apps</p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredArchive.map((item) => (
                                    <CatalogCard key={`${item.name}-${item.url}`} item={item} />
                                ))}
                            </div>
                        </div>
                    </details>
                </section>

                <section className="text-center border-t border-[#C6A75E]/20 pt-12">
                    <h2 className="text-2xl font-semibold mb-4 text-[#C6A75E]">Get Matched With The Right App</h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">Tell us your buyer, budget, and timeline. We will map you to the best-fit app package.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90">Request Consultation</Link>
                        <Link href="/pricing" className="border border-[#C6A75E]/50 px-6 py-3 rounded-md font-semibold hover:border-[#C6A75E] hover:text-[#C6A75E]">View Pricing</Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
