"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function MediaDivision() {
  const pathname = usePathname()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">


      <h1 className="text-4xl font-bold mb-6">
        Digital Media & Apps
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

      <p className="text-gray-400 max-w-3xl mb-12">
        Felix Consulting Group develops streaming platforms,
        discovery applications, and cross-platform digital
        products designed for modern audiences.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <DivisionItem
          name="StreamPilot"
          url="https://apps.apple.com/us/app/streampilot/id6757970417"
        />

        <DivisionItem
          name="WildFilms"
          url="https://apps.apple.com/us/app/wildlifefilms/id6758022608"
        />

        <DivisionItem
          name="Felix Studios"
          url="#"
        />

        <DivisionItem
          name="City Discoverer (Web Platform)"
          url="https://citydiscoverer.app"
        />

        <DivisionItem
          name="WealthWatch (App Platform)"
          url="https://apps.apple.com/us/app/wealth-watch/id6758687724"
        />

        <DivisionItem
          name="50USAStates"
          url="#"
        />

        <DivisionItem
          name="DailyFelix-WordofDay"
          url="#"
        />

        <DivisionItem
          name="WildFilm-Tracker"
          url="#"
        />

        <DivisionItem
          name="ElectionPredictor"
          url="#"
        />

        <DivisionItem
          name="VoteModeler"
          url="#"
        />

        <DivisionItem
          name="Praxis-Nexus"
          url="#"
        />

        <DivisionItem
          name="TFCGChat"
          url="https://tfcgchat.felixconsult.co"
        />

        <DivisionItem
          name="Campaign Signal Studio"
          url="#"
        />

        <DivisionItem
          name="App Showcase"
          url="https://appaggregator.felixconsult.co/"
        />

        <DivisionItem
          name="BeaconNewsHub"
          url="#"
        />

        <DivisionItem
          name="MediaStreamHost"
          url="https://imagediscoverer.xyz/"
        />

        <DivisionItem
          name="Project Pulse"
          url="https://projectpulse.felixconsult.co/"
        />

        <DivisionItem
          name="SocialMediaMaster"
          url="https://mediahost.app/"
        />

        <DivisionItem
          name="PollGenius"
          url="#"
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
