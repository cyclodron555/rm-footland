import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Instagram, Facebook, Youtube, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Cyclodron Photography",
  description: "Get in touch with Cyclodron Photography for professional photography services.",
  openGraph: {
    title: "Contact | Cyclodron Photography",
    description: "Get in touch with Cyclodron Photography for professional photography services.",
    url: "https://cyclodron.com/contact",
    siteName: "Cyclodron Photography",
    locale: "en_US",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">Get in Touch</h1>
            <p className="text-lg md:text-xl text-foreground/60 mb-16">
              Connect with us for inquiries, collaborations, or to discuss your next project.
            </p>

            {/* Email Section */}
            <div className="mb-16 p-8 rounded-lg bg-secondary/30 border border-border">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-3">Email</h2>
              <a
                href="mailto:info@cyclodron.com"
                className="text-2xl text-primary hover:text-primary/80 transition-colors font-medium"
              >
                info@cyclodron.com
              </a>
            </div>

            {/* Social Media Links */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-8">Follow Us</h2>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="https://www.instagram.com/cyclodron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary transition-colors group min-w-[140px]"
                >
                  <Instagram className="w-10 h-10 text-foreground/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/cyclodrongallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary transition-colors group min-w-[140px]"
                >
                  <Facebook className="w-10 h-10 text-foreground/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@cyclodron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary transition-colors group min-w-[140px]"
                >
                  <Youtube className="w-10 h-10 text-foreground/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">YouTube</span>
                </a>
                <a
                  href="https://x.com/cyclodron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary transition-colors group min-w-[140px]"
                >
                  <Twitter className="w-10 h-10 text-foreground/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-foreground">X (Twitter)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
