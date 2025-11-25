import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import AboutHighlights from "@/components/about-highlights"
import { Testimonials } from "@/components/testimonials"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Cyclodron Photography | Precision & Cinematic Vision",
  description:
    "Learn about Cyclodron Photography, a BC-based photographer focused on real estate, landscape, and portrait work. Discover the passion, craft, and attention to detail behind every image.",
  keywords: [
    "about cyclodron photography",
    "BC photographer",
    "professional photographer",
    "photography services",
    "real estate photographer",
  ],
  openGraph: {
    title: "About Cyclodron Photography | Precision & Cinematic Vision",
    description:
      "Learn about Cyclodron Photography, a BC-based photographer focused on real estate, landscape, and portrait work. Discover the passion, craft, and attention to detail behind every image.",
    url: "https://cyclodron.com/about",
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
    title: "About Cyclodron Photography | Precision & Cinematic Vision",
    description:
      "Learn about Cyclodron Photography, a BC-based photographer focused on real estate, landscape, and portrait work. Discover the passion, craft, and attention to detail behind every image.",
    images: ["https://cyclodron.com/logo.png"],
    creator: "@cyclodron",
  },
  alternates: {
    canonical: "https://cyclodron.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <AboutHero />
        <AboutHighlights />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
