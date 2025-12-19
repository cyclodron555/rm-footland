import type { Metadata } from "next"
import { Instagram, Youtube, Facebook, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cyclodron Links | British Columbia Photography",
  description:
    "Quiet nature moments from British Columbia. Connect with Cyclodron Photography on YouTube, Instagram, and more.",
  robots: "noindex, nofollow", // Not exposed to search engines
}

const links = [
  {
    title: "YouTube",
    href: "https://youtube.com/@cyclodron", // Replace with your actual YouTube channel
    icon: Youtube,
    color: "hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/cyclodron", // Replace with your actual Instagram
    icon: Instagram,
    color: "hover:bg-[#E4405F]/10 hover:border-[#E4405F]/30",
  },
  {
    title: "Facebook",
    href: "https://facebook.com/cyclodrongallery", // Replace with your actual Facebook
    icon: Facebook,
    color: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30",
  },
  {
    title: "Website",
    href: "https://cyclodron.com",
    icon: null,
    color: "hover:bg-primary/10 hover:border-primary/30",
    label: "cyclodron.com",
  },
  {
    title: "Email",
    href: "mailto:info@cyclodron.com", // Replace with your actual email
    icon: Mail,
    color: "hover:bg-accent/10 hover:border-accent/30",
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 py-12">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32">
            <Image src="/logo.png" alt="Cyclodron Logo" width={128} height={128} className="object-contain" priority />
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-serif font-bold text-foreground tracking-tight">Cyclodron</h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              Quiet nature moments from British Columbia
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="space-y-3" aria-label="Social links">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block w-full p-4 rounded-lg
                  bg-card border border-border
                  text-foreground font-medium
                  transition-all duration-200
                  ${link.color}
                  active:scale-[0.98]
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background
                `}
              >
                <div className="flex items-center justify-center gap-3">
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="text-lg">{link.label || link.title}</span>
                </div>
              </a>
            )
          })}
        </nav>

        {/* Location Footer */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm pt-4">
          <MapPin className="w-4 h-4" />
          <span>British Columbia, Canada</span>
        </div>
      </div>
    </main>
  )
}
