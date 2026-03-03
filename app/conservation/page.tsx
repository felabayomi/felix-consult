"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ConservationDivision() {
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
          Conservation & Environmental Impact
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

        <p className="text-gray-400 max-w-3xl mb-12 leading-relaxed">
          A structured environmental ecosystem integrating conservation,
          research, sustainability innovation, community empowerment,
          and impact-driven enterprise across Africa and global ecosystems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <DivisionItem
            name="Wildlife of Africa Initiative Voice for Wildlife."
            description="Uniting conservation and community through Storytelling and sharing conservation action stories."
            url="https://wacicrew.org"
          />

          <DivisionItem
            name="Wildlife of Africa Eco-Tourism."
            description="Experience Africa’s wilderness while preserving its future."
            url="https://wildafricatour.felixconsult.co/"
          />

          <DivisionItem
            name="Wildlife Encounters."
            description="Discover the wildlife around you through immersive conservation storytelling."
            url="https://wildlifearoundus.felixconsult.co"
          />

          <DivisionItem
            name="Praxifex"
            description="Driving environmental sustainability innovation with practical solutions."
            url="https://praxinex.org/"
          />

          <DivisionItem
            name="FelixWildlife"
            description="A platform dedicated to conservation excellence and ecosystem awareness."
            url="#"
          />

          <DivisionItem
            name="Wildlife of Africa Conservation Initiative."
            description="vibrant online home for anyone who loves and wants to protect Africa’s wildlife — plants and animals — and is ready to act."
            url="https://www.wildlifeofafrica.com/"
          />

          <DivisionItem
            name="WACI Action Hub"
            description="Digital hub for storytellers, conservationists, and community leaders."
            url="https://wacihub.org"
          />

          <DivisionItem
            name="Ecosphere Nexus"
            description="Empowering communities for a sustainable future."
            url="#"
          />

          <DivisionItem
            name="A & F Wildlife Foundation, DBA Wildlife-Pedia."
            description="A focused wildlife encyclopedia that collects and shares clear, simple information about animals and the natural world."
            url="https://www.wildlife-pedia.com/"
          />

          <DivisionItem
            name="Abaflix Emerald Farms."
            description="Fresh, sustainable aquaculture and poultry for a healthier tomorrow."
            url="#"
          />

          <DivisionItem
            name="Nature Ethics Research Institute."
            description="Empowering harmony between humans and wildlife through ethical research."
            url="#"
          />

          <DivisionItem
            name="Wildlife of Africa Con Init (Non-Profit)."
            description="A community-centered conservation movement dedicated to protecting Africa’s wildlife — both plants and animals — by inspiring and equipping a growing generation of people who care and want to act."
            url="#"
          />

        </div>

      </div>
    </main>
  )
}

function DivisionItem({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const isExternal = url !== "#"

  return (
    <a
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group p-6 bg-[#111114] rounded-xl
                 border border-[#C6A75E]/20
                 hover:border-[#C6A75E]/60
                 hover:bg-[#141418]
                 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#C6A75E] transition">
          {name}
        </h3>

        <span className="text-xs px-2 py-1 rounded-full
                         bg-[#C6A75E]/10 text-[#C6A75E]">
          active
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <p className="text-[#C6A75E] text-sm font-medium">
        {isExternal ? "Visit Initiative →" : "Coming Soon →"}
      </p>
    </a>
  )
}
