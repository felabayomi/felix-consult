"use client"

import "./globals.css"
import Link from "next/link"
import Script from "next/script"
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
      <body className="bg-[#0B0B0F] text-white">

        {/* Stripe Script */}
        <Script
          src="https://js.stripe.com/v3/buy-button.js"
          strategy="afterInteractive"
        />

        {/* NAVBAR */}
        <nav
          className={`fixed w-full top-0 z-50 transition-all ${
            scrolled
              ? "bg-white shadow-md border-b border-gray-200"
              : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            <Link href="/" className="font-semibold text-black">
              Felix Consulting Group
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/" className="text-gray-700 hover:text-black">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
              <Link href="/ecosystem" className="text-gray-700 hover:text-black">
                Ecosystem
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black">
                Contact
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-black text-2xl"
            >
              ☰
            </button>

          </div>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-6 py-6 space-y-6 z-[999] shadow-md">
              <Link 
                href="/" 
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/ecosystem" 
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ecosystem
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>

        {/* Stripe Button (Inserted Only) */}
        <div className="pt-24 flex justify-center">
          <stripe-buy-button
            buy-button-id="buy_btn_1T6zIlQ41M31TbLQJQx0bdFC"
    publishable-key="pk_live_51PtDMyQ41M31TbLQQ2QwN3Yf8eba43z9X7hQNTnV1GM6EDnIJnjUiVtEJ5Ua1A4DoD8xoezeL7PfNTOzFIeFLaOi00SsptHeyf"
  >
          </stripe-buy-button>
        </div>

        {/* PAGE CONTENT */}
        <div className="pt-24 flex flex-col">

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
