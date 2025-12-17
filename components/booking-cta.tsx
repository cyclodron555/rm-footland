"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock } from "lucide-react"

export function BookingCTA() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    const subject = `New shoot inquiry from ${firstName} ${lastName}`
    const body = `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service Type: ${service}

Project Details:
${message}`

    const mailtoLink = `mailto:info@cyclodron.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section id="book-a-shoot" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">Let's Work Together</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Book a Shoot
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Whether you need stunning real estate photography, breathtaking landscape images, or dynamic cityscape
              shots, I'm here to bring your vision to life with professional, cinematic results.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">info@cyclodron.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-foreground font-medium">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Pacific Northwest</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-sm p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm text-muted-foreground mb-2 block">
                    First Name
                  </label>
                  <Input id="firstName" name="firstName" placeholder="John" className="bg-background" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm text-muted-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" className="bg-background" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-muted-foreground mb-2 block">
                  Phone Number
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-background" />
              </div>
              <div>
                <label htmlFor="service" className="text-sm text-muted-foreground mb-2 block">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option>Real Estate Photography</option>
                  <option>Landscape Photography</option>
                  <option>Cityscape Photography</option>
                  <option>Multiple Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-32 bg-background"
                  required
                />
              </div>
              <div className="space-y-2">
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Submit Inquiry
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Clicking submit will open your email app with your message pre-filled.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
