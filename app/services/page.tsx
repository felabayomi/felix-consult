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
            title="Adrian's Styled Collection"
            description="Elevate Your Style with Timeless Elegance — A curated fashion collection blending classic sophistication with modern trends, designed to empower your wardrobe with versatile and stylish pieces for every occasion."
            url="https://www.shopwithadrian.com/"
          />

          <ServiceCard
            title="Errand Easy"
            description="Professional concierge services simplifying personal and business errands."
            url="https://errandeasy.app/"
          />

          <ServiceCard
            title="ARK Logistics - An Errand Easy Delivery Company"
            description="Delivering Excellence, Moving Your World — A comprehensive logistics and delivery service designed to provide efficient, reliable, and scalable solutions for businesses and individuals, ensuring your goods reach their destination with care and precision."
            url="https://errandeasydelivery.com"
          />

          <ServiceCard
            title="A & F Laundry Care Studio™"
            description="A fabric and garment care advisory brand dedicated to helping individuals, homeowners, and short-term rental hosts protect the value of their clothing and linens."
            url="https://aflaundry.com/"
          />

          <ServiceCard
            title="A & F Textile Asset Advisory Group™"
            description="A consulting and strategy brand that helps property operators, hospitality businesses, and retail organizations protect and manage textile assets more efficiently."
            url="https://aflaundry.com/"
          />

          <ServiceCard
            title="EasyDesk Pro - Prototype"
            description="Modern coworking spaces empowering freelancers, teams, and startups."
            url="https://ezdesk.pro"

          />

          <ServiceCard
            title="ARK Wellness"
            description="Health-focused operational services promoting balance and wellbeing."
            url="#"
          />

          <ServiceCard
            title="Abaflix Emerald Farms"
            description="Sustainable food and agricultural infrastructure initiatives."
            url="https://abaflix.us/"
          />

          <ServiceCard
            title="Felix's Store"
            description="Your Everyday Needs, Just a Click Away — A curated online store offering a range of essential products for daily life, from home goods to personal care items, all delivered with convenience and reliability."
            url="https://apps.apple.com/us/app/felix-store/id1567050617"
          />

          <ServiceCard
            title="ARK Sports Lounge"
            description="Where Sports and Leisure Meet — A dynamic sports lounge offering a vibrant atmosphere for fans to enjoy live games, socialize, and experience the thrill of sports in a unique setting."
            url="https://apps.apple.com/us/app/fanlore/id6760257973"
          />

          <ServiceCard
            title="Felix Meal"
            description="Creates meals and menus from ingredients or by request, providing convenient and delicious food solutions for individuals and businesses."
            url="https://chatgpt.com/g/g-689404bb375c8191a934b6afca8659c8-felix-meals"
          />

          <ServiceCard
            title="AFLaundry"
            description="Operational laundry service platform for bookings, workflows, and customer service delivery."
            url="https://aflaundry.com/"
          />

          <ServiceCard
            title="Document-Formatter"
            description="Document processing workflow tool for formatting and delivery operations."
            url="#"
          />

          <ServiceCard
            title="AFLaundry-New"
            description="Next deployment track for A&F Laundry operational workflows and service infrastructure."
            url="#"
          />

          <ServiceCard
            title="Inquiry-Hub"
            description="Centralized inquiry intake and coordination platform for support and request workflows."
            url="https://inquiryhub.app"
          />

          <ServiceCard
            title="Letter-Organizer-Pro"
            description="Organized workflow system for letter intake, tracking, and action management."
            url="#"
          />

          <ServiceCard
            title="Letter-Vault-Deployment"
            description="Deployment-ready letter management platform for records, reminders, and follow-through."
            url="https://lettervault.us"
          />

          <ServiceCard
            title="Smart-Meeting-Minder"
            description="Meeting reminder and schedule coordination platform for team operations."
            url="#"
          />

          <ServiceCard
            title="Errand Mover"
            description="Operational scheduling workflow for errand movement and delivery coordination."
            url="https://errandeasyscheduler.com"
          />

          <ServiceCard
            title="ErrandEZ Mobile"
            description="Mobile errand workflow app for booking and service coordination."
            url="https://errandez.com/"
          />

          <ServiceCard
            title="Felix App Manager"
            description="Internal management console for tracking app portfolio status and operations."
            url="http://felixdgreatapps.felixconsult.co/"
          />

          <ServiceCard
            title="Tax Automator"
            description="Tax workflow automation platform for operational finance processing."
            url="https://taxflowpro.felixconsult.co/"
          />

        </div>

        {/* CONSULTING PACKAGES SECTION */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold mb-4 text-[#C6A75E] text-center">
            App Launch Services
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Fast-track your app to market with our ready-made launch packages.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <PricingCard
              price="$99"
              title="App Business Review"
              features={[
                "30-minute discovery call",
                "Market & competitor analysis",
                "Viability assessment",
                "Roadmap recommendation"
              ]}
              cta="Request Review"
            />

            <PricingCard
              price="$499"
              title="Launch Setup"
              features={[
                "Complete app architecture design",
                "Technical stack recommendation",
                "Branding & design direction",
                "30-day deployment plan"
              ]}
              cta="Start Setup"
              highlight
            />

            <PricingCard
              price="Custom"
              subtitle="from $1,500"
              title="App Launch"
              features={[
                "Full design & development",
                "Database & backend setup",
                "Branded deployment",
                "Post-launch support & optimization"
              ]}
              cta="Discuss Build"
            />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-20 text-center border-t border-[#C6A75E]/20 pt-12">
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

/* PRICING CARD COMPONENT */

function PricingCard({
  price,
  subtitle,
  title,
  features,
  cta,
  highlight,
}: {
  price: string
  subtitle?: string
  title: string
  features: string[]
  cta: string
  highlight?: boolean
}) {
  return (
    <div
      className={`relative p-8 rounded-xl border transition-all duration-300 flex flex-col
                  ${highlight
          ? "bg-[#C6A75E]/10 border-[#C6A75E]/60 scale-105"
          : "bg-[#111114] border-[#C6A75E]/20 hover:border-[#C6A75E]/60"
        }`}
    >
      {highlight && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C6A75E] text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-bold text-[#C6A75E]">{price}</span>
          {subtitle && <span className="text-gray-400 text-sm">{subtitle}</span>}
        </div>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
            <span className="text-[#C6A75E] mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300
                    ${highlight
            ? "bg-[#C6A75E] text-black hover:bg-[#D4B56F]"
            : "bg-[#C6A75E]/20 text-[#C6A75E] hover:bg-[#C6A75E]/30"
          }`}
      >
        {cta}
      </Link>

      <p className="text-xs text-gray-500 text-center mt-4">
        Inquiries sent to thefelixconsultinggroup@gmail.com
      </p>
    </div>
  )
}
