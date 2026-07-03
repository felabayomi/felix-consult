import Link from "next/link";
export const dynamic = "force-static";
export default function HomePage() {
  return (
    <main className="bg-[#05060A] text-white">

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center bg-gradient-to-b from-[#0B0E14] to-[#05060A]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Launch Your Own App In 72 Hours
        </h1>

        <p className="text-[#D4AF37] text-lg md:text-xl mb-4">
          Without Starting From Scratch
        </p>

        <p className="max-w-3xl mx-auto text-gray-400 mb-10">
          Pick an app. We will brand it, deploy it, and help you launch it. Built for entrepreneurs, agencies, consultants, creators, churches, and small business owners who want to own an app fast.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-[#D4AF37] text-black px-7 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Start My App Launch
          </Link>
          <Link
            href="/ecosystem"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            Pick An App Template
          </Link>
          <Link
            href="/services"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            View Pricing
          </Link>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Fast setup. Branded delivery. Launch support included.
        </p>
      </section>

      {/* PROOF STRIP */}
      <section className="py-12 border-t border-gray-800 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">4-8 Weeks</p>
            <p className="text-gray-400 text-sm">Typical MVP Launch</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">3 Build Tracks</p>
            <p className="text-gray-400 text-sm">MVP, Modernize, Scale</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">Production-First</p>
            <p className="text-gray-400 text-sm">Deploy Early, Improve Fast</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D4AF37]">Founder-Led</p>
            <p className="text-gray-400 text-sm">Direct Senior Execution</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 px-6 text-center border-t border-gray-800">
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
          &ldquo;We do not sell slide decks. We ship software products that solve a business problem and can scale with your operation.&rdquo;
        </p>
      </section>

      {/* FOUNDRY OFFERS */}
      <section className="py-24 px-6 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Productized Foundry Offers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "MVP Launch Sprint",
              desc: "For teams validating a new idea fast with a production-grade release.",
              items: [
                "Discovery workshop and feature scope in week 1.",
                "Rapid build with weekly demos and milestones.",
                "Production deployment with analytics and handoff."
              ],
              link: "Start A Sprint →"
            },
            {
              title: "App Modernization",
              desc: "For businesses with legacy apps or fragmented workflows that need speed and clarity.",
              items: [
                "UX and app foundation audit to remove bottlenecks.",
                "Migration to a scalable Next.js and API stack.",
                "Performance, SEO, and conversion optimization."
              ],
              link: "Modernize My App →"
            },
            {
              title: "Revenue Feature Studio",
              desc: "For teams that already have users and need monetization and growth features.",
              items: [
                "Payments, subscriptions, and pricing setup.",
                "Admin workflows for operations and content teams.",
                "A/B-ready growth loops and engagement triggers."
              ],
              link: "Add Revenue Features →"
            },
            {
              title: "AI Workflow Integration",
              desc: "For teams that want practical automation without breaking existing operations.",
              items: [
                "Internal copilots for support, ops, and research.",
                "Smart content and data processing pipelines.",
                "Guardrails, observability, and human approvals."
              ],
              link: "Integrate AI Workflows →"
            },
            {
              title: "Fractional Product Team",
              desc: "For founders and operators that need a strategic build partner across product, design, and engineering.",
              items: [
                "Roadmap planning tied to business outcomes.",
                "Execution support from idea to deployment.",
                "Decision support for hires, tooling, and growth."
              ],
              link: "Request Product Partnership →"
            },
            {
              title: "Custom Platform Build",
              desc: "For organizations that need a purpose-built platform aligned to a specific business model.",
              items: [
                "Ready-made app foundations with your domain data model.",
                "Multi-role dashboards and operational tooling.",
                "Secure cloud deployment and release support."
              ],
              link: "Scope A Custom Build →"
            }
          ].map((division, i) => (
            <div
              key={i}
              className="bg-[#0B0E14] border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition"
            >
              <h3 className="text-xl font-semibold mb-4">{division.title}</h3>
              <p className="text-gray-400 mb-4">{division.desc}</p>
              <ul className="text-gray-300 text-sm mb-6 space-y-2">
                {division.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
              <a href="/contact" className="text-[#D4AF37] font-medium hover:underline">
                {division.link}
              </a>
            </div>
          ))}

        </div>
      </section>

      {/* WHY NOT JUST USE AI */}
      <section className="py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37]">
            Why not just use AI?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            AI can generate code, but code is not a launched app. Felix Consult gives you a working app foundation, deployment support, branding guidance, offer positioning, and customization help. You are not buying prompts. You are buying a shortcut from idea to live product.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D4AF37] text-black px-7 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Get My App Matched
          </Link>
        </div>
      </section>

      {/* FEATURED APP CATALOG */}
      <section className="py-24 px-6 border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Featured App Catalog
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          Start with ready-made app foundations built for real launch outcomes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "ReserveEZ / TablePilot", type: "Booking and reservations", href: "/app-catalog" },
            { name: "Letter Vault", type: "Document and mail organizer", href: "/app-catalog" },
            { name: "BillWatch / ExpenseWatch", type: "Finance tracking", href: "/app-catalog" },
            { name: "City Discoverer / Travel Planner", type: "Travel and itinerary", href: "/app-catalog" },
            { name: "Errand Easy / ARK Logistics", type: "Service and delivery ops", href: "/app-catalog" },
            { name: "Tax Automator", type: "Tax workflow automation", href: "/app-catalog" },
          ].map((app, i) => (
            <Link
              key={i}
              href={app.href}
              className="bg-[#0B0E14] border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{app.type}</p>
              <span className="text-[#D4AF37] font-medium">View In App Catalog →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FIND IT SECTION */}
      <section className="py-24 px-6 border-t border-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          How Engagement Works
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          A simple path from problem statement to shipped product.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">

          {[
            {
              title: "Step 1: Discovery",
              desc: "We clarify scope, users, and business goals."
            },
            {
              title: "Step 2: Build",
              desc: "We deliver in short cycles with visible progress."
            },
            {
              title: "Step 3: Launch",
              desc: "We deploy to production with tracking in place."
            },
            {
              title: "Step 4: Optimize",
              desc: "We improve conversion, retention, and operations."
            }
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#0B0E14] border border-gray-800 rounded-lg p-8 hover:border-[#D4AF37] transition"
            >
              <h4 className="text-lg font-semibold mb-3 text-[#D4AF37]">
                {card.title}
              </h4>
              <p className="text-gray-400">{card.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-6">
          Ready To Build Your Next Revenue Engine?
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Book A Discovery Call
          </a>
          <a
            href="/ecosystem"
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            View Build Options
          </a>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER REMOVED AS REQUESTED */}

    </main>
  )
}
