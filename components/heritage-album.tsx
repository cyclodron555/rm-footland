"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { AlbumPage } from "@/app/grand-forks-heritage/data/album"

interface HeritageAlbumProps {
  pages: AlbumPage[]
}

export function HeritageAlbum({ pages }: HeritageAlbumProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalPages = pages.length

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Keyboard navigation
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

  const currentPageData = pages[currentPage]
  const isSingleImage = currentPageData.images.length === 1

  return (
    <section className="w-full bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full min-h-[600px] md:min-h-[700px] bg-white shadow-2xl rounded-sm">
          {/* Horizontal and vertical margins for book-like feel */}
          <div
            className={`px-8 md:px-16 lg:px-24 py-12 md:py-16 h-full transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {isSingleImage ? (
              // Single image layout
              <div className="relative w-full h-full min-h-[550px] md:min-h-[650px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <Image
                  src={currentPageData.images[0].src || "/placeholder.svg"}
                  alt={`Heritage photo - page ${currentPage + 1}`}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-contain"
                  priority={currentPage === 0}
                />
              </div>
            ) : (
              // Two vertical images stacked
              <div className="flex flex-col gap-8 h-full">
                <div className="relative flex-1 min-h-[250px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <Image
                    src={currentPageData.images[0].src || "/placeholder.svg"}
                    alt={`Heritage photo - page ${currentPage + 1}, image 1`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                    priority={currentPage === 0}
                  />
                </div>
                <div className="relative flex-1 min-h-[250px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <Image
                    src={currentPageData.images[1].src || "/placeholder.svg"}
                    alt={`Heritage photo - page ${currentPage + 1}, image 2`}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-8 px-4">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
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
              Page {currentPage + 1} of {totalPages}
            </p>
          </div>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
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

        {/* Page Dots Indicator (optional, for visual feedback) */}
        <div className="flex justify-center gap-2 mt-6">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentPage(index)
                  setTimeout(() => setIsTransitioning(false), 300)
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPage ? "bg-gray-900 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
