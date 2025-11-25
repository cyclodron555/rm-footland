"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 py-24 lg:py-32 pt-32 lg:pt-40">
        <div className="relative">
          {/* Large portrait image - now takes up more space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full max-w-3xl mx-auto lg:mx-0 lg:w-[55%]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg" />
            <Image
              src="/images/_DSC0677-2.jpg"
              alt="Cyclodron Photography Portrait"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          {/* Overlapping content card on desktop, below on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] mt-8 lg:mt-0"
          >
            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-8 lg:p-10 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium tracking-widest text-primary uppercase">About Me</p>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                    Cyclodron Photography
                  </h1>
                  <p className="text-xl text-muted-foreground font-light italic">
                    Capturing the Soul of British Columbia
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-border to-transparent" />

                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    I believe great photography is not just about images — it's about attention to detail, connection,
                    and emotional truth.
                  </p>

                  <p>
                    Cyclodron Photography began with a simple idea:
                    <span className="block mt-1 font-medium text-foreground">
                      "Do what you love, and do it with absolute precision."
                    </span>
                  </p>

                  <p>
                    Photography is where my mind focuses, my creativity comes alive, and my soul feels at home. Whether
                    I'm shooting a quiet moment in the mountains, a family portrait, or the elegance of luxury real
                    estate, I approach every frame with care, intention, and professionalism.
                  </p>

                  <p className="text-foreground font-medium pt-2">My work is built on three foundations:</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
