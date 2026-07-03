export default function AboutPage() {
  return (
    <main className="bg-[#05060A] text-white px-6">

      {/* HEADER */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Felix Consulting Group
        </h1>

        <p className="text-gray-400 text-lg">
          A sales-focused app foundry that turns business opportunities into shipping products.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="max-w-4xl mx-auto pb-20 border-t border-gray-800 pt-20">
        <h2 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
          From Operations To Product Foundry
        </h2>

        <p className="text-gray-300 mb-6">
          The journey started with real operating businesses and a practical obsession: build systems that work in the real world.
        </p>

        <p className="text-gray-300 mb-6">
          Over time, that operating discipline expanded into software products across finance, travel, media, services, and strategy.
        </p>

        <p className="text-gray-300">
          Today, we package that experience as a foundry model: discover opportunities, ship quickly, and scale what works.
        </p>
      </section>

      {/* WHAT THIS PLATFORM IS NOW */}
      <section className="max-w-4xl mx-auto pb-20 border-t border-gray-800 pt-20">
        <h2 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
          What Felix Consulting Group Is Today
        </h2>

        <p className="text-gray-300 mb-6">
          Felix Consulting Group operates as a build partner for founders, operators, and teams that need product velocity.
        </p>

        <p className="text-gray-300 mb-6">
          Instead of starting from zero, we combine proven building blocks with custom engineering to launch high-leverage apps faster.
        </p>

        <p className="text-gray-300">
          We are best suited for:
        </p>

        <ul className="mt-8 space-y-4 text-gray-300">
          <li>• Founders launching new products with clear timelines</li>
          <li>• Companies modernizing or rebuilding core applications</li>
          <li>• Teams adding revenue and automation features to existing products</li>
          <li>• Leaders who need delivery, not just advisory</li>
        </ul>
      </section>

      {/* HOW TO ENGAGE */}
      <section className="max-w-4xl mx-auto pb-20 border-t border-gray-800 pt-20">
        <h2 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
          How To Engage The Foundry
        </h2>

        <p className="text-gray-300 mb-6">
          Engagement is structured for speed and accountability.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• Discovery call to define scope and business targets.</li>
          <li>• Product blueprint with phased delivery milestones.</li>
          <li>• Build and deploy with weekly checkpoints.</li>
          <li>• Post-launch optimization for growth and operations.</li>
          <li>• Optional retained product and engineering support.</li>
        </ul>

        <p className="mt-8 text-gray-400">
          Bring the problem. We will bring the shipping plan.
        </p>
      </section>

      {/* MARKETPLACE POSITIONING */}
      <section className="max-w-4xl mx-auto pb-20 border-t border-gray-800 pt-20">
        <h2 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
          Why Clients Choose This Model
        </h2>

        <p className="text-gray-300 mb-6">
          You avoid slow handoffs between strategy, design, and engineering.
        </p>

        <p className="text-gray-300 mb-6">
          We work as one accountable delivery unit focused on measurable product outcomes.
        </p>

        <p className="text-gray-300">
          The result is faster launch velocity, tighter execution, and lower build risk.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="max-w-4xl mx-auto pb-20 border-t border-gray-800 pt-20">
        <h2 className="text-3xl font-bold mb-4">
          Felix Olusola Abayomi
        </h2>

        <p className="text-[#D4AF37] mb-8">
          Founder & Product Systems Architect
        </p>

        <p className="text-gray-300 mb-6">
          Felix Olusola Abayomi is a systems builder focused on practical execution and long-term product value.
        </p>

        <p className="text-gray-300 mb-6">
          His work centers on turning fragmented business needs into unified, shipping software products.
        </p>

        <h3 className="text-xl font-semibold mt-12 mb-4 text-[#D4AF37]">
          Operating Philosophy
        </h3>

        <ul className="space-y-3 text-gray-300">
          <li>• Build systems before chasing scale.</li>
          <li>• Design for outcomes before increasing complexity.</li>
          <li>• Strengthen foundations before acceleration.</li>
          <li>• Structure partnerships before expansion.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-12 mb-4 text-[#D4AF37]">
          Long-Term Vision
        </h3>

        <p className="text-gray-300">
          The objective is to help clients launch and scale software products that compound value over time.
        </p>
      </section>

      {/* MISSION */}
      <section className="max-w-4xl mx-auto pb-24 border-t border-gray-800 pt-20 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
          Mission
        </h2>

        <p className="text-gray-300 text-lg">
          To design, build, and launch high-impact software products that improve how businesses operate and grow.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center pb-24">
        <a
          href="/contact"
          className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Book A Discovery Call
        </a>
      </section>

    </main>
  )
}
