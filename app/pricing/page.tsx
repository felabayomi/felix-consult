"use client"

import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">Pricing</h1>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#C6A75E] text-center">
            App Launch Services
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Fast-track your app to market with our ready-made launch packages.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              price="$99"
              title="App Business Review"
              features={[
                "30-minute discovery call",
                "Market & competitor analysis",
                "Viability assessment",
                "Roadmap recommendation",
              ]}
              cta="Request Review"
            />

            <PricingCard
              price="$499"
              title="Launch Setup"
              features={[
                "Complete app architecture design",
                "Technical stack recommendation",
                "Branding & design direction",
                "30-day deployment plan",
              ]}
              cta="Start Setup"
              highlight
            />

            <PricingCard
              price="Custom"
              subtitle="from $1,500"
              title="App Launch"
              features={[
                "Full design & development",
                "Database & backend setup",
                "Branded deployment",
                "Post-launch support & optimization",
              ]}
              cta="Discuss Build"
            />
          </div>
        </div>

        <div className="mt-20 text-center border-t border-[#C6A75E]/20 pt-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#C6A75E]">
            Operational Partnerships
          </h2>

          <p className="text-gray-400 mb-6">
            Partner with Felix Consulting Group to scale infrastructure,
            expand service delivery, or build new operational platforms.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-[#C6A75E] text-black hover:bg-[#D4B56F] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Explore Partnership
          </Link>
        </div>
      </div>
    </main>
  )
}

function PricingCard({
  price,
  subtitle,
  title,
  features,
  cta,
  highlight,
}: {
  price: string
  subtitle?: string
  title: string
  features: string[]
  cta: string
  highlight?: boolean
}) {
  return (
    <div
      className={`relative p-8 rounded-xl border transition-all duration-300 flex flex-col
                  ${
                    highlight
                      ? "bg-[#C6A75E]/10 border-[#C6A75E]/60 scale-105"
                      : "bg-[#111114] border-[#C6A75E]/20 hover:border-[#C6A75E]/60"
                  }`}
    >
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C6A75E] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-[#C6A75E]">{price}</span>
          {subtitle && <span className="text-gray-400 text-sm">{subtitle}</span>}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
            <span className="text-[#C6A75E] mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300
                    ${
                      highlight
                        ? "bg-[#C6A75E] text-black hover:bg-[#D4B56F]"
                        : "bg-[#C6A75E]/20 text-[#C6A75E] hover:bg-[#C6A75E]/30"
                    }`}
      >
        {cta}
      </Link>

      <p className="text-xs text-gray-500 text-center mt-4">
        Inquiries sent to thefelixconsultinggroup@gmail.com
      </p>
    </div>
  )
}
