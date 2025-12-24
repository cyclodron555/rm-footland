"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LandscapeMasonry } from "@/components/landscape-masonry"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <LandscapeMasonry />
      </div>
      <Footer />
    </main>
  )
}
