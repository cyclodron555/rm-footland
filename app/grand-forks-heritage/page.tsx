import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeritageHero } from "@/components/heritage-hero"
import { HeritageIntro } from "@/components/heritage-intro"
import { HeritageSupport } from "@/components/heritage-support"
import { HeritageSpreadViewer } from "@/components/heritage-spread-viewer"
import { heritageSpreads } from "./data/spreads"

export const metadata: Metadata = {
  title: "Grand Forks Heritage Buildings — Cyclodron",
  description:
    "A living digital photo book documenting heritage buildings and details in Grand Forks, BC. Free to explore. Print-quality downloads available.",
  keywords: [
    "grand forks heritage",
    "grand forks buildings",
    "grand forks history",
    "british columbia heritage",
    "grand forks photography",
    "cyclodron",
  ],
  openGraph: {
    title: "Grand Forks Heritage Buildings — Cyclodron",
    description:
      "A living digital photo book documenting heritage buildings and details in Grand Forks, BC. Free to explore. Print-quality downloads available.",
    url: "https://cyclodron.com/grand-forks-heritage",
    siteName: "Cyclodron",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GrandForksHeritagePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <HeritageHero />
        <HeritageIntro />
        <HeritageSpreadViewer spreads={heritageSpreads} />
        <HeritageSupport />
      </main>
      <Footer />
    </>
  )
}
