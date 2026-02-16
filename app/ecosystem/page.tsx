import Link from "next/link"

export default function EcosystemPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
          Portfolio Overview
        </h1>

        <p className="text-gray-400 mb-12">
          Felix Consulting Group operates a diversified portfolio across
          financial technology, travel ecosystems, digital media,
          infrastructure services, and conservation initiatives.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <Link
            href="/financial"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Financial Technologies
            </h3>
            <p className="text-gray-400 text-sm">
              FinTech platforms, wealth systems, and financial intelligence products.
            </p>
          </Link>

          <Link
            href="/travel"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Travel & Urban Experiences
            </h3>
            <p className="text-gray-400 text-sm">
              Smart travel technology, AI itinerary tools, and experiential platforms.
            </p>
          </Link>

          <Link
            href="/media"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Digital Media & Apps
            </h3>
            <p className="text-gray-400 text-sm">
              Streaming platforms, discovery apps, and cross-platform media systems.
            </p>
          </Link>

          <Link
            href="/conservation"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Conservation & Impact
            </h3>
            <p className="text-gray-400 text-sm">
              Wildlife conservation, research initiatives, and sustainability ventures.
            </p>
          </Link>

          <Link
            href="/consulting"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Consulting & Strategy
            </h3>
            <p className="text-gray-400 text-sm">
              Business transformation, ecosystem building, and innovation advisory.
            </p>
          </Link>

          <Link
            href="/services"
            className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                       hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                       transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">
              Services & Infrastructure
            </h3>
            <p className="text-gray-400 text-sm">
              Logistics, concierge services, coworking, and operational systems.
            </p>
          </Link>

        </div>
      </div>
    </main>
  )
}
