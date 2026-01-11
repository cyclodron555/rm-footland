"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { Spread } from "@/app/grand-forks-heritage/data/spreads"

interface HeritageSpreadViewerProps {
  spreads: Spread[]
}

export function HeritageSpreadViewer({ spreads }: HeritageSpreadViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))
  const preloadCacheRef = useRef<Map<number, HTMLImageElement>>(new Map())

  useEffect(() => {
    const preloadSpread = (index: number) => {
      if (index < 0 || index >= spreads.length) return
      if (preloadCacheRef.current.has(index)) return

      const img = document.createElement("img")
      img.decoding = "async"
      img.src = spreads[index].src
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(index))
      }
      preloadCacheRef.current.set(index, img)
    }

    // Preload current, next 3, and previous 1
    preloadSpread(currentIndex)
    preloadSpread(currentIndex + 1)
    preloadSpread(currentIndex + 2)
    preloadSpread(currentIndex + 3)
    preloadSpread(currentIndex - 1)

    // Cleanup old preloads to prevent memory issues
    const indicesToKeep = new Set([
      currentIndex - 1,
      currentIndex,
      currentIndex + 1,
      currentIndex + 2,
      currentIndex + 3,
    ])

    preloadCacheRef.current.forEach((_, index) => {
      if (!indicesToKeep.has(index)) {
        preloadCacheRef.current.delete(index)
      }
    })
  }, [currentIndex, spreads])

  const goToPrevious = () => {
    if (isTransitioning || currentIndex === 0) return
    if (!loadedImages.has(currentIndex - 1)) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToNext = () => {
    if (isTransitioning || currentIndex === spreads.length - 1) return
    if (!loadedImages.has(currentIndex + 1)) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex, isTransitioning])

  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (touchStartX - touchEndX > 50) {
        goToNext()
      }
      if (touchEndX - touchStartX > 50) {
        goToPrevious()
      }
    }

    window.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [currentIndex, isTransitioning])

  if (spreads.length === 0) {
    return (
      <section className="w-full bg-gray-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">No spreads available yet.</p>
        </div>
      </section>
    )
  }

  const currentSpread = spreads[currentIndex]

  return (
    <section className="w-full bg-gray-200 py-8 md:py-12 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative w-full bg-white shadow-2xl" style={{ aspectRatio: "16/9" }}>
          <div
            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
            style={{ opacity: isTransitioning ? 0 : 1 }}
          >
            <Image
              src={currentSpread.src || "/placeholder.svg"}
              alt={currentSpread.alt || `Heritage book spread ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1600px) 90vw, 1600px"
              className="object-contain"
              priority={currentIndex <= 1}
              quality={90}
            />
          </div>

          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 top-0 bottom-0 w-1/4 cursor-pointer disabled:cursor-not-allowed z-10"
            aria-label="Previous spread"
            style={{ background: "transparent" }}
          />
          <button
            onClick={goToNext}
            disabled={currentIndex === spreads.length - 1}
            className="absolute right-0 top-0 bottom-0 w-1/4 cursor-pointer disabled:cursor-not-allowed z-10"
            aria-label="Next spread"
            style={{ background: "transparent" }}
          />
        </div>

        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous spread"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span className="hidden sm:inline text-sm">Previous</span>
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              {currentIndex === 0 ? "Cover" : `Spread ${currentIndex}`} of {spreads.length - 1}
            </p>
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === spreads.length - 1}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next spread"
          >
            <span className="hidden sm:inline text-sm">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
