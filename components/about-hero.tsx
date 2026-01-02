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
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/20 to-black/30 rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] mt-8 lg:mt-0 z-20"
          >
            <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg p-8 lg:p-10 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-base font-bold tracking-widest text-primary uppercase">About</p>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-tight font-bold">
                    I didn't come to photography to collect images.
                  </h1>
                  <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                    I came to it to learn how to pay attention.
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-border to-transparent" />

                <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
                  <p>
                    Somewhere along the way, I realized that the most meaningful moments aren't loud or dramatic —
                    they're quiet, fleeting, and easy to miss if you're rushing. Photography became my way of slowing
                    down enough to notice them.
                  </p>

                  <p className="font-semibold text-foreground text-xl">
                    For me, great photography isn't just about how something looks.
                    <br />
                    It's about presence, connection, and emotional truth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
