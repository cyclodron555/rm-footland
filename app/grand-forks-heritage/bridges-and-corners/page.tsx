import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BuildingEntry } from "@/components/building-entry"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { bridgesAndCornersBuildings } from "../data/bridges-and-corners"
import { HeritageChapterDownload } from "@/components/heritage-chapter-download"

export const metadata: Metadata = {
  title: "Bridges & Corners — Grand Forks Heritage Buildings",
  description:
    "The bridges, corners, and edges that define Grand Forks, BC. Part of the Cyclodron Heritage Book project.",
}

export default function BridgesAndCornersPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Back button */}
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-8">
          <Link
            href="/grand-forks-heritage"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Heritage Book
          </Link>
        </div>

        {/* Section header */}
        <section className="w-full bg-white py-12 px-6 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Bridges & Corners</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              The bridges, corners, and edges that define Grand Forks — where infrastructure meets history, and everyday
              structures carry generations of stories.
            </p>
          </div>
        </section>

        {/* Buildings list */}
        <section className="w-full bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {bridgesAndCornersBuildings.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="font-serif text-3xl text-gray-400 mb-4">Coming Soon</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Bridges, corners, and infrastructure details will be added here as they are documented and
                  photographed.
                </p>
              </div>
            ) : (
              <>
                {bridgesAndCornersBuildings.map((building) => (
                  <BuildingEntry key={building.id} building={building} />
                ))}
                <HeritageChapterDownload downloadLink="#" chapterName="Bridges & Corners" />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
