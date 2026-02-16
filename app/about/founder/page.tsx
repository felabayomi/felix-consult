export default function FounderPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HERO */}
        <h1 className="text-5xl font-bold mb-4 text-[#C6A75E]">
          Felix Olusola Abayomi
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Founder & Ecosystem Architect
        </p>

        <p className="text-gray-400 text-lg mb-16 leading-relaxed">
          Felix Olusola Abayomi is the founder of Felix Consulting Group,
          a structured consulting and holding platform focused on building
          scalable systems, operational clarity, and long-term institutional growth.
          His work centers on transforming fragmented ideas into disciplined,
          sustainable ecosystems.
        </p>

        {/* SECTION — OPERATING PHILOSOPHY */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-[#C6A75E]">
            Operating Philosophy
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Felix believes sustainable growth is not accidental — it is engineered.
            Businesses fail not from lack of vision, but from lack of structure.
            His work focuses on designing clear operational frameworks that
            allow entrepreneurs and organizations to scale with discipline.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Build systems before chasing scale</li>
            <li>• Design clarity before increasing complexity</li>
            <li>• Strengthen foundations before accelerating growth</li>
            <li>• Structure partnerships before expanding ecosystems</li>
          </ul>
        </section>

        {/* SECTION — SYSTEMS & STRATEGY */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-[#C6A75E]">
            Systems & Strategy
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Through Felix Consulting Group, he architects operational models
            across financial technologies, digital platforms, travel ecosystems,
            and conservation initiatives. His approach combines strategic
            thinking with practical execution frameworks.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Strategic Planning & Institutional Structuring</li>
            <li>• Workflow & Operational Architecture</li>
            <li>• Ecosystem Design & Venture Integration</li>
            <li>• CRM & Infrastructure Systems</li>
            <li>• Brand & Reputation Positioning</li>
            <li>• Long-Term Growth Modeling</li>
          </ul>
        </section>

        {/* SECTION — LONG TERM VISION */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6 text-[#C6A75E]">
            Long-Term Vision
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Felix is building an interconnected portfolio of ventures designed
            to operate independently yet reinforce one another. The objective
            is not short-term hype, but durable infrastructure — financial
            systems, travel intelligence platforms, digital applications,
            and impact-driven initiatives that create measurable value over time.
          </p>
        </section>

{/* PHILOSOPHY IN PRACTICE */}
<section className="mb-20">
  <h2 className="text-3xl font-semibold mb-8 text-[#C6A75E]">
    Philosophy in Practice
  </h2>

  <div className="space-y-10">

    {/* CASE 1 */}
    <div className="border border-[#C6A75E]/20 rounded-xl p-8 bg-[#111114]">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Financial Ecosystem Architecture
      </h3>

      <p className="text-gray-400 mb-4">
        Rather than launching isolated finance tools, Felix structured
        multiple platforms — including income systems, savings tools,
        payment infrastructure, and expense intelligence — to function
        as a connected financial ecosystem.
      </p>

      <p className="text-gray-500">
        Each platform strengthens the others, reinforcing user value
        while building long-term infrastructure rather than one-off products.
      </p>
    </div>

    {/* CASE 2 */}
    <div className="border border-[#C6A75E]/20 rounded-xl p-8 bg-[#111114]">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Travel Intelligence Platforms
      </h3>

      <p className="text-gray-400 mb-4">
        Through ventures like city discovery tools and itinerary systems,
        the objective was not simply tourism apps — but a layered travel
        intelligence infrastructure connecting geolocation, planning,
        and experiential data.
      </p>

      <p className="text-gray-500">
        The strategy reflects a systems-first mindset:
        build modular tools that can integrate and scale across markets.
      </p>
    </div>

    {/* CASE 3 */}
    <div className="border border-[#C6A75E]/20 rounded-xl p-8 bg-[#111114]">
      <h3 className="text-xl font-semibold mb-3 text-white">
        Conservation & Impact Integration
      </h3>

      <p className="text-gray-400 mb-4">
        Conservation initiatives are positioned not as separate causes,
        but as integrated components within a broader ecosystem —
        combining storytelling, community engagement, and digital infrastructure.
      </p>

      <p className="text-gray-500">
        This integration reflects a belief that impact and enterprise
        are not opposites — they are mutually reinforcing systems.
      </p>
    </div>

  </div>

{/* ECOSYSTEM ARCHITECTURE DIAGRAM (PURE SVG) */}
<section className="mt-20 mb-8">
  <h2 className="text-3xl font-semibold mb-12 text-[#C6A75E] text-center">

    Ecosystem Architecture Model
  </h2>
  <div className="w-24 h-[2px] bg-[#C6A75E] mx-auto mb-12 opacity-60" />

  <div className="max-w-6xl mx-auto">
    <div className="relative rounded-3xl border border-[#C6A75E]/25 
          bg-gradient-to-br from-[#0F1428]/70 via-[#0B0B0F] to-[#0F1428]/70
          p-8 md:p-14 shadow-[0_0_80px_rgba(198,167,94,0.06)]">
      <svg
        viewBox="0 0 1200 780"
        className="w-full h-auto"
        role="img"
        aria-label="Ecosystem Architecture Model diagram showing four connected layers"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle background gradient */}
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#12172F" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0B0B0F" stopOpacity="0.85" />
          </linearGradient>

          {/* Gold line gradient */}
          <linearGradient id="goldLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C6A75E" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C6A75E" stopOpacity="0.25" />
          </linearGradient>

          {/* Glow for nodes */}
          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Card shadow */}
          <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Canvas */}
        <rect x="0" y="0" width="1200" height="780" rx="26" fill="url(#bgGrad)" />

        {/* Vertical spine */}
        <line x1="600" y1="110" x2="600" y2="670" stroke="url(#goldLine)" strokeWidth="3" />

        {/* Helper: function-like layout (hardcoded positions) */}
        {/* Layer 1 */}
        <circle cx="600" cy="140" r="10" fill="#C6A75E" filter="url(#goldGlow)" />
        <rect x="170" y="170" width="860" height="120" rx="18" fill="#111114" stroke="#C6A75E" strokeOpacity="0.22" strokeWidth="2" filter="url(#cardShadow)" />
        <text x="600" y="220" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          Impact & Global Integration
        </text>
        <text x="600" y="252" textAnchor="middle" fill="#AAB0C0" fontSize="16" fontFamily="ui-sans-serif, system-ui">
          Conservation initiatives, community engagement, and long-term impact systems.
        </text>
        <line x1="600" y1="150" x2="600" y2="170" stroke="#C6A75E" strokeOpacity="0.35" strokeWidth="3" />

        {/* Layer 2 */}
        <circle cx="600" cy="320" r="10" fill="#C6A75E" filter="url(#goldGlow)" />
        <rect x="170" y="350" width="860" height="120" rx="18" fill="#12172F" stroke="#C6A75E" strokeOpacity="0.22" strokeWidth="2" filter="url(#cardShadow)" />
        <text x="600" y="400" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          Experience & Intelligence Platforms
        </text>
        <text x="600" y="432" textAnchor="middle" fill="#AAB0C0" fontSize="16" fontFamily="ui-sans-serif, system-ui">
          Travel systems, media applications, and scalable user ecosystems.
        </text>
        <line x1="600" y1="330" x2="600" y2="350" stroke="#C6A75E" strokeOpacity="0.35" strokeWidth="3" />

        {/* Layer 3 */}
        <circle cx="600" cy="500" r="10" fill="#C6A75E" filter="url(#goldGlow)" />
        <rect x="170" y="530" width="860" height="120" rx="18" fill="#0F1428" stroke="#C6A75E" strokeOpacity="0.22" strokeWidth="2" filter="url(#cardShadow)" />
        <text x="600" y="580" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          Financial & Strategic Systems
        </text>
        <text x="600" y="612" textAnchor="middle" fill="#AAB0C0" fontSize="16" fontFamily="ui-sans-serif, system-ui">
          Payments, wealth platforms, advisory frameworks, and growth architecture.
        </text>
        <line x1="600" y1="510" x2="600" y2="530" stroke="#C6A75E" strokeOpacity="0.35" strokeWidth="3" />

        {/* Layer 4 */}
        <circle cx="600" cy="680" r="10" fill="#C6A75E" filter="url(#goldGlow)" />
        <rect x="170" y="660" width="860" height="90" rx="18" fill="#0E0E13" stroke="#C6A75E" strokeOpacity="0.22" strokeWidth="2" filter="url(#cardShadow)" />
        <text x="600" y="705" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          Operational Infrastructure Core
        </text>
        <text x="600" y="732" textAnchor="middle" fill="#AAB0C0" fontSize="16" fontFamily="ui-sans-serif, system-ui">
          Workflow systems, CRM integration, logistics, and scalable foundations.
        </text>
        <line x1="600" y1="690" x2="600" y2="660" stroke="#C6A75E" strokeOpacity="0.35" strokeWidth="3" />

      </svg>
    </div>
  </div>
</section>


</section>
        {/* MISSION */}
        <section className="border-t border-[#C6A75E]/20 pt-16">
          <h2 className="text-3xl font-semibold mb-6 text-[#C6A75E]">
            Mission
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            To build disciplined systems that enable growth, strengthen
            institutions, and create ecosystems that endure beyond individual ventures.
          </p>
        </section>

      </div>

    </main>
  )
}
