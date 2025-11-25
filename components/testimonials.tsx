"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Testimonial {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Lisa Nicole",
    role: "Realtor",
    quote:
      "Parviz did an incredible job capturing my listing in Grand Forks. Same-day turnaround and even provided vertical photos for marketing. Highly recommended!",
  },
  {
    name: "Leanne Babcock",
    role: "REALTOR®",
    quote:
      "Outstanding photographer with exceptional drone work. Professional, responsive, and consistently delivers amazing results.",
  },
  {
    name: "Cindy Anthony",
    role: "Client",
    quote:
      "Parviz and his team exceeded our expectations. They produced a high-quality video that captured the heart of our message beautifully.",
  },
  {
    name: "James Tyler",
    role: "Client",
    quote:
      "I've worked with Parviz on multiple projects. He consistently delivers precise, high-quality photography and drone footage. Reliable and talented.",
  },
  {
    name: "Hellen Rivera",
    role: "Event Client",
    quote:
      "Extremely professional! They arrived early, captured every key moment, and delivered stunning photos within the week. Would hire again.",
  },
  {
    name: "Lorena Gutierrez",
    role: "Client",
    quote:
      "Amazing work! Super professional, quick turnaround, and photos that truly captured the night. Couldn't be happier.",
  },
  {
    name: "Flec Demmon",
    role: "Client",
    quote: "Great service. Work was done on my schedule with excellent quality. Highly recommend.",
  },
  {
    name: "Olga N",
    role: "Client",
    quote: "Very professional, fast service, and detail-oriented. Highly recommend Cyclodron Photography.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage)

  const currentReviews = testimonials.slice(currentIndex * reviewsPerPage, (currentIndex + 1) * reviewsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary mb-4">Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Clients Say</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Trusted by real estate professionals, homeowners, and businesses across British Columbia
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentReviews.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className="bg-card border-border/40 hover:border-primary/50 transition-colors duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="border-t border-border/20 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="rounded-full border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-primary" : "bg-primary/20"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=cyclodron+photography"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
