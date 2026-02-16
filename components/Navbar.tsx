"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [divisionsOpen, setDivisionsOpen] = useState(false)

  const aboutRef = useRef<HTMLDivElement>(null)
  const divisionsRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false)
      }

      if (
        divisionsRef.current &&
        !divisionsRef.current.contains(event.target as Node)
      ) {
        setDivisionsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="font-semibold text-lg">
          Felix Consulting Group
        </Link>

        <div className="flex items-center gap-8 text-sm text-gray-300">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {/* ABOUT */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="hover:text-white transition"
            >
              About
            </button>

            {aboutOpen && (
              <div className="absolute top-10 left-0 bg-[#111827] border border-gray-800 rounded-lg shadow-lg p-4 space-y-2 min-w-[180px] animate-fadeIn">
                <Link href="/about" className="block hover:text-white">
                  Firm Overview
                </Link>
                <Link href="/about/founder" className="block hover:text-white">
                  Founder
                </Link>
              </div>
            )}
          </div>

          {/* DIVISIONS */}
          <div className="relative" ref={divisionsRef}>
            <button
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className="hover:text-white transition"
            >
              Divisions
            </button>

            {divisionsOpen && (
              <div className="absolute top-10 left-0 bg-[#111827] border border-gray-800 rounded-lg shadow-lg p-4 space-y-2 min-w-[200px] animate-fadeIn">
                <Link href="/divisions/financial" className="block hover:text-white">
                  Financial
                </Link>
                <Link href="/divisions/travel" className="block hover:text-white">
                  Travel
                </Link>
                <Link href="/divisions/media" className="block hover:text-white">
                  Media
                </Link>
                <Link href="/divisions/conservation" className="block hover:text-white">
                  Conservation
                </Link>
                <Link href="/divisions/consulting" className="block hover:text-white">
                  Consulting
                </Link>
                <Link href="/divisions/services" className="block hover:text-white">
                  Services
                </Link>
              </div>
            )}
          </div>

          <Link href="/ecosystem" className="hover:text-white transition">
            Ecosystem
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  )
}
