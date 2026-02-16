"use client"

import "./globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition ${
        pathname === href
          ? "text-[#C6A75E] font-semibold"
          : "text-gray-400 hover:text-[#C6A75E]"
      }`}
    >
      {label}
    </Link>
  )

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#0A0F1F] via-[#0D1328] to-[#0A0F1F] text-white">

        {/* NAVBAR */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-[#0B0B0F]/95 backdrop-blur-xl py-4 border-b border-[#C6A75E]/30"
              : "bg-transparent py-6"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

            <Link href="/" className="font-bold text-lg">
              Felix Consulting Group
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 text-sm">

              {navLink("/", "Home")}

              {/* ABOUT */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "about" ? null : "about"
                    )
                  }
                  className="text-gray-400 hover:text-[#C6A75E] transition"
                >
                  About ▾
                </button>

                {activeDropdown === "about" && (
                  <div className="absolute top-10 left-0 w-56 bg-[#12172F] border border-[#C6A75E]/20 rounded-xl shadow-xl p-4 space-y-3">
                    <Link href="/about" className="block text-gray-400 hover:text-[#C6A75E]">
                      Overview
                    </Link>
                    <Link href="/about/founder" className="block text-gray-400 hover:text-[#C6A75E]">
                      Founder
                    </Link>
                  </div>
                )}
              </div>

              {navLink("/ecosystem", "Ecosystem")}

              {/* DIVISIONS */}
              <div className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "divisions" ? null : "divisions"
                    )
                  }
                  className="text-gray-400 hover:text-[#C6A75E] transition"
                >
                  Divisions ▾
                </button>

                {activeDropdown === "divisions" && (
                  <div className="absolute top-10 left-0 w-64 bg-[#12172F] border border-[#C6A75E]/20 rounded-xl shadow-xl p-4 space-y-3">
                    <Link href="/financial" className="block text-gray-400 hover:text-[#C6A75E]">Financial</Link>
                    <Link href="/travel" className="block text-gray-400 hover:text-[#C6A75E]">Travel</Link>
                    <Link href="/media" className="block text-gray-400 hover:text-[#C6A75E]">Media</Link>
                    <Link href="/conservation" className="block text-gray-400 hover:text-[#C6A75E]">Conservation</Link>
                    <Link href="/consulting" className="block text-gray-400 hover:text-[#C6A75E]">Consulting</Link>
                    <Link href="/services" className="block text-gray-400 hover:text-[#C6A75E]">Services</Link>
                  </div>
                )}
              </div>

              {navLink("/contact", "Contact")}

            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black px-6 py-4 space-y-4">
              {navLink("/", "Home")}
              {navLink("/about", "About")}
              {navLink("/ecosystem", "Ecosystem")}
              {navLink("/financial", "Financial")}
              {navLink("/travel", "Travel")}
              {navLink("/media", "Media")}
              {navLink("/conservation", "Conservation")}
              {navLink("/consulting", "Consulting")}
              {navLink("/services", "Services")}
              {navLink("/contact", "Contact")}
            </div>
          )}

        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-24 min-h-screen flex flex-col">

          <div className="flex-grow">
            {children}
          </div>

          {/* FOOTER */}
          <footer className="bg-[#0F1428] border-t border-[#C6A75E]/20 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12 text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Felix Consulting Group. All rights reserved.
            </div>
          </footer>

        </div>

      </body>
    </html>
  )
}
