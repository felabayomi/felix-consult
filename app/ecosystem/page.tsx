import Link from "next/link"

export default function EcosystemPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      {/* Ambient Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#C6A75E]">
            Solutions Ecosystem
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            Every system inside this ecosystem was built to be deployed.
            These are not theoretical concepts — they are structured platforms
            designed for immediate use, customization, or expansion.
          </p>

          <p className="text-gray-500">
            Find what fits. Use it. If you need guidance, we implement it.
            If it requires adaptation, we customize it.
            If it does not exist yet, we architect it with you.
          </p>
        </section>


        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link
            href="/financial"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Financial Technologies
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Wealth systems, payment infrastructure, income intelligence,
              and financial architecture platforms.
            </p>
          </Link>

          <Link
            href="/travel"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Travel & Urban Systems
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              City intelligence platforms, itinerary systems,
              experiential discovery tools, and travel infrastructure.
            </p>
          </Link>

          <Link
            href="/media"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Digital Media & Applications
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Streaming platforms, scalable content systems,
              discovery applications, and digital ecosystems.
            </p>
          </Link>

          <Link
            href="/conservation"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Conservation & Environmental Impact
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Wildlife systems, sustainability innovation,
              research platforms, and measurable impact initiatives.
            </p>
          </Link>

          <Link
            href="/consulting"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Consulting & Strategy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Institutional structuring, ecosystem architecture,
              workflow systems, and strategic growth modeling.
            </p>
          </Link>

          <Link
            href="/services"
            className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
              Services & Infrastructure
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Logistics systems, concierge platforms,
              coworking infrastructure, and operational architecture.
            </p>
          </Link>

        </div>


        {/* BOTTOM CTA BLOCK */}
        <section className="mt-24 text-center border-t border-gray-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Deploy What Exists. Architect What Doesn’t.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            This ecosystem is structured for action.
            Use an existing platform, request guided implementation,
            adapt a system to your context, or collaborate on building
            a new solution from the ground up.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Start a Conversation
            </Link>

            <Link
              href="/"
              className="border border-[#C6A75E]/50 px-6 py-3 rounded-md font-semibold hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
            >
              Return to Overview
            </Link>
          </div>

        </section>

      </div>
    </main>
  )
}
