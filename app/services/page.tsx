"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function ServicesDivision() {
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
        Services & Infrastructure
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
        Felix Consulting Group operates operational platforms,
        concierge services, logistics systems, and coworking
        infrastructure designed to support modern professionals
        and growing enterprises.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <ServiceCard
          title="ReserveEZ"
          description="A community-focused online reservation platform helping restaurants manage bookings efficiently and elevate guest experience."
          url="https://tablepilot.io"
        />
        
        <ServiceCard
          title="Errand Easy"
          description="Professional concierge services simplifying personal and business errands."
          url="https://errandeasy.app/"
        />

        <ServiceCard
          title="EasyDesk Pro - Prototype."
          description="Modern coworking spaces empowering freelancers, teams, and startups."
          url="https://ezdesk.pro"
        />

        <ServiceCard
          title="ARK Logistics." - An Errand Easy Delivery Company
          description="Delivering Excellence, Moving Your World — A comprehensive logistics and delivery service designed to provide efficient, reliable, and scalable solutions for businesses and individuals, ensuring your goods reach their destination with care and precision."
          url="https://errandeasydelivery.com"
        />

        <ServiceCard
          title="A & F Laundry Care Studio™"
          description="A fabric and garment care advisory brand dedicated to helping individuals, homeowners, and short-term rental hosts protect the value of their clothing and linens."
          url="#"
        />

        <ServiceCard
          title="A & F Textile Asset Advisory Group™"
          description="A consulting and strategy brand that helps property operators, hospitality businesses, and retail organizations protect and manage textile assets more efficiently."
          url="#"
        />
        
        <ServiceCard
          title="ARK Wellness"
          description="Health-focused operational services promoting balance and wellbeing."
          url="#"
        />

        <ServiceCard
          title="Abaflix Emerald Farms"
          description="Sustainable food and agricultural infrastructure initiatives."
          url="#"
        />

        <ServiceCard
          title="Felix's Store"
          description="Your Everyday Needs, Just a Click Away — A curated online store offering a range of essential products for daily life, from home goods to personal care items, all delivered with convenience and reliability."
          url="#"
        />

        <ServiceCard
          title="ARK Sports Lounge"
          description="Where Sports and Leisure Meet — A dynamic sports lounge offering a vibrant atmosphere for fans to enjoy live games, socialize, and experience the thrill of sports in a unique setting."
          url="#"
        />

        <ServiceCard
          title="Adrian's Styled Collection"
          description="Elevate Your Style with Timeless Elegance — A curated fashion collection blending classic sophistication with modern trends, designed to empower your wardrobe with versatile and stylish pieces for every occasion."
          url="#"
        />

        <ServiceCard
          title="Felix Meal"
          description="Creates meals and menus from ingredients or by request, providing convenient and delicious food solutions for individuals and businesses."
          url="https://chatgpt.com/g/g-689404bb375c8191a934b6afca8659c8-felix-meals"
        />

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#C6A75E]">
          Operational Partnerships
        </h2>

        <p className="text-gray-400 mb-6">
          Partner with Felix Consulting Group to scale infrastructure,
          expand service delivery, or build new operational platforms.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#C6A75E] text-black hover:bg-[#D4B56F] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
        >
          Explore Partnership
        </Link>
      </div>
      </div>

    </main>
  )
}


/* SERVICE CARD COMPONENT */

function ServiceCard({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-[#111114] rounded-xl border border-[#C6A75E]/20 
                 hover:border-[#C6A75E]/60 hover:bg-[#141418] 
                 hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      <span className="text-[#C6A75E] text-sm">
        Visit Platform →
      </span>
    </a>
  )
}
