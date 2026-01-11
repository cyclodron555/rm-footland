"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { AlbumPage } from "@/app/grand-forks-heritage/data/album"

interface HeritageAlbumProps {
  pages: AlbumPage[]
}

export function HeritageAlbum({ pages }: HeritageAlbumProps) {
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalPages = pages.length
  const totalSpreads = Math.ceil(totalPages / 2)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSpreadIndex((prev) => (prev === 0 ? totalSpreads - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 400)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSpreadIndex((prev) => (prev === totalSpreads - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 400)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isTransitioning])

  if (pages.length === 0) {
    return (
      <section className="w-full bg-gray-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">No photos available yet.</p>
        </div>
      </section>
    )
  }

  const leftPageIndex = currentSpreadIndex * 2
  const rightPageIndex = leftPageIndex + 1
  const leftPage = pages[leftPageIndex]
  const rightPage = rightPageIndex < totalPages ? pages[rightPageIndex] : null

  const renderPage = (pageData: AlbumPage, pageNumber: number, side: "left" | "right") => {
    const isSingleImage = pageData.images.length === 1

    return (
      <div className="relative flex-1 bg-white h-full flex flex-col">
        {/* Page content with margins */}
        <div className="flex-1 px-8 md:px-12 py-12 md:py-16">
          {isSingleImage ? (
            <div className="relative w-full h-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <Image
                src={pageData.images[0].src || "/placeholder.svg"}
                alt={`Heritage photo - page ${pageNumber}`}
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-contain"
                priority={currentSpreadIndex === 0}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-6 h-full">
              <div className="relative flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Image
                  src={pageData.images[0].src || "/placeholder.svg"}
                  alt={`Heritage photo - page ${pageNumber}, image 1`}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-contain"
                  priority={currentSpreadIndex === 0}
                />
              </div>
              <div className="relative flex-1 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Image
                  src={pageData.images[1].src || "/placeholder.svg"}
                  alt={`Heritage photo - page ${pageNumber}, image 2`}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-contain"
                  priority={currentSpreadIndex === 0}
                />
              </div>
            </div>
          )}
        </div>

        {/* Page number at bottom */}
        <div className="pb-6 text-center">
          <span className="text-sm text-gray-500 font-serif">{pageNumber}</span>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full bg-gray-100 py-12 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`relative w-full bg-white shadow-2xl transition-opacity duration-400 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{ minHeight: "700px" }}
        >
          {/* Mobile: single page view */}
          <div className="md:hidden">{renderPage(leftPage, leftPageIndex + 1, "left")}</div>

          {/* Desktop: two-page spread */}
          <div className="hidden md:flex relative">
            {/* Left page */}
            {renderPage(leftPage, leftPageIndex + 1, "left")}

            {/* Center binding/gutter shadow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent shadow-[inset_0_0_12px_rgba(0,0,0,0.15)]" />
            </div>

            {/* Right page or blank */}
            {rightPage ? renderPage(rightPage, rightPageIndex + 1, "right") : <div className="flex-1 bg-white" />}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              Pages {leftPageIndex + 1}
              {rightPage ? `–${rightPageIndex + 1}` : ""} of {totalPages}
            </p>
          </div>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next spread"
          >
            <span className="hidden sm:inline">Next</span>
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
