"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LandscapeMasonry } from "@/components/landscape-masonry"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Landscape photographer & ambient filmmaker.
          </h1>
          <p className="text-xl md:text-2xl text-white italic font-light">Quiet places, captured slowly.</p>
        </div>
        <LandscapeMasonry />
      </div>
      <Footer />
    </main>
  )
}
