"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        scrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Cyclodron" width={120} height={80} priority className="h-12 sm:h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group ${
                pathname === "/" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Home
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/about"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group ${
                pathname === "/about" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              About
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group ${
                pathname === "/contact" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Contact
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="https://patreon.com/Cyclodron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group text-foreground/70 hover:text-foreground"
            >
              Patreon
              <span className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://cyclodron.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative group text-accent hover:text-accent/80"
            >
              Downloads
              <span className="absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-base font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname === "/" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-base font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname === "/about" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-base font-semibold uppercase tracking-wider transition-colors py-2 ${
                pathname === "/contact" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="https://patreon.com/Cyclodron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold uppercase tracking-wider transition-colors py-2 text-foreground/70 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patreon
            </Link>
            <Link
              href="https://cyclodron.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold uppercase tracking-wider transition-colors py-2 text-accent hover:text-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              Downloads
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
