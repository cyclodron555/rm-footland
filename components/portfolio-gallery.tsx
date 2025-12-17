"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ImageLightbox } from "@/components/image-lightbox"
import { portfolioData, type PortfolioItem } from "@/app/data/portfolioData"

type Genre = "landscape" | "portraits" | "real-estate" | "cityscape"

const groupedData: Record<Genre, PortfolioItem[]> = {
  landscape: portfolioData.filter((item) => item.category === "landscape"),
  portraits: portfolioData.filter((item) => item.category === "portraits"),
  "real-estate": portfolioData.filter((item) => item.category === "real-estate"),
  cityscape: portfolioData.filter((item) => item.category === "cityscape"),
}

export function PortfolioGallery() {
  const [activeGenre, setActiveGenre] = useState<Genre>("landscape")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const genres: { value: Genre; label: string }[] = [
    { value: "landscape", label: "Landscape" },
    { value: "portraits", label: "Portraits" },
    { value: "real-estate", label: "Real Estate" },
    { value: "cityscape", label: "Cityscape" },
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === groupedData[activeGenre].length - 1 ? 0 : prev + 1))
  }

  const previousImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? groupedData[activeGenre].length - 1 : prev - 1))
  }

  return (
    <div>
      {/* Genre Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {genres.map((genre) => (
          <Button
            key={genre.value}
            variant={activeGenre === genre.value ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveGenre(genre.value)}
            className={
              activeGenre === genre.value
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-border/40 text-foreground/80 hover:text-foreground hover:border-primary/50"
            }
          >
            {genre.label}
          </Button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {groupedData[activeGenre].map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-4 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={1200}
              height={900}
              quality={85}
              priority={index < 3}
              loading={index < 3 ? undefined : "lazy"}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Add More CTA */}
      <div className="mt-16 text-center">
        <p className="text-foreground/60 mb-6">Want to see your property or portrait in this collection?</p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Book Your Session
        </Button>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={groupedData[activeGenre].map((item) => ({ src: item.src, alt: item.alt }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </div>
  )
}
