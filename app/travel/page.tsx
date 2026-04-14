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
            name="Schedez Travel Planning."
            description="I help you plan your trip, find the best options, compare pricing, and handle all the booking and back-end work."
            url="https://schedez.io/"
          />

          <DivisionItem
            name="Expedition America Dispatch."
            description="Rediscover America One State at a Time"
            url="https://expeditionamerica.online/"
          />

          <DivisionItem
            name="City Discoverer."
            description="GPS-powered city recognition with personalized recommendations for dining, attractions, and local experiences."
            url="https://discoverer.city"
          />

          <DivisionItem
            name="City Discoverer Travel Planner (AI)."
            description="AI-generated personalized itineraries tailored to your travel style, preferences, and destination."
            url="https://plan.citydiscoverer.ai"
          />

          <DivisionItem
            name="Travel Center Hub."
            description="Your gateway to flights, hotels, cruises, car rentals, and travel experience."
            url="https://travelcenterhub.com"
          />

          <DivisionItem
            name="Expedition America Travel Co."
            description="Explore the diverse landscapes and cultural heritage of America through guided expeditions."
            url="https://expeditionamerica.us"
          />

          <DivisionItem
            name="StreamPilot"
            description="Manage and discover streaming content across platforms in one centralized ecosystem."
            url="https://apps.apple.com/us/app/streampilot/id6757970417"
          />

          <DivisionItem
            name="Wildlife Films."
            description="Discover, catalog, and track wildlife documentaries and nature films worldwide."
            url="https://apps.apple.com/us/app/streampilot/id6757970417"
          />

          <DivisionItem
            name="City Discoverer Agent SchedEZ."
            description="Schedule sessions with travel consultants for structured itinerary planning and local insights."
            url="https://citydiscoverer.guide/book"
          />

          <DivisionItem name="Ariyike Tours."
            description="Curated travel experiences and guided tours showcasing local culture and attractions."
            url="#"
          />

          <DivisionItem
            name="In City Experience."
            description="Immerse yourself in urban adventures and local experiences within major cities."
            url="#"

          />
          <DivisionItem
            name="LiveLoop"
            description="Interactive live music and entertainment experiences for travelers."
            url="https://apps.apple.com/us/app/live-loop/id6760877693"
          />
          <DivisionItem
            name="EventLoop by LiveLoop"
            description={`Built to answer one question every traveler asks: "What's happening while I'm here?"`}
            url="https://web.live-loop.live/"
          />

          <DivisionItem
            name="Travel with AdrianFelix"
            description="Personalized travel experiences curated by AdrianFelix for unique adventures."
            url="#"
          />

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
