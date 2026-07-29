'use client'

export default function UpcomingClinics() {
  const upcomingClinic = {
    name: 'Summer Clinic 2026',
    date: 'August 10-14, 2026',
    location: 'Baku Sports Academy',
    ageGroups: '5-17 years',
    description: 'Full-day training experience with Real Madrid coaches'
  }

  return (
    <section id="upcoming" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Next Year
          </p>
          <h2 className="text-4xl font-black text-foreground">
            Upcoming Clinic
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-xl p-12 text-white shadow-lg">
            <div className="text-center">
              <p className="text-primary/20 font-bold text-sm tracking-widest uppercase mb-4">
                Save the Date
              </p>
              <h3 className="text-4xl font-black mb-3">
                {upcomingClinic.name}
              </h3>
              <p className="text-3xl font-bold text-primary mb-8">
                {upcomingClinic.date}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8 pt-8 border-t border-white/20">
                <div>
                  <p className="text-white/70 text-sm mb-2">Location</p>
                  <p className="text-xl font-semibold">{upcomingClinic.location}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-2">Age Groups</p>
                  <p className="text-xl font-semibold">{upcomingClinic.ageGroups}</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
                <p className="text-white text-lg leading-relaxed">
                  {upcomingClinic.description}
                </p>
              </div>

              <p className="text-white/80 text-sm">
                More details coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
