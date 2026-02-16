"use client"

import { useState } from "react"

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
      setForm({ name: "", email: "", message: "" })
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Contact Felix Consulting Group
      </h1>

      <p className="text-gray-400 max-w-2xl mb-12">
        For advisory services, partnerships, or strategic collaboration,
        please send us a message below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-4 bg-[#0D1428] border border-gray-800 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-4 bg-[#0D1428] border border-gray-800 rounded-lg"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full p-4 bg-[#0D1428] border border-gray-800 rounded-lg"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>

        {success && (
          <p className="text-green-500">
            Message sent successfully.
          </p>
        )}
      </form>
    </main>
  )
}
