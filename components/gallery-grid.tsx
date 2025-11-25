import Image from "next/image"

const landscapeShowcase = [
  {
    image: "/images/img-3751-enhanced1.jpeg",
    alt: "Sunset harbor with fishing boat and purple wildflowers",
    title: "Harbor Sunset",
  },
  {
    image: "/images/dsc4706.jpeg",
    alt: "Northern lights aurora borealis with starry sky",
    title: "Aurora Borealis",
  },
  {
    image: "/images/img-1525-enhanced1.jpg",
    alt: "Blue hour seascape with lighthouse and calm water",
    title: "Blue Hour Serenity",
  },
  {
    image: "/images/dsc4677.jpeg",
    alt: "Dramatic sunset with god rays over mountain landscape",
    title: "Mountain Sunset",
  },
  {
    image: "/images/dsc5210.jpeg",
    alt: "Misty mountain ridges with pine trees in black and white",
    title: "Misty Ridges",
  },
  {
    image: "/images/dsc4433-12x28.jpeg",
    alt: "Forest river scene with mountains and stormy skies",
    title: "River Valley",
  },
  {
    image: "/images/dsc0969.jpeg",
    alt: "Snow-covered logs over water with golden reflections",
    title: "Winter Reflections",
  },
  {
    image: "/images/dsc5609-hdr.jpeg",
    alt: "Frozen lake with ice patterns and atmospheric fog",
    title: "Frozen Lake",
  },
  {
    image: "/images/img-1858-enhanced1.jpeg",
    alt: "Harbor sunset with fishing boats at blue hour",
    title: "Marina Twilight",
  },
]

export function GalleryGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">Portfolio</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Landscape Showcase
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A curated collection of my finest landscape photography, capturing the dramatic beauty of nature across all
            seasons
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {landscapeShowcase.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid mb-6 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                width={1200}
                height={900}
                quality={85}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-foreground font-serif text-2xl px-4 text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
