"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    image: "/images/dsc4433-12x28.jpeg",
    title: "Nature's Canvas",
    subtitle: "Landscape Photography",
  },
  {
    image: "/images/dsc0137-hdr.jpg",
    title: "Interior Elegance",
    subtitle: "Real Estate Photography",
  },
  {
    image: "/images/img-3751-enhanced.jpeg",
    title: "Harbour Sunsets",
    subtitle: "Landscape Photography",
  },
  {
    image: "/images/dsc0819.jpeg",
    title: "Artistic Portraits",
    subtitle: "Character Photography",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("book-a-shoot")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl space-y-6 animate-fade-in">
          <p className="text-primary text-base md:text-lg uppercase tracking-[0.3em] font-bold">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground text-balance leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto text-pretty font-semibold">
            Capturing moments that define spaces and landscapes with cinematic precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-lg font-bold"
              onClick={scrollToBooking}
            >
              Book a Shoot
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 bg-transparent rounded-full px-10 text-lg font-bold"
              asChild
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <button
          onClick={prevSlide}
          className="text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all ${index === currentSlide ? "w-12 bg-primary" : "w-6 bg-foreground/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-foreground/60 hover:text-foreground transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  )
}
