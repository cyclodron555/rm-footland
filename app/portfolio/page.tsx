import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export const metadata: Metadata = {
  title: "Portfolio | Cyclodron Photography – Real Estate & Landscapes",
  description:
    "Explore the Cyclodron Photography portfolio featuring cinematic real estate, landscape, and portrait images captured across British Columbia and the Pacific Northwest.",
  keywords: [
    "photography portfolio",
    "real estate photos",
    "landscape photos",
    "BC photography portfolio",
    "Pacific Northwest photography",
  ],
  openGraph: {
    title: "Portfolio | Cyclodron Photography – Real Estate & Landscapes",
    description:
      "Explore the Cyclodron Photography portfolio featuring cinematic real estate, landscape, and portrait images captured across British Columbia and the Pacific Northwest.",
    url: "https://cyclodron.com/portfolio",
    siteName: "Cyclodron Photography",
    images: [
      {
        url: "https://cyclodron.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Cyclodron Photography Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Cyclodron Photography – Real Estate & Landscapes",
    description:
      "Explore the Cyclodron Photography portfolio featuring cinematic real estate, landscape, and portrait images captured across British Columbia and the Pacific Northwest.",
    images: ["https://cyclodron.com/logo.png"],
    creator: "@cyclodron",
  },
  alternates: {
    canonical: "https://cyclodron.com/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">Portfolio</h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
              Capturing the essence of British Columbia through landscape, portrait, and real estate photography
            </p>
          </div>
          <PortfolioGallery />
        </div>
      </div>
      <Footer />
    </main>
  )
}
