import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BuildingEntry } from "@/components/building-entry"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { earlyGrandForksBuildings } from "../data/early-grand-forks"
import { HeritageChapterDownload } from "@/components/heritage-chapter-download"

export const metadata: Metadata = {
  title: "Early Grand Forks — Grand Forks Heritage Buildings",
  description:
    "The earliest remaining buildings in Grand Forks, BC from the town's founding era. Part of the Cyclodron Heritage Book project.",
}

export default function EarlyGrandForksPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Early Grand Forks</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              A collection of the earliest remaining buildings in Grand Forks, showcasing the architectural styles and
              construction methods from the town's founding era.
            </p>
          </div>
        </section>

        {/* Buildings list */}
        <section className="w-full bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {earlyGrandForksBuildings.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="font-serif text-3xl text-gray-400 mb-4">Coming Soon</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Early buildings and founding-era structures will be added here as they are documented and
                  photographed.
                </p>
              </div>
            ) : (
              <>
                {earlyGrandForksBuildings.map((building) => (
                  <BuildingEntry key={building.id} building={building} />
                ))}
                <HeritageChapterDownload downloadLink="#" chapterName="Early Grand Forks" />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
