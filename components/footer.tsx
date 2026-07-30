'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Real Madrid Foundation Clinic Azerbaijan Logo" 
                className="h-20"
              />
            </div>
            <p className="text-white/70 text-sm">
              Real Madrid Foundation Clinics - Your effort, their future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#upcoming" className="hover:text-white transition-colors">
                  Upcoming Clinics
                </Link>
              </li>
              <li>
                <Link href="#history" className="hover:text-white transition-colors">
                  Past Clinics
                </Link>
              </li>
              <li>
                <Link href="#methodology" className="hover:text-white transition-colors">
                  The Real Way
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact</h4>
            <p className="text-white/70 text-sm mb-2">
              Email: <span className="text-white">info@footland.az</span>
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Follow Us</h4>
            <p className="text-white/70 text-sm mb-4">
              Stay updated on our latest clinics and events
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/footland.az" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="https://instagram.com/footland.az" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <span className="text-xs font-bold">ig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/70 text-sm text-center">
            © 2026 Real Madrid Foundation Azerbaijan. All rights reserved. | 
            <Link href="#" className="hover:text-white ml-2">Privacy Policy</Link> | 
            <Link href="#" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
