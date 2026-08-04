'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
  { label: 'About', hash: '#about' },
  { label: 'Upcoming', hash: '#upcoming' },
  { label: 'History', hash: '#history' },
  { label: 'Madrid Experience', hash: '#madrid-experience' },
  { label: 'The Real Way', hash: '#methodology' }
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (hash: string) => {
    // If on homepage, just use hash navigation
    if (pathname === '/') {
      // Let the default link behavior handle it
      return
    }
    // If on another page, navigate to home with the hash
    router.push('/' + hash)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Real Madrid Foundation Clinic Azerbaijan Logo" 
              className="h-16"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.hash}
                onClick={() => handleNavClick(item.hash)}
                className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer bg-none border-none p-0"
              >
                {item.label}
              </button>
            ))}
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
