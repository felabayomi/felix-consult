import Link from "next/link"

const categories = [
  {
    href: "/financial",
    title: "Financial Technologies",
    summary:
      "Revenue systems, payments, billing flows, finance dashboards, and operational controls.",
    entries: [
      "IncomeLift",
      "SteadyVest",
      "BillWatch",
      "DIY Debt",
      "Letter Vault",
      "Felix Pay",
      "ExpenseWatch",
      "FinanceWatch",
      "Felix CheckBook",
      "SavingsPro",
      "WealthWatch",
      "Letter Vault APP",
      "Abaflix Capital",
      "Debt to Legacy",
      "FelixStore",
      "Adrian-Styled-StoreFront",
      "FeliTrips",
      "RestEZ",
      "LearnFlow",
      "DTL Learning",
    ],
  },
  {
    href: "/travel",
    title: "Travel & Urban Systems",
    summary:
      "Booking experiences, itinerary engines, travel content, and local discovery products.",
    entries: [
      "Schedez Travel Planning",
      "Expedition America Dispatch",
      "City Discoverer",
      "City Discoverer Travel Planner (AI)",
      "Travel Center Hub",
      "Expedition America Travel Co",
      "StreamPilot (Travel)",
      "Wildlife Films",
      "City Discoverer Agent SchedEZ",
      "FanLore",
      "Ariyike Tours",
      "In City Experience",
      "LiveLoop",
      "EventLoop by LiveLoop",
      "City Discoverer Travel TV",
      "Travel with AdrianFelix",
      "FelixTravelTV",
      "FelixTravelBroadcast",
      "Felix-Travel-TV",
      "CityTourHub",
      "CityOfDay",
      "CityDayInt",
      "Travel-Tracker-FeliMark",
      "TravelTracker",
      "City-Discoverer-Port",
      "Itinerary-Generator",
      "Expedition-America",
      "Calendar Scheduler",
      "CityDiscoveryTool",
      "CityTracker",
      "Content Travel Guide",
      "Customer Support Tracker",
      "Discovery Timeline",
      "Home Culture Explorer",
      "HomeControl",
      "Itinerary Builder",
      "Nomad Navigator",
      "Travel Advisor",
      "Travel Deals Curator",
      "Travel Discovery Hub",
      "Travel Spotlight",
      "WanderWrite",
      "Virtual Office Hours",
      "News Showcase",
    ],
  },
  {
    href: "/media",
    title: "Digital Media & Applications",
    summary:
      "Media workflows, content engines, platform admin tools, and audience growth products.",
    entries: [
      "StreamPilot",
      "WildFilms",
      "Felix Studios",
      "City Discoverer (Web Platform)",
      "WealthWatch (App Platform)",
      "50USAStates",
      "DailyFelix-WordofDay",
      "WildFilm-Tracker",
      "ElectionPredictor",
      "VoteModeler",
      "Praxis-Nexus",
      "TFCGChat",
      "Campaign Signal Studio",
      "App Showcase",
      "BeaconNewsHub",
      "MediaStreamHost",
      "Project Pulse",
      "SocialMediaMaster",
      "PollGenius",
    ],
  },
  {
    href: "/conservation",
    title: "Conservation & Environmental Impact",
    summary:
      "Impact dashboards, research tooling, field data workflows, and reporting systems.",
    entries: [
      "Wildlife of Africa Initiative Voice for Wildlife",
      "Wildlife of Africa Eco-Tourism",
      "Wildlife Encounters",
      "Praxifex",
      "FelixWildlife",
      "Wildlife of Africa Conservation Initiative",
      "WACI Action Hub",
      "Ecosphere Nexus",
      "A & F Wildlife Foundation, DBA Wildlife-Pedia",
      "Abaflix Emerald Farms (Conservation)",
      "Nature Ethics Research Institute",
      "Wildlife of Africa Con Init (Non-Profit)",
      "WildlifeHarmony",
      "WildConflictResolver",
    ],
  },
  {
    href: "/consulting",
    title: "Consulting & Strategy",
    summary:
      "Product strategy, roadmap planning, build sequencing, and launch guidance.",
    entries: [
      "Felix Consulting Group",
      "TFCG Chat",
      "FelixDGuide",
      "AdrianFelix Corporation",
      "Insightify Hub (Inquiry Hub)",
      "FeliMark",
      "Justice Beyond Borders",
      "Center for Spiritual Humanism",
      "Faith House Ministries Church",
      "TFCG Strategy Center",
      "Cicivor (Civicos Pro)",
      "WACI",
      "WACI-Project-Hub",
      "Capital-Regime-Analysis",
      "Felix Consult",
      "Civic Candidate Support Platform (CCSP)",
    ],
  },
  {
    href: "/services",
    title: "Services & Infrastructure",
    summary:
      "Internal operations apps, service delivery workflows, and team productivity platforms.",
    entries: [
      "ReserveEZ",
      "Adrian's Styled Collection",
      "Errand Easy",
      "ARK Logistics - An Errand Easy Delivery Company",
      "A & F Laundry Care Studio",
      "A & F Textile Asset Advisory Group",
      "EasyDesk Pro - Prototype",
      "ARK Wellness",
      "Abaflix Emerald Farms",
      "Felix's Store",
      "ARK Sports Lounge",
      "Felix Meal",
      "AFLaundry",
      "Document-Formatter",
      "AFLaundry-New",
      "Inquiry-Hub",
      "Letter-Organizer-Pro",
      "Letter-Vault-Deployment",
      "Smart-Meeting-Minder",
      "Errand Mover",
      "ErrandEZ Mobile",
      "Felix App Manager",
      "Tax Automator",
    ],
  },
]

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
            Choose your closest fit, then we scope implementation based on your goals, timeline, and business model.
          </p>
        </section>


        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group p-8 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                         hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#C6A75E] transition">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {category.summary}
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-24 border-t border-gray-800 pt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pages Across Every Category
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Browse the actual pages and app foundations listed inside each category page directly from this ecosystem hub.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((category) => (
              <section
                key={`${category.href}-entries`}
                className="bg-[#111114] border border-[#C6A75E]/20 rounded-2xl p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#C6A75E]">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 max-w-3xl">
                      {category.summary}
                    </p>
                  </div>

                  <Link
                    href={category.href}
                    className="inline-flex items-center border border-[#C6A75E]/50 px-5 py-3 rounded-md font-semibold hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
                  >
                    View Full Category Page
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.entries.map((entry) => (
                    <Link
                      key={entry}
                      href={category.href}
                      className="px-4 py-2 rounded-full bg-[#0B0B0F] border border-gray-800 text-sm text-gray-300 hover:border-[#C6A75E]/60 hover:text-white transition"
                    >
                      {entry}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>


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
