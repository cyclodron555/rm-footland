"use client"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { RecentProjects } from "@/components/recent-projects"
import { GalleryGrid } from "@/components/gallery-grid"
import { BookingCTA } from "@/components/booking-cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
// import { MoodSelector, AmbientToggle } from "@/components/mood-selector"
// import { useMood } from "@/hooks/use-mood"
// import type { Mood } from "@/components/mood-selector"

export default function Home() {
  // const { currentMood, setMood } = useMood()
  // const [showMoodSelector, setShowMoodSelector] = useState(false)

  // useEffect(() => {
  //   if (currentMood === null) {
  //     // First time visitor - show mood selector after brief delay
  //     const timer = setTimeout(() => {
  //       setShowMoodSelector(true)
  //     }, 1000)
  //     return () => clearTimeout(timer)
  //   }
  // }, [currentMood])

  // const handleMoodSelect = (mood: Mood) => {
  //   setMood(mood)
  //   setShowMoodSelector(false)
  // }

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlideshow />
      <RecentProjects />
      <GalleryGrid />
      <BookingCTA />
      <Footer />

      {/* {showMoodSelector && <MoodSelector onMoodSelect={handleMoodSelect} onClose={() => setShowMoodSelector(false)} />} */}
      {/* {currentMood && <AmbientToggle />} */}
    </main>
  )
}
