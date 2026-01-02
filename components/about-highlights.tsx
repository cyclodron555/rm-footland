"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* One-on-One With the Moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">One-on-One With the Moment</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
            <p>
              Much of my work is shaped by time spent alone in nature — standing still while light changes, listening to
              water move through a river, waiting for the world to reveal itself without interference.
            </p>
            <p className="italic text-xl text-foreground">
              Some moments don't ask to be photographed.
              <br />
              They ask to be experienced.
            </p>
            <p>When I do lift the camera, it's never to interrupt what's happening — only to remember it.</p>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

        {/* The Philosophy Behind Cyclodron */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mb-20 space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">The Philosophy Behind Cyclodron</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
            <p>Cyclodron began with a simple idea:</p>
            <p className="font-semibold text-foreground text-2xl">Do what you love, and do it with care.</p>
            <p>
              Precision matters.
              <br />
              Intent matters.
              <br />
              But above all, attention matters.
            </p>
            <p>
              Whether I'm creating landscape photography, quiet ambient films, or working on commissioned projects,
              every frame is approached with the same mindset — respect for the moment and honesty in how it's
              presented.
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-20" />

        {/* Why I Create */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mb-20 space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why I Create</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
            <p>
              Photography is where my mind focuses, my creativity settles, and my sense of calm returns.
              <br />
              It's a place where I feel grounded.
            </p>
            <p>
              Through Cyclodron, I share moments of stillness — not to impress, but to invite others to pause, breathe,
              and reconnect with the quiet places around them.
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground font-semibold">— Cyclodron</p>
          <p className="text-xl text-muted-foreground italic">Where Nature Speaks Softly</p>
        </motion.div>
      </div>
    </section>
  )
}
