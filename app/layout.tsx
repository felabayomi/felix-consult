"use client"

import "./globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition relative px-1
        ${
          pathname === href
            ? "text-[#C6A75E] relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1.5px] after:bg-[#C6A75E]"
            : "text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5]"
        }
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded
      `}
    >
      {label}
    </Link>
  )

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#0A0F1F] via-[#0D1328] to-[#0A0F1F] text-white">

        {/* NAVBAR */}
        <nav
          className={`fixed w-full z-50 transition-all duration-500 ${
            scrolled
              ? "bg-[#0B0B0F]/95 backdrop-blur-xl py-4 border-b border-[#C6A75E]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              : "bg-transparent py-8"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

            <Link href="/" className="font-bold text-lg">
              Felix Consulting Group
            </Link>

            {/* Desktop Nav */}
            <div
              ref={dropdownRef}
              className="hidden md:flex items-center gap-12 relative text-sm tracking-wide"
            >

  {navLink("/", "Home")}

  {/* ABOUT DROPDOWN */}
  <div className="relative">
    <button
      onClick={() => setMobileOpen(mobileOpen === "about" ? null : "about")}
      className="text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded"
    >
      About ▾
    </button>

    {mobileOpen === "about" && (
      <div className="absolute top-10 left-0 w-64 bg-[#12172F] border border-[#C6A75E]/20 hover:border-[#C6A75E]/40 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-6 space-y-4 z-50 transition-colors">
        <Link href="/about" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Overview
        </Link>
        <Link href="/about/founder" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Founder
        </Link>
      </div>
    )}
  </div>

  {navLink("/ecosystem", "Ecosystem")}

  {/* DIVISIONS DROPDOWN */}
  <div className="relative">
    <button
      onClick={() => setMobileOpen(mobileOpen === "divisions" ? null : "divisions")}
      className="text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded"
    >
      Divisions ▾
    </button>

    {mobileOpen === "divisions" && (
      <div className="absolute top-8 left-0 w-64 bg-[#12172F] border border-[#C6A75E]/20 hover:border-[#C6A75E]/40 rounded-xl shadow-2xl p-4 space-y-3 z-50 transition-colors">
        <Link href="/financial" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Financial Technologies
        </Link>
        <Link href="/travel" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Travel & Urban
        </Link>
        <Link href="/media" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Digital Media & Apps
        </Link>
        <Link href="/conservation" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Conservation & Impact
        </Link>
        <Link href="/consulting" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Consulting & Strategy
        </Link>
        <Link href="/services" className="block text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] hover:translate-x-1 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Services & Infrastructure
        </Link>
      </div>
    )}
  </div>

  {navLink("/contact", "Contact")}

</div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden bg-black px-6 py-4 space-y-4">
              {navLink("/", "Home")}
              {navLink("/about/founder", "Founder")}
              {navLink("/ecosystem", "Ecosystem")}
              <div>
                <span className="block text-gray-400 font-semibold mb-1">Divisions</span>
                <div className="pl-2 flex flex-col gap-2">
                  {navLink("/financial", "Financial")}
                  {navLink("/travel", "Travel")}
                  {navLink("/media", "Media")}
                  {navLink("/conservation", "Conservation")}
                  {navLink("/consulting", "Consulting")}
                  {navLink("/services", "Services")}
                </div>
              </div>
              {navLink("/contact", "Contact")}
            </div>
          )}
        </nav>

        {/* PAGE CONTENT */}
        <div className="pt-20 flex flex-col">
          {/* Indigo Glow for Homepage */}
          {pathname === "/" && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none z-0" />
          )}

  <div className="flex-grow">
    {children}
  </div>

  {/* GLOBAL FOOTER */}
  <footer className="bg-[#0F1428] border-t border-[#C6A75E]/20 mt-24 transition-colors">
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4 text-white">
          Felix Consulting Group
        </h4>
        <p className="text-gray-400">
          A global consulting firm and digital holding company building
          financial systems, travel ecosystems, media platforms,
          and impact-driven ventures.
        </p>
      </div>

      {/* Divisions */}
      <div>
        <h4 className="font-semibold mb-4 text-white">Divisions</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/financial">Financial Technologies</Link></li>
          <li><Link href="/travel">Travel & Urban</Link></li>
          <li><Link href="/media">Digital Media</Link></li>
          <li><Link href="/conservation">Conservation</Link></li>
        </ul>
      </div>

      {/* Ecosystem */}
      <div>
        <h4 className="font-semibold mb-4 text-white">Ecosystem</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link href="/ecosystem">Portfolio Overview</Link></li>
          <li><Link href="/contact">Partner With Us</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4 text-white">Contact</h4>
        <p className="text-gray-400">
          partnerships@felixconsultinggroup.com
        </p>
        <Link href="/about" className="text-gray-400 hover:text-[#C6A75E] focus:text-[#4F46E5] active:text-[#4F46E5] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:rounded">
          Global Operations
        </Link>
      </div>

    </div>

    <div className="border-t border-gray-800 text-center text-gray-500 py-6 text-xs">
      © {new Date().getFullYear()} Felix Consulting Group. All rights reserved.
    </div>
  </footer>

</div>

      </body>
    </html>
  )
}
