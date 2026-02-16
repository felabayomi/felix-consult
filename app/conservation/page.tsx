"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function ConservationDivision() {
  const pathname = usePathname()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">


      <h1 className="text-4xl font-bold mb-6">
        Conservation & Impact
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
        Felix Consulting Group supports wildlife conservation,
        ethical research, environmental sustainability, and
        community-driven innovation initiatives across Africa
        and beyond.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <DivisionItem
          name="Wildlife of Africa Conservation Initiative (WACI)"
          url="https://wacicrew.org"
        />

        <DivisionItem
          name="WACI Action Hub"
          url="https://wacihub.org"
        />

        <DivisionItem
          name="A & F Wildlife Foundation"
          url="#"
        />

        <DivisionItem
          name="Ecosphere Nexus"
          url="#"
        />

        <DivisionItem
          name="Wildlife Encounters"
          url="#"
        />

        <DivisionItem
          name="Praxifex"
          url="https://praxinex.org/"
        />

        <DivisionItem
          name="Nature Ethics Research Institute (NeSRI)"
          url="#"
        />

        <DivisionItem
          name="WildlifePedia"
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
                 hover:border-green-600 hover:bg-[#0F1F1A] 
                 hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">
        Visit Initiative →
      </p>
    </a>
  )
}
