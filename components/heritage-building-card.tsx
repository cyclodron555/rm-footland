import Image from "next/image"

interface HeritageBuildingProps {
  building: {
    name: string
    location?: string
    yearBuilt?: string
    images: string[]
    description: string
  }
}

export function HeritageBuildingCard({ building }: HeritageBuildingProps) {
  return (
    <article className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200">
      <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
        {/* Image gallery */}
        <div className="space-y-4">
          {building.images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${building.name} - Image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        {/* Building info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">{building.name}</h2>
            {building.location && <p className="text-gray-600 text-sm">{building.location}</p>}
            {building.yearBuilt && <p className="text-gray-500 text-sm italic">Built {building.yearBuilt}</p>}
          </div>

          <p className="text-gray-700 leading-relaxed">{building.description}</p>
        </div>
      </div>
    </article>
  )
}
