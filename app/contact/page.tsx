"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

function ContactForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    intent: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Map service parameter to intent option
  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      const serviceMap: Record<string, string> = {
        "app-business-review": "review",
        "launch-setup": "mvp",
        "custom-app-launch": "custom",
      }
      const mappedIntent = serviceMap[service]
      if (mappedIntent) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm((prev) => ({ ...prev, intent: mappedIntent }))
      }
    }
  }, [searchParams])

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
    <>
      <h1 className="text-4xl font-bold mb-6 text-[#C6A75E]">
        Book Your Discovery Call
      </h1>

      <p className="text-gray-400 mb-12">
        Share what you need to launch, fix, or scale.
        We will respond with a practical recommendation, timeline, and next best step.
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
          <option value="">Select your primary goal</option>
          <option value="review">$99 App Business Review</option>
          <option value="mvp">$499 Launch Setup</option>
          <option value="custom">Custom App Launch (from $1,500)</option>
          <option value="modernize">Modernize an existing app</option>
          <option value="revenue">Add revenue features</option>
          <option value="ai">Integrate AI workflows</option>
        </select>

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          autoComplete="name"
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
          autoComplete="email"
          className="w-full p-4 bg-[#111114] border border-[#C6A75E]/20 rounded-lg"
          required
        />

        <textarea
          placeholder="What are you building, who is it for, and when do you want to launch?"
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
          {loading ? "Sending..." : "Get My Build Plan"}
        </button>

        {success && (
          <p className="text-green-500">
            Request received. We will follow up with next steps shortly.
          </p>
        )}

      </form>

      {/* Authority Reinforcement */}
      <div className="mt-16 text-gray-500 text-sm">
        Ready-made app foundations. Branded deployment. Launch support.
      </div>
    </>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </main>
  )
}
