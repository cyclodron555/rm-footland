'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Real Madrid Foundation Clinic Azerbaijan Logo" 
              className="h-16"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#upcoming" className="text-sm text-foreground hover:text-primary transition-colors">
              Upcoming
            </Link>
            <Link href="#history" className="text-sm text-foreground hover:text-primary transition-colors">
              History
            </Link>
            <Link href="#madrid-experience" className="text-sm text-foreground hover:text-primary transition-colors">
              Madrid Experience
            </Link>
            <Link href="#methodology" className="text-sm text-foreground hover:text-primary transition-colors">
              The Real Way
            </Link>
          </nav>
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-muted-foreground font-semibold">Powered by</p>
            <img 
              src="/footland-logo.png" 
              alt="Footland Logo" 
              className="h-10"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
