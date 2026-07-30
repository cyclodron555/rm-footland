import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import UpcomingClinics from '@/components/upcoming-clinics'
import TrainingTechnique from '@/components/training-technique'
import PastClinics from '@/components/past-clinics'
import MadridExperience from '@/components/madrid-experience'
import Methodology from '@/components/methodology'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <UpcomingClinics />
      <TrainingTechnique />
      <PastClinics />
      <MadridExperience />
      <Methodology />
      <Footer />
    </main>
  )
}
