export const dynamic = "force-static";
export default function HomePage() {
  return (
    <main className="bg-[#05060A] text-white">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-[#0B0E14] to-[#05060A]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Felix Consulting Group
        </h1>

        <p className="text-[#D4AF37] text-lg md:text-xl mb-4">
          Building Scalable Digital Platforms For Modern Life, Finance & Intelligent Systems
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mb-10">
             Find the system that solves your problem across finance, travel, media, and infrastructure — or partner with us to explore solutions together.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/ecosystem"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Explore Our Ecosystem
          </a>
          <a
            href="/contact"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            Work With Us
          </a>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-12 border-t border-gray-800 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">65+</p>
            <p className="text-gray-400 text-sm">Active Ventures</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">12+</p>
            <p className="text-gray-400 text-sm">Industry Verticals</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">Global</p>
            <p className="text-gray-400 text-sm">Operational Reach</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">Impact-Driven</p>
            <p className="text-gray-400 text-sm">Mission Alignment</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6 text-center border-t border-gray-800">
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
          “Felix Consulting Group operates as a structured digital operating system —
          not a collection of disconnected projects.”
        </p>
      </section>

      {/* CORE DIVISIONS */}
      <section className="py-24 px-6 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Core Divisions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Financial Technologies",
              desc: "Scalable fintech infrastructure, intelligent wealth systems, and modern payment architecture.",
              items: [
                "WealthFront App — Intelligent wealth tracking & financial visibility.",
                "Payment Infrastructure Layer — Structured transaction systems."
              ],
              link: "Explore Financial Systems →"
            },
            {
              title: "Travel & Urban Systems",
              desc: "Smart city intelligence, structured tourism platforms, and AI-powered travel ecosystems.",
              items: [
                "City Intelligence Layer — Data-driven urban insights.",
                "Travel Ecosystem Platform — Intelligent discovery & logistics."
              ],
              link: "Explore Travel Systems →"
            },
            {
              title: "Digital Media & Applications",
              desc: "Streaming platforms, discovery applications, and scalable cross-platform digital products.",
              items: [
                "Streaming Infrastructure — Scalable media delivery platforms.",
                "Discovery Applications — Cross-platform digital ecosystems."
              ],
              link: "Explore Media Systems →"
            },
            {
              title: "Conservation & Environmental Impact",
              desc: "Wildlife conservation, ethical research institutions, and sustainability innovation.",
              items: [
                "Wildlife Conservation Systems — Species protection initiatives.",
                "Sustainability Innovation Lab — Environmental impact solutions."
              ],
              link: "Explore Conservation Systems →"
            },
            {
              title: "Consulting & Strategy",
              desc: "Business transformation, ecosystem architecture, growth advisory, and institutional structuring.",
              items: [
                "Ecosystem Architecture — Structured growth frameworks.",
                "Institutional Structuring — Strategic organizational design."
              ],
              link: "Explore Strategy Systems →"
            },
            {
              title: "Services & Infrastructure",
              desc: "Operational logistics, concierge systems, coworking infrastructure, and service platforms.",
              items: [
                "Concierge & Logistics Systems — Operational delivery platforms.",
                "Coworking Infrastructure — Scalable workspace ecosystems."
              ],
              link: "Explore Infrastructure Systems →"
            }
          ].map((division, i) => (
            <div
              key={i}
              className="bg-[#0B0E14] border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition"
            >
              <h3 className="text-xl font-semibold mb-4">{division.title}</h3>
              <p className="text-gray-400 mb-4">{division.desc}</p>
              <ul className="text-gray-300 text-sm mb-6 space-y-2">
                {division.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <a href="/ecosystem" className="text-[#D4AF37] font-medium hover:underline">
                {division.link}
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* FIND IT SECTION */}
      <section className="py-24 px-6 border-t border-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find It. Use It. Or We’ll Build It.
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Every platform, tool, and system here exists for deployment — not observation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">

          {[
            {
              title: "Found a system?",
              desc: "Use it immediately."
            },
            {
              title: "Need help getting started?",
              desc: "We guide implementation."
            },
            {
              title: "Need it tailored?",
              desc: "We customize for your context."
            },
            {
              title: "Don’t see your solution?",
              desc: "We architect it with you."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#0B0E14] border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition"
            >
              <h4 className="text-lg font-semibold mb-3 text-[#D4AF37]">
                {card.title}
              </h4>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">
          Deploy What Exists. Build What Doesn’t.
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/ecosystem"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Explore Systems
          </a>
          <a
            href="/contact"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER REMOVED AS REQUESTED */}

    </main>
  )
}
