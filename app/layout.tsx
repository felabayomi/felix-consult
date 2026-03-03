"use client"

import "./globals.css"
import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const STRIPE_BUY_BUTTON_ID =
  process.env.NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID ?? "buy_btn_1T6yYuDZfar9hiaNRjaBAsc1"
const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
  "pk_live_51QyLfCDZfar9hiaNkUJQR3EymJlPXZXWN9yFynWo4RdSFE0GCUkGcRHlDU3yCtRT7TwZQIkYgZNhV2aY1eydWtq700i96spfci"

function StripeBuyButton() {
  return (
    <stripe-buy-button
      buy-button-id={STRIPE_BUY_BUTTON_ID}
      publishable-key={STRIPE_PUBLISHABLE_KEY}
    ></stripe-buy-button>
  )
}

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
        <Script src="https://js.stripe.com/v3/buy-button.js" strategy="lazyOnload" />

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
              <StripeBuyButton />
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
              <StripeBuyButton />
            </div>
          )}
        </nav>

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
