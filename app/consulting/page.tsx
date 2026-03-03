"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ConsultingDivision() {
  const pathname = usePathname()
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      {/* Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10">

      <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
        Consulting & Strategy
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

      <h2 className="text-3xl font-bold mb-6 text-white">
        Consulting & Strategy Platforms
      </h2>

      <p className="text-gray-400 max-w-3xl mb-12">
        These entities represent the structured advisory, institutional,
        and strategic frameworks within the Felix ecosystem. 
        Each platform strengthens long-term ecosystem architecture,
        leadership development, and institutional growth.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <ServiceCard
  title="Felix Consulting Group."
  description="Strategic advisory and ecosystem architecture firm focused on institutional structuring, operational systems, and long-term growth design."
  link="https://felixconsult.co/"
/>
        
<ServiceCard
  title="FelixDGuide"
  description="Founder-led insights on strategy, structured growth, and ecosystem thinking across finance, travel, and impact platforms."
  link="https://felixdguide.com"
/>

<ServiceCard
  title="AdrianFelix Corporation."
  description="Structured enterprise development and holding initiatives focused on scalable business architecture."
  link="https://felixconsult.co/"
/>

<ServiceCard
  title="Insightify Hub (Inquiry Hub)."
  description="A collaborative platform designed to support cohort-based research and learning journeys. We believe that meaningful inquiry happens best when people work together, share resources, and build on each other's insights."
  link="https://inquiryhub.app"
/>

<ServiceCard
  title="FeliMark"
  description="Brand positioning and strategic marketing frameworks built to strengthen authority and long-term visibility."
  link="#"
/>

<ServiceCard
  title="Justice Beyond Borders."
  description="Global impact initiative focused on structural justice, institutional reform, and ethical systems integration."
  link="#"
/>

<ServiceCard
  title="Center for Spiritual Humanism."
  description="Philosophical and human-centered frameworks exploring structured ethics, spiritual development, and civic leadership."
  link="#"
/>

<ServiceCard
  title="Faith House Ministries Church."
  description="Faith-based institutional platform integrating spiritual leadership, community impact, and structured ministry systems."
  link="#"
/>

  <ServiceCard
  title="TFCG Strategy Center."
  description="The Felix Consulting Group Strategy Room and Command Center — strategic discipline."
  link="https://tfcgstrategycenter.felixconsult.co"
/>

   <ServiceCard
  title="TFCG Chat."
  description="Chat with Felix Consult to get help and explore ideas."
  link="https://tfcgchat.felixconsult.co"
/>

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Partner With Us
        </h2>
        <p className="text-gray-400 mb-6">
          Engage Felix Consulting Group for advisory, venture strategy,
          or ecosystem development partnerships.
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

function ServiceCard({ title, description, link }: {
  title: string;
  description: string;
  link?: string;
}) {
  const content = (
    <div className="p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                    hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                    transition-all duration-300 h-full">
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
      {link && (
        <p className="mt-4 text-[#C6A75E] text-sm font-medium">
          Visit Platform →
        </p>
      )}
    </div>
  )

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : content
}
