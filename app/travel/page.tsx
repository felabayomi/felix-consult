"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function TravelDivision() {
  const pathname = usePathname()

  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
          Travel & Urban Experiences
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
                className={`relative pb-4 transition ${pathname === item.href
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

        <p className="text-gray-400 max-w-3xl mb-12 leading-relaxed">
          A structured travel intelligence ecosystem combining discovery,
          itinerary planning, streaming platforms, and experiential tourism
          systems designed for modern global mobility.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <DivisionItem
            name="Schedez Travel Planning"
            description="I help you plan your trip, find the best options, compare pricing, and handle all the booking and back-end work."
            url="https://schedez.io/"
          />

          <DivisionItem
            name="Expedition America Dispatch"
            description="Rediscover America One State at a Time"
            url="https://expeditionamerica.online/"
          />

          <DivisionItem
            name="City Discoverer"
            description="GPS-powered city recognition with personalized recommendations for dining, attractions, and local experiences."
            url="https://discoverer.city"
          />

          <DivisionItem
            name="City Discoverer Travel Planner (AI)"
            description="AI-generated personalized itineraries tailored to your travel style, preferences, and destination."
            url="https://plan.citydiscoverer.ai"
          />

          <DivisionItem
            name="Travel Center Hub"
            description="Your gateway to flights, hotels, cruises, car rentals, and travel experience."
            url="https://travelcenterhub.com"
          />

          <DivisionItem
            name="Expedition America Travel Co"
            description="Explore the diverse landscapes and cultural heritage of America through guided expeditions."
            url="https://expeditionamerica.us"
          />

          <DivisionItem
            name="StreamPilot (Travel)"
            description="Manage and discover streaming content across platforms in one centralized ecosystem."
            url="https://apps.apple.com/us/app/streampilot/id6757970417"
          />

          <DivisionItem
            name="Wildlife Films"
            description="Discover, catalog, and track wildlife documentaries and nature films worldwide."
            url="https://apps.apple.com/us/app/streampilot/id6757970417"
          />

          <DivisionItem
            name="City Discoverer Agent SchedEZ"
            description="Schedule sessions with travel consultants for structured itinerary planning and local insights."
            url="https://citydiscoverer.guide/book"
          />

          <DivisionItem name="FanLore"
            description="Sports Stories by Real Fans. Share your greatest sports memories with fans who get it."
            url="https://apps.apple.com/us/app/fanlore/id6760257973"
          />
          <DivisionItem name="Ariyike Tours"
            description="Curated travel experiences and guided tours showcasing local culture and attractions."
            url="#"
          />

          <DivisionItem
            name="In City Experience"
            description="Immerse yourself in urban adventures and local experiences within major cities."
            url="#"

          />
          <DivisionItem
            name="LiveLoop"
            description="Real-Time City Guide. Discover what to do next in real-time wherever you travel."
            url="https://apps.apple.com/us/app/live-loop/id6760877693"
          />

          <DivisionItem
            name="EventLoop by LiveLoop"
            description={`Built to answer one question every traveler asks: "What's happening while I'm here?"`}
            url="https://web.live-loop.live/"
          />

          <DivisionItem
            name="City Discoverer Travel TV"
            description="An Expedition America Travel Channel that generates global travel news content."
            url="https://traveltv.citydiscoverer.guide/"
          />

          <DivisionItem
            name="Travel with AdrianFelix"
            description="Personalized travel experiences curated by AdrianFelix for unique adventures."
            url="#"
          />

          <DivisionItem
            name="FelixTravelTV"
            description="Travel content platform for destination stories, city highlights, and discovery media."
            url="https://traveltv.citydiscoverer.guide/"
          />

          <DivisionItem
            name="FelixTravelBroadcast"
            description="Broadcast-style travel media workflow for recurring destination coverage."
            url="#"
          />

          <DivisionItem
            name="Felix-Travel-TV"
            description="Standalone travel television deployment for curated trip and city programming."
            url="#"
          />

          <DivisionItem
            name="CityTourHub"
            description="City tour and local attraction platform for guided trip experiences."
            url="#"
          />

          <DivisionItem
            name="CityOfDay"
            description="Daily city spotlight platform for travel discovery and planning inspiration."
            url="#"
          />

          <DivisionItem
            name="CityDayInt"
            description="International city content and destination intelligence publishing workflow."
            url="#"
          />

          <DivisionItem
            name="Travel-Tracker-FeliMark"
            description="Travel tracking workspace for trip activity and movement logs."
            url="#"
          />

          <DivisionItem
            name="TravelTracker"
            description="Structured tracker for itineraries, routes, and travel progress monitoring."
            url="#"
          />

          <DivisionItem
            name="City-Discoverer-Port"
            description="City Discoverer deployment variant for port, city, and transit discovery."
            url="#"
          />

          <DivisionItem
            name="Itinerary-Generator"
            description="Automated itinerary builder for destination-by-destination trip plans."
            url="#"
          />

          <DivisionItem
            name="Expedition-America"
            description="State-by-state travel storytelling and route discovery across the U.S."
            url="https://expeditionamerica.online/"
          />

          <DivisionItem
            name="Calendar Scheduler"
            description="Booking calendar workflow for travel appointments and guided planning sessions."
            url="https://appointment.expeditionamerica.us/"
          />

          <DivisionItem
            name="CityDiscoveryTool"
            description="Draft city discovery workflow for location insights and recommendations."
            url="#"
          />

          <DivisionItem
            name="CityTracker"
            description="Draft tracking workspace for city activity and movement intelligence."
            url="#"
          />

          <DivisionItem
            name="Content Travel Guide"
            description="Internal customer travel guide workspace for requests and destination resources."
            url="https://view.citydiscoverer.ai/"
          />

          <DivisionItem
            name="Customer Support Tracker"
            description="Customer service portal for travel support requests and issue tracking."
            url="https://agent.citydiscoverer.ai/"
          />

          <DivisionItem
            name="Discovery Timeline"
            description="Internal timeline view for customer travel milestones and planning phases."
            url="https://timeline.citydiscoverer.guide/"
          />

          <DivisionItem
            name="Home Culture Explorer"
            description="Travel culture exploration workflow for discovering local traditions and places."
            url="https://homeexplorer.citydiscoverer.ai/"
          />

          <DivisionItem
            name="HomeControl"
            description="Draft travel/home coordination workspace for itinerary-linked control flows."
            url="#"
          />

          <DivisionItem
            name="Itinerary Builder"
            description="iOS itinerary workflow for structured trip planning and destination sequencing."
            url="https://itinerary.citydiscoverer.guide/"
          />

          <DivisionItem
            name="Nomad Navigator"
            description="Travel navigation workspace for route clarity and destination movement planning."
            url="https://nomadnavigator.citydiscoverer.ai/"
          />

          <DivisionItem
            name="Travel Advisor"
            description="Travel advisor quiz workflow to guide trip decisions and recommendations."
            url="http://traveladvisor.agency/"
          />

          <DivisionItem
            name="Travel Deals Curator"
            description="Draft workflow for curating travel deals and destination offer bundles."
            url="#"
          />

          <DivisionItem
            name="Travel Discovery Hub"
            description="Partner travel deals view for destination offers and discovery campaigns."
            url="https://deals.citydiscoverer.guide/"
          />

          <DivisionItem
            name="Travel Spotlight"
            description="Featured travel deals and destination highlights for active campaign visibility."
            url="https://travelspotlight.incityexperience.com/"
          />

          <DivisionItem
            name="WanderWrite"
            description="Draft travel writing workflow for destination storytelling and trip reflections."
            url="#"
          />

          <DivisionItem
            name="Virtual Office Hours"
            description="Live streaming session workflow for guided travel support and advisory access."
            url="https://eacd.us/"
          />

          <DivisionItem
            name="News Showcase"
            description="Travel news site workflow for destination updates and market content publishing."
            url="https://news.expeditionamerica.us/"
          />

        </div>

        <div className="mt-20 text-center border-t border-[#C6A75E]/20 pt-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#C6A75E]">
            Partner With Us
          </h2>
          <p className="text-gray-400 mb-6">
            Engage Felix Consulting Group for advisory, venture strategy, or ecosystem development partnerships.
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

function DivisionItem({ name, description, url }: {
  name: string;
  description?: string;
  url: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-6 bg-[#111114] rounded-xl 
                 border border-[#C6A75E]/20 
                 hover:border-[#C6A75E]/60 
                 hover:bg-[#141418] 
                 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#C6A75E] transition">
        {name}
      </h3>

      {description && (
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
      )}

      <p className="text-[#C6A75E] text-sm font-medium">
        Visit Platform →
      </p>
    </a>
  )
}
