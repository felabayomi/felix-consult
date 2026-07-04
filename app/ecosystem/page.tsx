import Link from "next/link"

type CategoryEntry = {
  label: string
  url: string
}

function sortEntries(entries: CategoryEntry[]) {
  return [...entries].sort((left, right) => left.label.localeCompare(right.label))
}

const categories = [
  {
    href: "/financial",
    title: "Financial Technologies",
    summary:
      "Revenue systems, payments, billing flows, finance dashboards, and operational controls.",
    entries: [
      { label: "IncomeLift", url: "https://incomelift.co" },
      { label: "SteadyVest", url: "https://steadyvest.org" },
      { label: "BillWatch", url: "https://billwatch.pro" },
      { label: "DIY Debt", url: "https://dyidebt.org/" },
      { label: "Letter Vault", url: "https://lettervault.us" },
      { label: "Felix Pay", url: "https://felixpay.net" },
      { label: "ExpenseWatch", url: "https://expensewatch.pro" },
      { label: "FinanceWatch", url: "https://financewatch.app" },
      { label: "Felix CheckBook", url: "https://felixcheck.com" },
      { label: "SavingsPro", url: "https://savingspro.app" },
      { label: "WealthWatch", url: "https://wealth-watch.app" },
      { label: "Letter Vault APP", url: "https://apps.apple.com/us/app/letter-vault/id6760270008" },
      { label: "Abaflix Capital", url: "https://abaflix.us" },
      { label: "Debt to Legacy", url: "https://debttolegacy.com" },
      { label: "FelixStore", url: "https://apps.apple.com/us/app/felix-store/id1567050617" },
      { label: "Adrian-Styled-StoreFront", url: "https://www.shopwithadrian.com/" },
      { label: "RestEZ", url: "https://tablepilot.io" },
      { label: "LearnFlow", url: "https://learn.debttolegacy.com/" },
      { label: "DTL Learning", url: "#" },
    ],
  },
  {
    href: "/travel",
    title: "Travel & Urban Systems",
    summary:
      "Booking experiences, itinerary engines, travel content, and local discovery products.",
    entries: [
      { label: "Schedez Travel Planning", url: "https://schedez.io/" },
      { label: "Expedition America Dispatch", url: "https://expeditionamerica.online/" },
      { label: "City Discoverer", url: "https://discoverer.city" },
      { label: "City Discoverer Travel Planner (AI)", url: "https://plan.citydiscoverer.ai" },
      { label: "Travel Center Hub", url: "https://travelcenterhub.com" },
      { label: "Expedition America Travel Co", url: "https://expeditionamerica.us" },
      { label: "StreamPilot (Travel)", url: "https://apps.apple.com/us/app/streampilot/id6757970417" },
      { label: "Wildlife Films", url: "https://apps.apple.com/us/app/streampilot/id6757970417" },
      { label: "City Discoverer Agent SchedEZ", url: "https://citydiscoverer.guide/book" },
      { label: "FanLore", url: "https://apps.apple.com/us/app/fanlore/id6760257973" },
      { label: "Ariyike Tours", url: "#" },
      { label: "In City Experience", url: "#" },
      { label: "LiveLoop", url: "https://apps.apple.com/us/app/live-loop/id6760877693" },
      { label: "EventLoop by LiveLoop", url: "https://web.live-loop.live/" },
      { label: "FeliTrips", url: "https://grouptours.citydiscoverer.guide/" },
      { label: "City Discoverer Travel TV", url: "https://traveltv.citydiscoverer.guide/" },
      { label: "Travel with AdrianFelix", url: "#" },
      { label: "FelixTravelTV", url: "https://traveltv.citydiscoverer.guide/" },
      { label: "FelixTravelBroadcast", url: "#" },
      { label: "Felix-Travel-TV", url: "https://traveltv.citydiscoverer.guide/" },
      { label: "CityTourHub", url: "https://tours.citydiscoverer.guide/" },
      { label: "CityOfDay", url: "https://daily.citydiscoverer.guide/" },
      { label: "CityDayInt", url: "#" },
      { label: "Travel-Tracker-FeliMark", url: "#" },
      { label: "TravelTracker", url: "#" },
      { label: "City-Discoverer-Port", url: "https://discoverer.city/" },
      { label: "City-Discoverer-Port (Mobile App)", url: "https://apps.apple.com/us/app/city-discoverer-companion/id6759014495" },
      { label: "Itinerary-Generator", url: "#" },
      { label: "Expedition-America", url: "https://expeditionamerica.online/" },
      { label: "Calendar Scheduler", url: "https://appointment.expeditionamerica.us/" },
      { label: "CityDiscoveryTool", url: "#" },
      { label: "CityTracker", url: "#" },
      { label: "Content Travel Guide", url: "https://view.citydiscoverer.ai/" },
      { label: "Customer Support Tracker", url: "https://agent.citydiscoverer.ai/" },
      { label: "Discovery Timeline", url: "https://timeline.citydiscoverer.guide/" },
      { label: "Home Culture Explorer", url: "https://homeexplorer.citydiscoverer.ai/" },
      { label: "HomeControl", url: "#" },
      { label: "Itinerary Builder", url: "https://itinerary.citydiscoverer.guide/" },
      { label: "Nomad Navigator", url: "https://nomadnavigator.citydiscoverer.ai/" },
      { label: "Travel Advisor", url: "http://traveladvisor.agency/" },
      { label: "Travel Deals Curator", url: "#" },
      { label: "Travel Discovery Hub", url: "https://deals.citydiscoverer.guide/" },
      { label: "Travel Spotlight", url: "https://travelspotlight.incityexperience.com/" },
      { label: "WanderWrite", url: "#" },
      { label: "Virtual Office Hours", url: "https://eacd.us/" },
      { label: "News Showcase", url: "https://news.expeditionamerica.us/" },
    ],
  },
  {
    href: "/media",
    title: "Digital Media & Applications",
    summary:
      "Media workflows, content engines, platform admin tools, and audience growth products.",
    entries: [
      { label: "StreamPilot", url: "https://apps.apple.com/us/app/streampilot/id6757970417" },
      { label: "WildFilms", url: "https://apps.apple.com/us/app/wildlifefilms/id6758022608" },
      { label: "Felix Studios", url: "#" },
      { label: "City Discoverer (Web Platform)", url: "https://citydiscoverer.app" },
      { label: "WealthWatch (App Platform)", url: "https://apps.apple.com/us/app/wealth-watch/id6758687724" },
      { label: "50USAStates", url: "https://www.expeditionamerica.online/" },
      { label: "DailyFelix-WordofDay", url: "https://faithhouse.app/" },
      { label: "WildFilm-Tracker", url: "https://apps.apple.com/us/app/wildlifefilms/id6758022608" },
      { label: "ElectionPredictor", url: "https://electionpredictor.net/" },
      { label: "VoteModeler", url: "#" },
      { label: "Praxis-Nexus", url: "https://praxinex.org/" },
      { label: "TFCGChat", url: "https://tfcgchat.felixconsult.co" },
      { label: "Campaign Signal Studio", url: "https://campaignsignal.us/" },
      { label: "App Showcase", url: "https://appaggregator.felixconsult.co/" },
      { label: "BeaconNewsHub", url: "#" },
      { label: "MediaStreamHost", url: "https://imagediscoverer.xyz/" },
      { label: "Project Pulse", url: "https://projectpulse.felixconsult.co/" },
      { label: "SocialMediaMaster", url: "https://mediahost.app/" },
      { label: "PollGenius", url: "#" },
    ],
  },
  {
    href: "/conservation",
    title: "Conservation & Environmental Impact",
    summary:
      "Impact dashboards, research tooling, field data workflows, and reporting systems.",
    entries: [
      { label: "Wildlife of Africa Initiative Voice for Wildlife", url: "https://wacicrew.org" },
      { label: "Wildlife of Africa Eco-Tourism", url: "https://wildafricatour.felixconsult.co/" },
      { label: "Wildlife Encounters", url: "https://wildlifearoundus.felixconsult.co" },
      { label: "Praxifex", url: "https://praxinex.org/" },
      { label: "FelixWildlife", url: "#" },
      { label: "Wildlife of Africa Conservation Initiative", url: "https://www.wildlifeofafrica.com/" },
      { label: "WACI Action Hub", url: "https://wacihub.org" },
      { label: "Ecosphere Nexus", url: "#" },
      { label: "A & F Wildlife Foundation, DBA Wildlife-Pedia", url: "https://www.wildlife-pedia.com/" },
      { label: "WildlifePedia", url: "https://wildlife-pedia-web.vercel.app/" },
      { label: "Abaflix Emerald Farms (Conservation)", url: "#" },
      { label: "Nature Ethics Research Institute", url: "#" },
      { label: "Wildlife of Africa Con Init (Non-Profit)", url: "#" },
      { label: "WildlifeHarmony", url: "#" },
      { label: "WildConflictResolver", url: "#" },
    ],
  },
  {
    href: "/consulting",
    title: "Consulting & Strategy",
    summary:
      "Product strategy, roadmap planning, build sequencing, and launch guidance.",
    entries: [
      { label: "Felix Consulting Group", url: "https://felixconsult.co/" },
      { label: "TFCG Chat", url: "https://tfcgchat.felixconsult.co" },
      { label: "FelixDGuide", url: "https://felixdguide.com" },
      { label: "AdrianFelix Corporation", url: "https://felixconsult.co/" },
      { label: "Insightify Hub (Inquiry Hub)", url: "https://inquiryhub.app" },
      { label: "FeliMark", url: "#" },
      { label: "Justice Beyond Borders", url: "#" },
      { label: "Center for Spiritual Humanism", url: "#" },
      { label: "Faith House Ministries Church", url: "https://faithhouse.app/" },
      { label: "TFCG Strategy Center", url: "https://tfcgstrategycenter.felixconsult.co" },
      { label: "Cicivor (Civicos Pro)", url: "https://civicos.pro" },
      { label: "WACI", url: "#" },
      { label: "WACI-Project-Hub", url: "https://projecthub.wildlifeafrica.org/" },
      { label: "Capital-Regime-Analysis", url: "https://abaflix.us/" },
      { label: "Felix Consult", url: "https://felixconsult.co/" },
      { label: "Civic Candidate Support Platform (CCSP)", url: "https://civicos.pro/" },
    ],
  },
  {
    href: "/services",
    title: "Services & Infrastructure",
    summary:
      "Internal operations apps, service delivery workflows, and team productivity platforms.",
    entries: [
      { label: "ReserveEZ", url: "https://tablepilot.io" },
      { label: "Adrian's Styled Collection", url: "https://www.shopwithadrian.com/" },
      { label: "Errand Easy", url: "https://errandeasy.app/" },
      { label: "ARK Logistics - An Errand Easy Delivery Company", url: "https://errandeasydelivery.com" },
      { label: "A & F Laundry Care Studio", url: "https://aflaundry.com/" },
      { label: "A & F Textile Asset Advisory Group", url: "https://aflaundry.com/" },
      { label: "EasyDesk Pro - Prototype", url: "https://ezdesk.pro" },
      { label: "ARK Wellness", url: "#" },
      { label: "Abaflix Emerald Farms", url: "https://abaflix.us/" },
      { label: "Felix's Store", url: "https://apps.apple.com/us/app/felix-store/id1567050617" },
      { label: "ARK Sports Lounge", url: "https://apps.apple.com/us/app/fanlore/id6760257973" },
      { label: "Felix Meal", url: "https://chatgpt.com/g/g-689404bb375c8191a934b6afca8659c8-felix-meals" },
      { label: "AFLaundry", url: "https://aflaundry.com/" },
      { label: "Document-Formatter", url: "https://formatter.felixplatforms.com/" },
      { label: "AFLaundry-New (Mobile App)", url: "https://apps.apple.com/us/app/aflaundry/id1596646806" },
      { label: "AFLaundry-New (Web App)", url: "https://laundryapp.felixplatforms.com/" },
      { label: "Inquiry-Hub", url: "https://inquiryhub.app" },
      { label: "Letter-Organizer-Pro", url: "#" },
      { label: "Letter-Vault-Deployment", url: "https://lettervault.us" },
      { label: "Smart-Meeting-Minder", url: "#" },
      { label: "Errand Mover", url: "https://errandeasyscheduler.com" },
      { label: "ErrandEZ Mobile", url: "https://errandez.com/" },
      { label: "Felix App Manager", url: "http://felixdgreatapps.felixconsult.co/" },
      { label: "Tax Automator", url: "https://taxflowpro.felixconsult.co/" },
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
                  {sortEntries(category.entries).map((entry) => {
                    const href = entry.url === "#" ? category.href : entry.url
                    const isExternal = entry.url !== "#"
                    const badgeLabel = isExternal ? "Live" : "Coming Soon"
                    const badgeClassName = isExternal
                      ? "bg-[#C6A75E]/15 text-[#C6A75E] border-[#C6A75E]/30"
                      : "bg-gray-800 text-gray-300 border-gray-700"

                    return isExternal ? (
                      <a
                        key={entry.label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-gray-800 text-sm text-gray-300 hover:border-[#C6A75E]/60 hover:text-white transition"
                      >
                        {entry.label}
                        <span className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${badgeClassName}`}>
                          {badgeLabel}
                        </span>
                      </a>
                    ) : (
                      <Link
                        key={entry.label}
                        href={href}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0B0F] border border-gray-800 text-sm text-gray-300 hover:border-[#C6A75E]/60 hover:text-white transition"
                      >
                        {entry.label}
                        <span className={`text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border ${badgeClassName}`}>
                          {badgeLabel}
                        </span>
                      </Link>
                    )
                  })}
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
