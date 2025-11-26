"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Heart,
    number: "01",
    title: "Passion",
    description:
      "Every project is personal to me. I shoot with purpose — not just documenting, but creating art with meaning.",
  },
  {
    icon: Users,
    number: "02",
    title: "Connection",
    description:
      "Before the camera ever comes out, I focus on understanding the person, family, or business behind the story. Great images come from trust.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Precision",
    description: "Lighting, composition, editing — every detail matters. And I never stop improving my craft.",
  },
]

export default function AboutHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-sm font-bold tracking-widest text-primary uppercase">Core Values</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            My work is built on three foundations
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2 + 0.2,
                }}
                className="group relative"
              >
                <div className="relative h-full rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                  {/* Icon and number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-serif text-5xl text-muted-foreground/30 font-light">{highlight.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl md:text-4xl mb-4 text-foreground font-bold">{highlight.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">{highlight.description}</p>

                  {/* Decorative accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 group-hover:w-full rounded-b-lg" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.8,
          }}
          className="mt-24 relative"
        >
          {/* Background card with subtle gradient */}
          <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

            {/* Content */}
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center max-w-4xl mx-auto space-y-8">
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium">
                For me, photography isn't a job — it's a calling.
              </p>

              <div className="space-y-4">
                <p className="font-serif text-3xl md:text-4xl text-foreground/90 font-semibold">
                  And my goal is simple:
                </p>
                <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary font-bold leading-tight">
                  Create images that last forever.
                </p>
              </div>

              <div className="pt-6">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
                <p className="text-xl md:text-2xl text-muted-foreground italic font-medium">
                  Let's create something unforgettable together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
