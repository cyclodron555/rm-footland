'use client'

import { useState } from 'react'

export default function MadridExperience() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, title: 'Podium Glory', description: 'Azerbaijan teams celebrating their achievement', image: '/madrid-exp-1.jpg' },
    { id: 2, title: 'Real Madrid Facilities', description: 'Training at the iconic Ciudad Real Madrid', image: '/madrid-exp-2.jpg' },
    { id: 3, title: 'National Pride', description: 'Representing Azerbaijan on the world stage', image: '/madrid-exp-3.jpg' },
    { id: 4, title: 'Tournament Champions', description: 'Young champions with their hard-earned medals', image: '/madrid-exp-4.jpg' },
    { id: 5, title: 'International Experience', description: 'U12 Azerbaijan team competing globally', image: '/madrid-exp-5.jpg' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="madrid-experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Real Madrid Experience
          </p>
          <h2 className="text-4xl font-black text-foreground">
            Real Madrid Foundation World Challenge
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Slider */}
          <div className="relative">
            <div className="relative bg-secondary rounded-lg overflow-hidden shadow-lg h-96">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <p className="text-lg font-semibold text-white mb-2">{slides[currentSlide].title}</p>
                <p className="text-sm text-white/80">{slides[currentSlide].description}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Previous slide"
            >
              ← 
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-white p-2 rounded-full transition-colors z-10"
              aria-label="Next slide"
            >
              →
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-border w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-foreground">
              Experience the <span className="text-primary">Real Way</span>
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The Real Madrid Foundation Clinics World Challenge is an amazing and exciting tournament that brings over 40 teams and over 450 players U10 to U14 from around the world to demonstrate Real Madrid Foundation methodology.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Players coming from Real Madrid foundation clinics and camps worldwide will be able to live a unique experience of values, football and coexistence in the World Challenge, a tournament held in the Real Madrid training facilities in Madrid, Spain in April.
            </p>
            <div className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <p className="text-foreground">450+ Young Players from Around the World</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <p className="text-foreground">40+ International Teams Competing</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <p className="text-foreground">Real Madrid Training Facilities Experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl font-bold">✓</span>
                  <p className="text-foreground">Building Global Friendships & Values</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
