import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { pickRandomFromCategory } from "@/app/data/portfolioData"

const categoryLabels = {
  landscape: "Landscape",
  portraits: "Portraits",
  "real-estate": "Real Estate",
  cityscape: "Cityscape",
} as const

export function RecentProjects() {
  const landscapeProject = pickRandomFromCategory("landscape")
  const portraitsProject = pickRandomFromCategory("portraits")
  const realEstateProject = pickRandomFromCategory("real-estate")
  const cityscapeProject = pickRandomFromCategory("cityscape")

  const projects = [realEstateProject, landscapeProject, portraitsProject, cityscapeProject]

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">Featured Work</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A curated selection of my latest work in real estate and landscape photography, showcasing diverse
            environments and architectural styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} href="/portfolio" className="group relative overflow-hidden bg-card rounded-sm">
              <div className="aspect-[4/5] overflow-hidden relative">
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs uppercase tracking-wider mb-2">{categoryLabels[project.category]}</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View Gallery <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
