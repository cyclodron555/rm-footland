"use client"

import { useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BuildingEntryData, HeritageImage } from "@/app/grand-forks-heritage/data/types"
import { HeritageLightbox } from "./heritage-lightbox"

interface BuildingEntryProps {
  building: BuildingEntryData
}

// Helper to normalize images to HeritageImage format
function normalizeImages(images: (string | HeritageImage)[]): HeritageImage[] {
  return images.map((img) => (typeof img === "string" ? { src: img } : img))
}

export function BuildingEntry({ building }: BuildingEntryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const normalizedImages = normalizeImages(building.images)

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % normalizedImages.length)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length)
  }

  return (
    <>
      <article className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-0">
          {/* Building info - Left side */}
          <div className="p-8 lg:p-12 space-y-6 bg-gray-50/50">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">{building.name}</h2>
              {building.location && <p className="text-gray-600 text-sm mb-1">{building.location}</p>}
              {building.yearBuilt && <p className="text-gray-500 text-sm italic">Built {building.yearBuilt}</p>}
            </div>

            <p className="text-gray-700 leading-relaxed">{building.description}</p>

            {/* Download CTA */}
            {building.downloadLink && (
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-accent-foreground border-accent hover:bg-accent/10 bg-transparent"
                  onClick={() => window.open(building.downloadLink, "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download print-quality photos
                </Button>
              </div>
            )}
          </div>

          {/* Image masonry gallery - Right side */}
          <div className="p-4 bg-gray-50">
            <div
              className="columns-1 md:columns-2 gap-4 space-y-4"
              style={{
                columnFill: "balance",
              }}
            >
              {normalizedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative break-inside-avoid cursor-pointer group overflow-hidden rounded-sm"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative aspect-auto w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption || `${building.name} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Lightbox */}
      {lightboxOpen && (
        <HeritageLightbox
          images={normalizedImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          buildingName={building.name}
          downloadLink={building.downloadLink}
        />
      )}
    </>
  )
}
