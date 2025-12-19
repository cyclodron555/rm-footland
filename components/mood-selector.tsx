"use client"

import { useState, useEffect } from "react"
import { X, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Mood = "calm-flow" | "grounded-earthy" | "moody-cinematic" | "golden-hour" | "cold-silence"

interface MoodConfig {
  id: Mood
  name: string
  emoji: string
  description: string
  // NOTE: Replace these placeholder images with your own cinematic photos
  backgroundImage: string
}

const moods: MoodConfig[] = [
  {
    id: "calm-flow",
    name: "Calm & Flow",
    emoji: "🌊",
    description: "Serene waters and flowing movements",
    backgroundImage: "/calm-flowing-water.jpg", // REPLACE WITH YOUR IMAGE
  },
  {
    id: "grounded-earthy",
    name: "Grounded & Earthy",
    emoji: "🌲",
    description: "Forest textures and natural tones",
    backgroundImage: "/lush-forest.png", // REPLACE WITH YOUR IMAGE
  },
  {
    id: "moody-cinematic",
    name: "Moody & Cinematic",
    emoji: "🌌",
    description: "Dramatic shadows and deep contrast",
    backgroundImage: "/moody-cinematic-landscape.jpg", // REPLACE WITH YOUR IMAGE
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    emoji: "🌄",
    description: "Warm light and golden tones",
    backgroundImage: "/golden-hour-sunset.jpg", // REPLACE WITH YOUR IMAGE
  },
  {
    id: "cold-silence",
    name: "Cold Silence",
    emoji: "❄️",
    description: "Winter stillness and icy calm",
    backgroundImage: "/winter-snowy-landscape.jpg", // REPLACE WITH YOUR IMAGE
  },
]

interface MoodSelectorProps {
  onMoodSelect: (mood: Mood) => void
  onClose: () => void
}

export function MoodSelector({ onMoodSelect, onClose }: MoodSelectorProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Choose Your Mood</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select an experience that resonates with you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => onMoodSelect(mood.id)}
              className="group relative h-64 rounded-lg overflow-hidden transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 space-y-2">
                <span className="text-6xl">{mood.emoji}</span>
                <h3 className="font-serif text-2xl font-bold text-foreground">{mood.name}</h3>
                <p className="text-sm text-muted-foreground px-4 text-center">{mood.description}</p>
              </div>
              <div className="absolute inset-0 bg-muted group-hover:bg-muted/80 transition-colors" />
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="ghost" size="lg" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="mr-2 h-5 w-5" />
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}

export function AmbientToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // NOTE: Replace /audio/placeholder-ambient.mp3 with your own ambient audio file
    const audioElement = new Audio("/audio/placeholder-ambient.mp3")
    audioElement.loop = true
    audioElement.volume = 0.3
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ""
    }
  }, [])

  const toggleAudio = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch((error) => {
        console.log("[v0] Audio playback prevented:", error)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-8 right-8 z-40 bg-muted/80 backdrop-blur-sm hover:bg-muted text-foreground p-4 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
    </button>
  )
}
