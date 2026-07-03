import Link from "next/link"

export default function EcosystemPage() {
  const apps = [
    {
      name: "Restaurant Booking Platform",
      category: "Financial",
      status: "published",
      price: "$499",
      description: "Online reservation system with table management, confirmations, and guest analytics.",
      features: ["Booking engine", "Guest management", "Multi-location support"],
    },
    {
      name: "Appointment Scheduler",
      category: "Financial",
      status: "coming-soon",
      price: "$499",
      description: "Service booking with calendar sync, reminders, and payment integration.",
      features: ["Calendar sync", "Automated reminders", "Payment processing"],
    },
    {
      name: "Trip Planner & Itineraries",
      category: "Travel",
      status: "coming-soon",
      price: "$699",
      description: "Interactive trip planning with maps, activity suggestions, and expense tracking.",
      features: ["Interactive maps", "Activity database", "Budget planning"],
    },
    {
      name: "Travel Discovery & Reviews",
      category: "Travel",
      status: "coming-soon",
      price: "$599",
      description: "Destination guides, local reviews, and travel inspiration content engine.",
      features: ["Content management", "Review system", "Social sharing"],
    },
    {
      name: "Content Management System",
      category: "Media",
      status: "published",
      price: "$399",
      description: "Lightweight CMS for blogs, articles, and multi-author publishing workflows.",
      features: ["Article management", "Author roles", "SEO optimization"],
    },
    {
      name: "Video Platform Lite",
      category: "Media",
      status: "coming-soon",
      price: "$799",
      description: "Video hosting, streaming, and audience engagement platform.",
      features: ["Video hosting", "Live streaming", "Viewer analytics"],
    },
    {
      name: "Impact Dashboard",
      category: "Conservation",
      status: "coming-soon",
      price: "$699",
      description: "Environmental data visualization and impact reporting for organizations.",
      features: ["Data dashboards", "Report generation", "Impact metrics"],
    },
    {
      name: "Field Data Collection",
      category: "Conservation",
      status: "coming-soon",
      price: "$599",
      description: "Mobile-first form builder for field research and offline data capture.",
      features: ["Offline capture", "GPS tracking", "Data export"],
    },
    {
      name: "Product Advisory Platform",
      category: "Consulting",
      status: "coming-soon",
      price: "$899",
      description: "Strategic planning and product development guidance workflow.",
      features: ["Roadmap planning", "Stakeholder management", "Deployment guides"],
    },
    {
      name: "E-Commerce Store Lite",
      category: "Services",
      status: "published",
      price: "$599",
      description: "Simple online store with product catalog, cart, and order management.",
      features: ["Product catalog", "Shopping cart", "Order tracking"],
    },
    {
      name: "SaaS Admin Dashboard",
      category: "Services",
      status: "coming-soon",
      price: "$799",
      description: "Multi-user admin dashboard for managing users, content, and operations.",
      features: ["User management", "Analytics", "Bulk operations"],
    },
    {
      name: "Community Forum",
      category: "Media",
      status: "coming-soon",
      price: "$499",
      description: "Threaded discussion platform with moderation, badges, and engagement tools.",
      features: ["Discussion threads", "Moderation tools", "Member profiles"],
    },
  ];

  const categories = ["Financial", "Travel", "Media", "Conservation", "Consulting", "Services"];
  const publishedCount = apps.filter((a) => a.status === "published").length;
  const comingSoonCount = apps.filter((a) => a.status === "coming-soon").length;

  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-white px-6 py-24">

      {/* Ambient Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-[900px] h-[900px] 
                      bg-[#C6A75E]/10 blur-[160px] 
                      rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#C6A75E]">
            App Catalog
          </h1>

          <p className="text-gray-400 text-lg mb-4">
            Pick a launch-ready app template. Customize it. Deploy in weeks, not months.
          </p>

          <div className="flex gap-6 text-sm">
            <div>
              <p className="text-2xl font-bold text-[#C6A75E]">{publishedCount}</p>
              <p className="text-gray-400">Published</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D4AF37]">{comingSoonCount}</p>
              <p className="text-gray-400">Coming Soon</p>
            </div>
          </div>
        </section>

        {/* APPS BY CATEGORY */}
        {categories.map((category) => {
          const categoryApps = apps.filter((a) => a.category === category);
          if (categoryApps.length === 0) return null;

          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-[#C6A75E]">{category}</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryApps.map((app, idx) => (
                  <div
                    key={idx}
                    className={`relative p-6 rounded-xl border transition-all duration-300 flex flex-col
                      ${
                        app.status === "published"
                          ? "bg-[#111114] border-[#C6A75E]/30 hover:border-[#C6A75E]/60 hover:bg-[#141418]"
                          : "bg-[#0D0D11] border-gray-700 hover:border-gray-600"
                      }`}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      {app.status === "published" ? (
                        <span className="inline-block bg-[#C6A75E] text-black text-xs font-semibold px-3 py-1 rounded-full">
                          Available Now
                        </span>
                      ) : (
                        <span className="inline-block bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 mb-4">
                      <h3 className="text-lg font-semibold mb-2 pr-24">{app.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{app.description}</p>

                      <div className="space-y-2">
                        {app.features.map((feature, fIdx) => (
                          <div key={fIdx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-[#C6A75E] mt-0.5">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-2xl font-bold text-[#C6A75E] mb-3">{app.price}</p>
                      {app.status === "published" ? (
                        <Link
                          href="/contact"
                          className="block text-center bg-[#C6A75E] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#D4B56F] transition text-sm"
                        >
                          Launch This App
                        </Link>
                      ) : (
                        <button
                          className="w-full bg-gray-700 text-gray-300 py-2 px-4 rounded-lg font-semibold cursor-not-allowed text-sm"
                          disabled
                        >
                          Notify Me
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* BOTTOM CTA BLOCK */}
        <section className="mt-24 text-center border-t border-gray-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Don&apos;t See Your App? Start Custom.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Every catalog app can be adapted to your exact workflows.
            Or we can build a purpose-built platform from scratch.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#C6A75E] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Book A Discovery Call
            </Link>

            <Link
              href="/services"
              className="border border-[#C6A75E]/50 px-6 py-3 rounded-md font-semibold hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
            >
              View Pricing
            </Link>
          </div>

        </section>

      </div>
    </main>
  )
}
