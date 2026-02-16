"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ConsultingDivision() {
  const pathname = usePathname()
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10">

      <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
        Consulting & Strategy
      </h1>

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

      <p className="text-gray-400 max-w-3xl mb-12">
        Felix Consulting Group provides strategic advisory services
        focused on business transformation, ecosystem design,
        digital innovation, and sustainable growth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <ServiceCard
          title="Business Transformation"
          description="Operational restructuring, digital modernization, and scalable growth frameworks."
        />

        <ServiceCard
          title="Ecosystem Building"
          description="Designing interconnected business platforms that drive network effects and long-term value."
        />

        <ServiceCard
          title="Innovation Advisory"
          description="AI integration, technology roadmapping, and new product strategy."
        />

        <ServiceCard
          title="Growth Strategy"
          description="Market expansion, revenue optimization, and long-term capital positioning."
        />

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Partner With Us
        </h2>
        <p className="text-gray-400 mb-6">
          Engage Felix Consulting Group for advisory, venture strategy,
          or ecosystem development partnerships.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C6A75E] text-black hover:bg-[#D4B56F] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Request Consultation
        </Link>
      </div>
      </div>

    </main>
  )
}

function ServiceCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                    hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                    transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  )
}
