"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { portfolioData, type PortfolioItem } from "@/app/data/portfolioData"
import { ImageLightbox } from "@/components/image-lightbox"

interface PhotoWithOrientation extends PortfolioItem {
  detectedOrientation: "landscape" | "portrait"
  aspectRatio: number
}

// Detect orientation from actual image dimensions
function detectOrientationSync(src: string): Promise<{ orientation: "landscape" | "portrait"; aspectRatio: number }> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.onload = () => {
      const aspectRatio = img.width / img.height
      const orientation = img.height > img.width ? "portrait" : "landscape"
      resolve({ orientation, aspectRatio })
    }
    img.onerror = () => {
      resolve({ orientation: "landscape", aspectRatio: 1.5 })
    }
    img.src = src
  })
}

// Balance photos to prevent same-orientation clusters (max 2 in a row)
function balanceOrientations(photos: PhotoWithOrientation[]): PhotoWithOrientation[] {
  const landscapes = photos.filter((p) => p.detectedOrientation === "landscape")
  const portraits = photos.filter((p) => p.detectedOrientation === "portrait")

  // Shuffle each pool
  landscapes.sort(() => Math.random() - 0.5)
  portraits.sort(() => Math.random() - 0.5)

  const result: PhotoWithOrientation[] = []
  let consecutiveLandscape = 0
  let consecutivePortrait = 0
  let landscapeIndex = 0
  let portraitIndex = 0

  // Target ratio: 60% landscape, 40% portrait
  const targetLandscapeRatio = 0.6

  while (landscapeIndex < landscapes.length || portraitIndex < portraits.length) {
    const hasLandscape = landscapeIndex < landscapes.length
    const hasPortrait = portraitIndex < portraits.length

    let needLandscape = false
    let needPortrait = false

    // If we have 2 consecutive of one type, we MUST switch
    if (consecutiveLandscape >= 2 && hasPortrait) {
      needPortrait = true
    } else if (consecutivePortrait >= 2 && hasLandscape) {
      needLandscape = true
    } else {
      const currentLandscapeRatio = result.length > 0
        ? result.filter((p) => p.detectedOrientation === "landscape").length / result.length
        : 0.5

      if (currentLandscapeRatio < targetLandscapeRatio && hasLandscape) {
        needLandscape = true
      } else if (hasPortrait) {
        needPortrait = true
      } else if (hasLandscape) {
        needLandscape = true
      }
    }

    if (needPortrait && hasPortrait) {
      result.push(portraits[portraitIndex])
      portraitIndex++
      consecutivePortrait++
      consecutiveLandscape = 0
    } else if (needLandscape && hasLandscape) {
      result.push(landscapes[landscapeIndex])
      landscapeIndex++
      consecutiveLandscape++
      consecutivePortrait = 0
    } else if (hasLandscape) {
      result.push(landscapes[landscapeIndex])
      landscapeIndex++
      consecutiveLandscape++
      consecutivePortrait = 0
    } else if (hasPortrait) {
      result.push(portraits[portraitIndex])
      portraitIndex++
      consecutivePortrait++
      consecutiveLandscape = 0
    }
  }

  return result
}

export function LandscapeMasonry() {
  const allPhotos = portfolioData.filter((item) => item.category === "landscape" || item.category === "cityscape")

  const [balancedPhotos, setBalancedPhotos] = useState<PhotoWithOrientation[]>([])
  const [visibleImages, setVisibleImages] = useState<PhotoWithOrientation[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const observerTarget = useRef<HTMLDivElement>(null)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const scrollPositionRef = useRef(0)

  const BATCH_SIZE = 12

  // Detect orientations and balance on mount
  useEffect(() => {
    async function initializePhotos() {
      const photosWithOrientation = await Promise.all(
        allPhotos.map(async (photo) => {
          const { orientation, aspectRatio } = await detectOrientationSync(photo.src)
          return {
            ...photo,
            detectedOrientation: orientation,
            aspectRatio,
          }
        })
      )

      const balanced = balanceOrientations(photosWithOrientation)
      setBalancedPhotos(balanced)
      setVisibleImages(balanced.slice(0, BATCH_SIZE))
      setIsInitializing(false)
    }

    initializePhotos()
  }, [])

  // Load more images
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore || isInitializing) return

    setIsLoading(true)

    setTimeout(() => {
      const currentLength = visibleImages.length
      const nextBatch = balancedPhotos.slice(currentLength, currentLength + BATCH_SIZE)

      if (nextBatch.length === 0) {
        setHasMore(false)
      } else {
        setVisibleImages((prev) => [...prev, ...nextBatch])
      }

      setIsLoading(false)
    }, 300)
  }, [visibleImages.length, hasMore, isLoading, balancedPhotos, isInitializing])

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading && !isInitializing) {
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
  }, [loadMore, hasMore, isLoading, isInitializing])

  const handleImageClick = (index: number) => {
    scrollPositionRef.current = window.scrollY
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleCloseLightbox = () => {
    setLightboxOpen(false)
    setTimeout(() => {
      window.scrollTo(0, scrollPositionRef.current)
    }, 0)
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % visibleImages.length)
  }

  const handlePrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + visibleImages.length) % visibleImages.length)
  }

  if (isInitializing) {
    return (
      <div className="w-full py-20 flex justify-center">
        <div className="text-muted-foreground text-sm">Loading gallery...</div>
      </div>
    )
  }

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
            <div
              className="relative group overflow-hidden cursor-pointer"
              style={{
                // Reserve space based on detected aspect ratio to prevent reflow
                aspectRatio: photo.aspectRatio,
                backgroundColor: "rgba(0,0,0,0.2)",
              }}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                quality={90}
                loading={index < BATCH_SIZE ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AN0stws0e0W+PIuEJp9mIw26hb6AVJCAA4SfYP5SlKqTkAdTuf/Z"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {lightboxOpen && (
        <ImageLightbox
          images={visibleImages.map((photo) => ({ src: photo.src || "/placeholder.svg", alt: photo.alt }))}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  )
}
