import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Cyclodron Photography" width={180} height={60} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              Quiet photography and ambient filmmaking. Exploring real places, real light, and the beauty that exists
              without interruption.
            </p>
            {/* </CHANGE> */}
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/cyclodron/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/cyclodrongallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.youtube.com/@cyclodron/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://x.com/cyclodron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6 tracking-wide text-sm uppercase">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://patreon.com/Cyclodron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Patreon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cyclodron Photography. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
