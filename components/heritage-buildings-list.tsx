import { HeritageBuildingCard } from "./heritage-building-card"

const heritageBuildings = [
  {
    id: "coming-soon-downtown",
    name: "Coming Soon — Downtown Details",
    location: "",
    yearBuilt: "",
    images: ["/historic-downtown-storefront.jpg"],
    description:
      "We'll be documenting the historic storefronts and architectural details of downtown Grand Forks, capturing the character of the main street and its enduring structures.",
  },
  {
    id: "coming-soon-early",
    name: "Coming Soon — Early Grand Forks",
    location: "",
    yearBuilt: "",
    images: ["/early-1900s-heritage-building.jpg"],
    description:
      "A collection of the earliest remaining buildings in Grand Forks, showcasing the architectural styles and construction methods from the town's founding era.",
  },
  {
    id: "coming-soon-bridges",
    name: "Coming Soon — Bridges & Corners",
    location: "",
    yearBuilt: "",
    images: ["/historic-bridge-corner-detail.jpg"],
    description:
      "The bridges, corners, and edges that define Grand Forks — where infrastructure meets history, and everyday structures carry generations of stories.",
  },
]

export function HeritageBuildingsList() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {heritageBuildings.map((building) => (
          <HeritageBuildingCard key={building.id} building={building} />
        ))}
      </div>
    </section>
  )
}
