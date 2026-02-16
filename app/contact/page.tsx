"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    intent: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    const data = await res.json()

    if (data.success) {
      setSuccess(true)
      setForm({ name: "", email: "", message: "", intent: "" })
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
          Start a Conversation
        </h1>

        <p className="text-gray-400 mb-12">
          Every platform inside this ecosystem was built to be deployed,
          customized, or expanded. If you found what you need — use it.
          If you need support, customization, or a new solution,
          we architect it with you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Intent Selector */}
          <select
            value={form.intent}
            onChange={(e) =>
              setForm({ ...form, intent: e.target.value })
            }
            className="w-full p-4 bg-[#111114] border border-[#C6A75E]/20 rounded-lg text-white"
            required
          >
            <option value="">What are you looking to do?</option>
            <option value="use">Use an existing platform</option>
            <option value="customize">Customize an existing platform</option>
            <option value="build">Build a new solution</option>
            <option value="advisory">Strategic advisory</option>
          </select>

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-4 bg-[#111114] border border-[#C6A75E]/20 rounded-lg"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-4 bg-[#111114] border border-[#C6A75E]/20 rounded-lg"
            required
          />

          <textarea
            placeholder="Tell us what you're looking to solve or build..."
            rows={5}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-4 bg-[#111114] border border-[#C6A75E]/20 rounded-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#C6A75E] hover:bg-[#b8954f] text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>

          {success && (
            <p className="text-green-500">
              Your message has been received. We will respond shortly.
            </p>
          )}

        </form>

        {/* Authority Reinforcement */}
        <div className="mt-16 text-gray-500 text-sm">
          Structured systems. Clear architecture. Long-term scale.
        </div>

      </div>
    </main>
  )
}
