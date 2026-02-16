"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function TravelDivision() {
  const pathname = usePathname()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">


      <h1 className="text-4xl font-bold mb-6">
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
              className={`relative pb-4 transition ${
                pathname === item.href
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

      <p className="text-gray-400 max-w-3xl mb-12">
        Felix Consulting Group operates a travel technology and urban
        experience ecosystem focused on AI-powered planning,
        curated city exploration, and experiential tourism platforms.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <DivisionItem
          name="City Discoverer"
          url="https://citydiscoverer.app"
        />

        <DivisionItem
          name="City Discoverer Travel Planner (AI)"
          url="https://plan.citydiscoverer.ai"
        />

        <DivisionItem
          name="StreamPilot"
          url="https://apps.apple.com/us/app/streampilot/id6757970417"
        />

        <DivisionItem
          name="Ariyike Tours"
          url="#"
        />

        <DivisionItem
          name="Expedition America"
          url="#"
        />

        <DivisionItem
          name="In City Experience"
          url="#"
        />

        <DivisionItem
          name="LiveLoops"
          url="#"
        />

        <DivisionItem
          name="Travel with AdrianFelix"
          url="#"
        />

      </div>

    </main>
  )
}

function DivisionItem({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-[#0D1428] rounded-xl border border-gray-800 
                 hover:border-blue-600 hover:bg-[#101B35] 
                 hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">
        Visit Platform →
      </p>
    </a>
  )
}
