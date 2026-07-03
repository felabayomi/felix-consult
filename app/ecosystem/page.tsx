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
            Productized Solutions
          </h1>

          <p className="text-gray-400 text-lg mb-6">
            This is our app-foundry catalog: proven solution tracks you can launch, customize, or scale with us.
          </p>

          <p className="text-gray-500">
            Choose your closest fit, then we scope implementation based on your goals, timeline, and operating model.
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
              Revenue systems, payments, billing flows, finance dashboards,
              and operational controls.
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
              Booking experiences, itinerary engines, travel content,
              and local discovery products.
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
              Media workflows, content engines, platform admin tools,
              and audience growth products.
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
              Impact dashboards, research tooling, field data workflows,
              and reporting systems.
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
              Product strategy, roadmap planning, build sequencing,
              and launch guidance.
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
              Internal operations apps, service delivery workflows,
              and team productivity platforms.
            </p>
          </Link>

        </div>


        {/* BOTTOM CTA BLOCK */}
        <section className="mt-24 text-center border-t border-gray-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Start From A Proven Track, Then Tailor To Fit
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            We can implement one of these solution tracks directly,
            adapt it to your workflows, or extend it into a custom platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Book A Discovery Call
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
