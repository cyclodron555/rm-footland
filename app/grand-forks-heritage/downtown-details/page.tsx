import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BuildingEntry } from "@/components/building-entry"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { downtownBuildings } from "../data/downtown-details"
import { HeritageChapterDownload } from "@/components/heritage-chapter-download"

export const metadata: Metadata = {
  title: "Downtown Details — Grand Forks Heritage Buildings",
  description:
    "Historic storefronts and architectural details of downtown Grand Forks, BC. Part of the Cyclodron Heritage Book project.",
}

export default function DowntownDetailsPage() {
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
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Downtown Details</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              Historic storefronts and architectural details of downtown Grand Forks, capturing the character of the
              main street and its enduring structures.
            </p>
          </div>
        </section>

        {/* Buildings list */}
        <section className="w-full bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            {downtownBuildings.length === 0 ? (
              <div className="text-center py-20">
                <h2 className="font-serif text-3xl text-gray-400 mb-4">Coming Soon</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                  Buildings and details from downtown Grand Forks will be added here as they are documented and
                  photographed.
                </p>
              </div>
            ) : (
              <>
                {downtownBuildings.map((building) => (
                  <BuildingEntry key={building.id} building={building} />
                ))}
                <HeritageChapterDownload downloadLink="#" chapterName="Downtown Details" />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
