import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white">

      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10">


      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 pt-28 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Felix Consulting Group
        </h1>

        <p className="max-w-3xl text-lg text-gray-400 mb-8">
         Building Scalable Digital Platforms For Modern Life, Finance & Intelligent Systems

We find the system that solves your problem across finance, travel, media, and infrastructure—or we can partner to build it.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/ecosystem"
            className="bg-[#C6A75E] text-black hover:bg-[#D4B56F] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Explore Our Ecosystem
          </Link>
          <Link
            href="/contact"
            className="border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* INSTITUTIONAL METRICS */}
      <section className="py-10 border-t border-b border-[#C6A75E]/10 bg-[#0E0E13]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-3xl font-bold text-[#C6A75E]">40+</p>
            <p className="text-gray-400 text-sm">Active Ventures</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#C6A75E]">12+</p>
            <p className="text-gray-400 text-sm">Industry Verticals</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#C6A75E]">Global</p>
            <p className="text-gray-400 text-sm">Operational Reach</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-[#C6A75E]">Impact-Driven</p>
            <p className="text-gray-400 text-sm">Mission Alignment</p>
          </div>
Built and deployed across multiple ventures within the Felix ecosystem.
        </div>
      </section>
{/* FOUNDER VISION BLOCK */}
<section className="py-20 px-6 border-t border-[#C6A75E]/10">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#C6A75E]">
      A Founder-Led Architecture
    </h2>

    <p className="text-gray-400 leading-relaxed mb-8">
      Felix Consulting Group was not built as a collection of projects —
      it was designed as an integrated ecosystem.
      Each division, platform, and initiative is structured around
      one principle: systems create scale, and clarity creates momentum.
    </p>

    <p className="text-gray-500 text-sm italic">
      Vision. Structure. Impact.
    </p>

  </div>
</section>
 
      {/* CORE DIVISIONS */}
      <section className="py-20 px-6 border-t border-[#C6A75E]/10">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Divisions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Felix Consulting Group operates through structured divisions
              designed to drive institutional scale, ecosystem growth,
              and measurable global impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Financial Technologies",
                desc: "Fintech infrastructure, payment systems, wealth platforms, and financial intelligence ecosystems.",
                link: "/financial"
              },
              {
                title: "Travel & Urban Systems",
                desc: "City intelligence platforms, tourism ecosystems, and AI-powered travel infrastructure.",
                link: "/travel"
              },
              {
                title: "Digital Media & Applications",
                desc: "Streaming platforms, discovery applications, and scalable cross-platform digital products.",
                link: "/media"
              },
              {
                title: "Conservation & Environmental Impact",
                desc: "Wildlife conservation, ethical research institutions, and sustainability innovation.",
                link: "/conservation"
              },
              {
                title: "Consulting & Strategy",
                desc: "Business transformation, ecosystem architecture, growth advisory, and institutional structuring.",
                link: "/consulting"
              },
              {
                title: "Services & Infrastructure",
                desc: "Operational logistics, concierge systems, coworking infrastructure, and service platforms.",
                link: "/services"
              },
            ].map((division, index) => (
              <a
                key={index}
                href={division.link}
                className="group p-8 rounded-xl border border-[#C6A75E]/20 bg-[#111114] 
                           hover:border-[#C6A75E] hover:bg-[#141418] 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#C6A75E] transition">
                  {division.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {division.desc}
                </p>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* ...existing code... */}

      {/* ...existing code... */}

      {/* FOUNDER VISION */}
      <section className="py-20 px-6 bg-[#0E0E13] border-t border-[#C6A75E]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side – Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Ecosystem Architect
            </h2>

            <p className="text-gray-400 mb-6">
              Felix Olusola Abayomi is building a structured digital ecosystem 
              spanning finance, travel intelligence, media systems, 
              conservation initiatives, and operational infrastructure.
            </p>

            <p className="text-gray-500 mb-8">
              His philosophy is simple: build interconnected platforms 
              designed for long-term scale, disciplined execution, 
              and measurable global impact.
            </p>

            <Link
              href="/about/founder"
              className="inline-block border border-[#C6A75E] text-[#C6A75E] 
                         hover:bg-[#C6A75E] hover:text-black 
                         px-6 py-3 rounded-lg font-semibold 
                         transition-all duration-300"
            >
              Read Founder Philosophy
            </Link>
          </div>

          {/* Right Side – Strategic Quote Block */}
          <div className="bg-[#111114] p-10 rounded-xl border border-[#C6A75E]/20">
            <p className="text-lg text-gray-300 italic leading-relaxed">
              "True scale is not built through isolated projects — 
              it is built through structured ecosystems where each 
              platform strengthens the next."
            </p>

            <div className="mt-6 text-[#C6A75E] font-semibold">
              — Felix Olusola Abayomi
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t border-[#C6A75E]/20 bg-[#111114]">
        © 2026 Felix Consulting Group. All rights reserved.
      </footer>

      </div>
    </main>
  )
}

/* COMPONENTS */

function DivisionCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-[#0D1428] p-6 rounded-xl border border-gray-800 hover:border-blue-600 transition">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
  )
}

function EcosystemBlock({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: { name: string; url: string }[]
}) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-blue-400">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 max-w-3xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            className="px-4 py-2 bg-[#0D1428] rounded-lg border border-gray-800 
                       hover:border-blue-600 hover:bg-[#101B35] 
                       hover:scale-105 transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}
