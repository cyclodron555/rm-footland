import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Coastal Villa",
    category: "Real Estate",
    image: "/luxury-coastal-villa-aerial-view-sunset.jpg",
    description: "A stunning beachfront property showcasing modern architecture",
  },
  {
    title: "Mountain Peaks",
    category: "Landscape",
    image: "/dramatic-mountain-peaks-golden-hour-landscape.jpg",
    description: "Capturing the raw beauty of alpine wilderness at dawn",
  },
  {
    title: "Urban Penthouse",
    category: "Real Estate",
    image: "/luxury-penthouse-interior-city-skyline-views.jpg",
    description: "Contemporary design meets city living in this exclusive space",
  },
]

export function FeaturedProjects() {
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href="#" className="group relative overflow-hidden bg-card rounded-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs uppercase tracking-wider mb-2">{project.category}</p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  View Project <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
