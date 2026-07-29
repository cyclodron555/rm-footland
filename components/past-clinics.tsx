'use client'

export default function PastClinics() {
  const pastClinics = [
    {
      id: 1,
      clinic: 'Spring Clinic 2026',
      date: 'April 20-24, 2026',
      location: 'Baku Sports Academy',
      participants: 128,
      ageRange: '5-17 years',
      coaches: 8,
      status: 'Completed'
    },
    {
      id: 2,
      clinic: 'Winter Clinic 2025',
      date: 'December 27-31, 2025',
      location: 'Ganja Football Complex',
      participants: 95,
      ageRange: '6-15 years',
      coaches: 6,
      status: 'Completed'
    },
    {
      id: 3,
      clinic: 'Fall Clinic 2025',
      date: 'October 6-10, 2025',
      location: 'Baku Sports Academy',
      participants: 112,
      ageRange: '5-17 years',
      coaches: 7,
      status: 'Completed'
    },
    {
      id: 4,
      clinic: 'Summer Clinic 2025',
      date: 'August 11-15, 2025',
      location: 'Baku Sports Academy',
      participants: 156,
      ageRange: '5-17 years',
      coaches: 10,
      status: 'Completed'
    },
  ]

  return (
    <section id="history" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Our History
          </p>
          <h2 className="text-4xl font-black text-foreground">
            Past Clinics
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            See the success of our previous clinics and the impact we&apos;ve made in Azerbaijan
          </p>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg border border-border">
          <table className="w-full">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Clinic</th>
                <th className="px-6 py-4 text-left font-bold">Date</th>
                <th className="px-6 py-4 text-left font-bold">Location</th>
                <th className="px-6 py-4 text-center font-bold">Participants</th>
                <th className="px-6 py-4 text-center font-bold">Age Range</th>
                <th className="px-6 py-4 text-center font-bold">Coaches</th>
                <th className="px-6 py-4 text-center font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {pastClinics.map((clinic, index) => (
                <tr
                  key={clinic.id}
                  className={`border-b border-border transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-muted'
                  } hover:bg-accent/5`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">
                    {clinic.clinic}
                  </td>
                  <td className="px-6 py-4 text-foreground/80">
                    {clinic.date}
                  </td>
                  <td className="px-6 py-4 text-foreground/80">
                    {clinic.location}
                  </td>
                  <td className="px-6 py-4 text-center text-foreground font-semibold">
                    {clinic.participants}
                  </td>
                  <td className="px-6 py-4 text-center text-foreground/80">
                    {clinic.ageRange}
                  </td>
                  <td className="px-6 py-4 text-center text-foreground font-semibold">
                    {clinic.coaches}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {clinic.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-primary font-bold text-sm uppercase mb-2">Total Clinics</p>
            <p className="text-5xl font-black text-foreground">4</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-primary font-bold text-sm uppercase mb-2">Total Participants</p>
            <p className="text-5xl font-black text-foreground">491</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-primary font-bold text-sm uppercase mb-2">Expert Coaches</p>
            <p className="text-5xl font-black text-foreground">31</p>
          </div>
        </div>
      </div>
    </section>
  )
}
