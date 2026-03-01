"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FinancialDivision() {
  const pathname = usePathname();

  const platforms = [
    {
      name: "IncomeLift",
      description: "Boost and diversify your income streams.",
      url: "https://incomelift.co",
    },
    {
      name: "SteadyVest",
      description: "Steady growth investing platform.",
      url: "https://steadyvest.org",
    },
    {
      name: "BillWatch",
      description: "Smart recurring bill management.",
      url: "https://billwatch.pro",
    },
    {
      name: "DIY Debt",
      description: "Structured debt elimination strategies.",
      url: "https://dyidebt.org/",
    },
    {
      name: "Felix Pay",
      description: "Secure digital payment infrastructure.",
      url: "https://felixpay.net",
    },
    {
      name: "ExpenseWatch",
      description: "Advanced expense intelligence & tracking.",
      url: "https://expensewatch.pro",
    },
    {
      name: "FinanceWatch",
      description: "Complete financial overview dashboard.",
      url: "https://financewatch.app",
    },
    {
      name: "Felix CheckBook",
      description: "Check printing & mailing service.",
      url: "https://felixcheck.com",
    },
    {
      name: "SavingsPro",
      description: "Strategic savings optimization system.",
      url: "https://savingspro.app",
    },
    {
      name: "WealthWatch",
      description:
        "Track your cash flow. Build long-term wealth.",
      url: "https://wealth-watch.app",
    },
    {
      name: "WealthWatch (Apple Store)",
      description: "iOS mobile application.",
      url: "https://apps.apple.com/us/app/wealth-watch/id6758687724",
    },
    {
      name: "Letter Vault",
      description: `Every letter. Tracked. Resolved. Protected.
AI-powered letter management that turns stacks of mail into organized, actionable records. Know what arrived, what it means, and what to do next.`,
      url: "https://lettervault.us",
    },
    {
      name: "Debt to Legacy",
      description:
        "Tools to build income, eliminate debt, and grow your legacy.",
      url: "https://debttolegacy.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
        Financial Ecosystem
      </h1>

      {/* Division Navigation */}
      <div className="mb-16 border-b border-[#C6A75E]/20">
        <div className="flex flex-wrap gap-10 text-sm tracking-wide">
          {[
            { href: "/financial", label: "Financial" },
            { href: "/travel", label: "Travel" },
            { href: "/media", label: "Media" },
            { href: "/conservation", label: "Conservation" },
            { href: "/consulting", label: "Consulting" },
            { href: "/services", label: "Services" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-4 transition ${
                pathname === item.href
                  ? "text-[#C6A75E] font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#C6A75E]" />
              )}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-gray-400 max-w-3xl mb-12 text-lg">
        A complete structured financial suite designed to increase income,
        eliminate debt, optimize payments, and build long-term wealth.
        Each system operates independently — but strengthens the ecosystem
        when used together.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {platforms.map((platform) => (
          <DivisionItem
            key={platform.name}
            name={platform.name}
            description={platform.description}
            url={platform.url}
          />
        ))}

      </div>

      {/* Bottom Institutional Statement */}
      <section className="mt-24 border-t border-gray-800 pt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Structured Financial Architecture — Not Isolated Tools
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These platforms are designed to function independently or
          integrate into a larger wealth-building framework.
          Deploy one system — or architect a complete financial stack.
        </p>
      </section>

    </main>
  );
}

function DivisionItem({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                 hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#C6A75E] transition">
        {name}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      <span className="text-sm text-[#C6A75E] font-medium">
        Visit Platform →
      </span>
    </a>
  );
}
