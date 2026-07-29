'use client'

export default function PastClinics() {
  const pastClinics = [
    {
      id: 1,
      clinic: 'Summer Clinic 2026',
      date: 'June 22-26, 2026',
      location: 'SABIS SUN International',
      participants: 280,
      ageRange: '6-16 years',
      coaches: 4,
      status: 'Completed'
    },
    {
      id: 2,
      clinic: 'Summer Clinic 2025',
      date: 'June 23-27, 2025',
      location: 'SABIS SUN International',
      participants: 250,
      ageRange: '6-16 years',
      coaches: 3,
      status: 'Completed'
    },
    {
      id: 3,
      clinic: 'Summer Clinic 2024',
      date: 'June 24-28, 2024',
      location: 'SABIS SUN International',
      participants: 150,
      ageRange: '6-16 years',
      coaches: 2,
      status: 'Completed'
    },
    {
      id: 4,
      clinic: 'Summer Clinic 2023',
      date: 'August 21-25, 2023',
      location: 'SABIS SUN International',
      participants: 150,
      ageRange: '6-16 years',
      coaches: 2,
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
            <p className="text-5xl font-black text-foreground">830</p>
          </div>
          <div className="bg-primary/10 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-primary font-bold text-sm uppercase mb-2">Expert Coaches</p>
            <p className="text-5xl font-black text-foreground">11</p>
          </div>
        </div>
      </div>
    </section>
  )
}
