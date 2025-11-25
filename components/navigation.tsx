"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
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

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const bookSection = document.getElementById("book-a-shoot")
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Cyclodron" width={120} height={80} priority className="h-14 sm:h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/portfolio"
              className={`text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                pathname === "/portfolio" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Portfolio
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  pathname === "/portfolio" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/about"
              className={`text-sm uppercase tracking-wider transition-all duration-300 relative group ${
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
            <Link href="#book-a-shoot" onClick={handleBookClick}>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-medium"
              >
                Book a Shoot
              </Button>
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
              href="/portfolio"
              className={`text-sm uppercase tracking-wider transition-colors py-2 ${
                pathname === "/portfolio" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className={`text-sm uppercase tracking-wider transition-colors py-2 ${
                pathname === "/about" ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link href="#book-a-shoot" onClick={handleBookClick}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-2 font-medium">
                Book a Shoot
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
