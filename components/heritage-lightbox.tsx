"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { HeritageImage } from "@/app/grand-forks-heritage/data/types"

interface HeritageLightboxProps {
  images: HeritageImage[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  buildingName: string
  downloadLink?: string
}

export function HeritageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  buildingName,
  downloadLink,
}: HeritageLightboxProps) {
  const currentImage = images[currentIndex]

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrevious()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, onNext, onPrevious])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Image container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-12" onClick={onClose}>
        <div className="relative w-full h-full max-w-7xl max-h-[75vh]" onClick={(e) => e.stopPropagation()}>
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.caption || `${buildingName} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="mt-6 max-w-3xl text-center px-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">{currentImage.caption}</p>
          </div>
        )}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 flex-col md:flex-row">
        {/* Image counter */}
        {images.length > 1 && (
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Download CTA */}
        {downloadLink && (
          <Button
            variant="outline"
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent"
            onClick={(e) => {
              e.stopPropagation()
              window.open(downloadLink, "_blank")
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download print-quality photos
          </Button>
        )}
      </div>
    </div>
  )
}
