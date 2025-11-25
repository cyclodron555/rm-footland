import type { Metadata } from "next"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { RecentProjects } from "@/components/recent-projects"
import { GalleryGrid } from "@/components/gallery-grid"
import { BookingCTA } from "@/components/booking-cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cyclodron Photography | Real Estate & Landscape in BC",
  description:
    "Premium real estate, landscape, and portrait photography in British Columbia. Cyclodron Photography delivers cinematic, high-resolution images with meticulous attention to detail.",
  keywords: [
    "real estate photography",
    "landscape photography",
    "British Columbia photographer",
    "BC photography",
    "cinematic photography",
    "portrait photography",
  ],
  openGraph: {
    title: "Cyclodron Photography | Real Estate & Landscape in BC",
    description:
      "Premium real estate, landscape, and portrait photography in British Columbia. Cyclodron Photography delivers cinematic, high-resolution images with meticulous attention to detail.",
    url: "https://cyclodron.com",
    siteName: "Cyclodron Photography",
    images: [
      {
        url: "https://cyclodron.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cyclodron Photography Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyclodron Photography | Real Estate & Landscape in BC",
    description:
      "Premium real estate, landscape, and portrait photography in British Columbia. Cyclodron Photography delivers cinematic, high-resolution images with meticulous attention to detail.",
    images: ["https://cyclodron.com/logo.png"],
    creator: "@cyclodron",
  },
  alternates: {
    canonical: "https://cyclodron.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const revalidate = 86400

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlideshow />
      <RecentProjects />
      <GalleryGrid />
      <BookingCTA />
      <Footer />
    </main>
  )
}
