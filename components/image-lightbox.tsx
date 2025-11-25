"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string }>
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, onClose, onNext, onPrevious }: ImageLightboxProps) {
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
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-foreground hover:bg-foreground/10"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-foreground hover:bg-foreground/10"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </>
      )}

      {/* Image container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8" onClick={onClose}>
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-foreground text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
