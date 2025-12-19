"use client"

import type React from "react"

import { useEffect } from "react"
import { useMood } from "@/hooks/use-mood"
import type { Mood } from "@/components/mood-selector"

// Mood theme configurations
const moodThemes: Record<Mood, Record<string, string>> = {
  "calm-flow": {
    "--mood-primary": "oklch(0.6 0.15 220)", // Calm blue
    "--mood-accent": "oklch(0.65 0.12 200)", // Soft aqua
    "--mood-muted": "oklch(0.3 0.05 220)",
  },
  "grounded-earthy": {
    "--mood-primary": "oklch(0.55 0.08 120)", // Forest green
    "--mood-accent": "oklch(0.5 0.1 80)", // Earthy brown
    "--mood-muted": "oklch(0.3 0.04 100)",
  },
  "moody-cinematic": {
    "--mood-primary": "oklch(0.45 0.08 280)", // Deep purple
    "--mood-accent": "oklch(0.4 0.12 320)", // Dark magenta
    "--mood-muted": "oklch(0.25 0.05 280)",
  },
  "golden-hour": {
    "--mood-primary": "oklch(0.7 0.12 60)", // Warm gold
    "--mood-accent": "oklch(0.65 0.15 40)", // Sunset orange
    "--mood-muted": "oklch(0.35 0.06 50)",
  },
  "cold-silence": {
    "--mood-primary": "oklch(0.75 0.05 250)", // Icy blue
    "--mood-accent": "oklch(0.8 0.03 260)", // Frost white-blue
    "--mood-muted": "oklch(0.35 0.03 240)",
  },
}

export function MoodProvider({ children }: { children: React.ReactNode }) {
  const currentMood = useMood((state) => state.currentMood)

  useEffect(() => {
    if (currentMood && moodThemes[currentMood]) {
      const theme = moodThemes[currentMood]
      const root = document.documentElement

      Object.entries(theme).forEach(([property, value]) => {
        root.style.setProperty(property, value)
      })
    }
  }, [currentMood])

  return <>{children}</>
}
