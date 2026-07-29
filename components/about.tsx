'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              About Our Clinics
            </p>
            <h2 className="text-4xl font-black text-foreground mb-6">
              Experience the <span className="text-primary">Real Way</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Real Madrid Foundation is the instrument through which Real Madrid effectively establishes its presence in society and develops its humanitarian and social projects.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Each full day clinic experience provides participants with the unique opportunity to &apos;Play The Real Way&apos; experiencing the Real Madrid Foundation Methodology. Led by experienced coaches from the Real Madrid Foundation, our clinics combine team training with the core values of the Foundation: leadership, teamwork, effort, solidarity, cooperation, and respect.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Participants ages <span className="font-bold">5 to 17 years old</span> are eager to experience a great adventure while passionately enjoying their favorite sport.
            </p>
          </div>

          {/* Right: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <img
              src="/experience-real-way.jpg"
              alt="Coach mentoring young players learning football"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
