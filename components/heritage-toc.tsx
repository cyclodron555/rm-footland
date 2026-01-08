import { HeritageSectionCard } from "./heritage-section-card"

const heritageSections = [
  {
    id: "downtown-details",
    title: "Downtown Details",
    description:
      "Historic storefronts and architectural details of downtown Grand Forks, capturing the character of the main street and its enduring structures.",
    imageUrl: "/historic-downtown-storefront.jpeg",
    href: "/grand-forks-heritage/downtown-details",
  },
  {
    id: "early-grand-forks",
    title: "Early Grand Forks",
    description:
      "The earliest remaining buildings in Grand Forks, showcasing the architectural styles and construction methods from the town's founding era.",
    imageUrl: "/early-1900s-heritage-building.jpeg",
    href: "/grand-forks-heritage/early-grand-forks",
  },
  {
    id: "bridges-and-corners",
    title: "Bridges & Corners",
    description:
      "The bridges, corners, and edges that define Grand Forks — where infrastructure meets history, and everyday structures carry generations of stories.",
    imageUrl: "/historic-bridge-corner-detail.jpeg",
    href: "/grand-forks-heritage/bridges-and-corners",
  },
]

export function HeritageTableOfContents() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Explore the Sections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each section documents a different aspect of Grand Forks heritage. Click to explore the buildings and
            details within.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heritageSections.map((section) => (
            <HeritageSectionCard key={section.id} {...section} />
          ))}
        </div>
      </div>
    </section>
  )
}
