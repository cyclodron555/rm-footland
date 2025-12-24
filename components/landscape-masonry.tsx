"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { portfolioData } from "@/app/data/portfolioData"

export function LandscapeMasonry() {
  const allPhotos = portfolioData.filter((item) => item.category === "landscape" || item.category === "cityscape")

  const [visibleImages, setVisibleImages] = useState<typeof allPhotos>([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  const BATCH_SIZE = 12

  // Initial load
  useEffect(() => {
    setVisibleImages(allPhotos.slice(0, BATCH_SIZE))
  }, [])

  // Load more images
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return

    setIsLoading(true)

    // Simulate slight delay for smooth UX
    setTimeout(() => {
      const currentLength = visibleImages.length
      const nextBatch = allPhotos.slice(currentLength, currentLength + BATCH_SIZE)

      if (nextBatch.length === 0) {
        setHasMore(false)
      } else {
        setVisibleImages((prev) => [...prev, ...nextBatch])
      }

      setIsLoading(false)
    }, 300)
  }, [visibleImages.length, hasMore, isLoading, allPhotos])

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore()
        }
      },
      { threshold: 0.1 },
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [loadMore, hasMore, isLoading])

  return (
    <div className="w-full">
      <div
        className="columns-1 sm:columns-2 lg:columns-3"
        style={{
          columnGap: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        {visibleImages.map((photo, index) => (
          <div
            key={photo.id}
            className="break-inside-avoid"
            style={{
              marginBottom: "16px",
              animationDelay: `${(index % BATCH_SIZE) * 30}ms`,
            }}
          >
            <div className="relative group overflow-hidden bg-black/20">
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={1200}
                height={800}
                quality={90}
                loading={index < BATCH_SIZE ? "eager" : "lazy"}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-white font-serif text-xl sm:text-2xl mb-2">{photo.title}</p>
                  <p className="text-white/80 text-sm">{photo.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div ref={observerTarget} className="w-full py-12 flex justify-center">
        {isLoading && <div className="text-muted-foreground text-sm">Loading more...</div>}
        {!hasMore && visibleImages.length > 0 && <div className="text-muted-foreground text-sm">All images loaded</div>}
      </div>
    </div>
  )
}
