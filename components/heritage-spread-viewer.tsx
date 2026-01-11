"use client"

import { useState, useEffect } from "react"

export function HeritageSpreadViewer(props: any) {
  const spreads = props?.spreads || []
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (spreads.length === 0) return

    const indices = [currentIndex - 1, currentIndex, currentIndex + 1, currentIndex + 2]
    indices.forEach((i) => {
      if (i >= 0 && i < spreads.length && spreads[i] && spreads[i].src) {
        const img = new Image()
        img.src = spreads[i].src
      }
    })
  }, [currentIndex, spreads])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentIndex > 0) setCurrentIndex(currentIndex - 1)
      if (e.key === "ArrowRight" && currentIndex < spreads.length - 1) setCurrentIndex(currentIndex + 1)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currentIndex, spreads.length])

  if (spreads.length === 0) {
    return (
      <section className="w-full bg-gray-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">No spreads available yet.</p>
        </div>
      </section>
    )
  }

  const current = spreads[currentIndex]

  return (
    <section className="w-full bg-gray-200 py-8 md:py-12 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative w-full bg-white shadow-2xl" style={{ aspectRatio: "16/9" }}>
          <img
            key={currentIndex}
            src={current?.src || "/placeholder.svg"}
            alt={current?.alt || "Heritage book spread"}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        <div className="flex items-center justify-between mt-6 px-2">
          <button
            onClick={() => setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === spreads.length - 1}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
