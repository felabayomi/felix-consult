import Link from "next/link"

export default function EcosystemPage() {
  const projects = {
    Financial: [
      { name: "FelixStore" },
      { name: "Adrian-Styled-StoreFront" },
      { name: "FeliTrips" },
      { name: "RestEZ" },
    ],
    Travel: [
      { name: "FelixTravelTV" },
      { name: "FelixTravelBroadcast" },
      { name: "Felix-Travel-TV" },
      { name: "CityTourHub" },
      { name: "CityOfDay" },
      { name: "CityDayInt" },
      { name: "TravelCenterHub" },
      { name: "expedition-america" },
      { name: "Itinerary-Generator" },
      { name: "travel-tracker-felimark" },
      { name: "TravelTracker" },
      { name: "City-Discoverer-Port" },
    ],
    Media: [
      { name: "50USAStates" },
      { name: "DailyFelix-WordofDay" },
      { name: "WildFilm-Tracker" },
      { name: "ElectionPredictor" },
      { name: "VoteModeler" },
      { name: "Praxis-Nexus" },
      { name: "TFCGChat" },
      { name: "Campaign Signal Studio" },
    ],
    Conservation: [
      { name: "Wildlife-Pedia" },
      { name: "WildlifeHarmony" },
    ],
    Consulting: [
      { name: "WACI" },
      { name: "WACI-Project-Hub" },
      { name: "Capital-Regime-Analysis" },
      { name: "TCFGStrategyCenter" },
      { name: "felix-consult" },
      { name: "Civic Candidate Support Platform (CCSP)" },
    ],
    Services: [
      { name: "AFLaundry" },
      { name: "Document-Formatter" },
      { name: "ErrandEasy" },
      { name: "aflaundry-new" },
      { name: "Inquiry-Hub" },
      { name: "Letter-Organizer-Pro" },
      { name: "Letter-Vault-Deployment" },
      { name: "Smart-Meeting-Minder" },
    ],
  }

  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      {/* Ambient Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#C6A75E]">
            App Ecosystem
          </h1>

          <p className="text-gray-400 text-lg mb-4">
            50+ launch-ready business apps and solutions organized by category.
          </p>

          <p className="text-gray-500">
            Choose from proven tracks, customize to fit your workflows, or let us build something custom.
          </p>
        </section>

        {/* PROJECTS BY CATEGORY */}
        {Object.entries(projects).map(([category, items]) => (
          <section key={category} className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-[#C6A75E]">
              {category}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((project, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                           hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                           transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-[#C6A75E] transition">
                    {project.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Details coming soon
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* BOTTOM CTA BLOCK */}
        <section className="mt-24 text-center border-t border-gray-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Ready to Launch?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Pick an app from our catalog, customize it to your workflows, or scope a completely custom platform build.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Book A Discovery Call
            </Link>

            <Link
              href="/services"
              className="border border-[#C6A75E]/50 px-6 py-3 rounded-md font-semibold hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
            >
              View Pricing
            </Link>
          </div>

        </section>

      </div>
    </main>
  )
}
