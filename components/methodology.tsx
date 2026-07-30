'use client'

export default function Methodology() {
  const values = [
    {
      title: 'Leadership',
      description: 'Developing confident young players who can lead on and off the pitch'
    },
    {
      title: 'Teamwork',
      description: 'Understanding the importance of working together towards common goals'
    },
    {
      title: 'Effort',
      description: 'Demonstrating commitment and dedication to continuous improvement'
    },
    {
      title: 'Solidarity',
      description: 'Supporting teammates and building strong community bonds'
    },
    {
      title: 'Cooperation',
      description: 'Collaborating effectively with coaches, teammates, and peers'
    },
    {
      title: 'Respect',
      description: 'Showing respect for the game, opponents, and all involved in football'
    },
  ]

  return (
    <section id="methodology" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl font-black text-foreground mb-4">
            The Real Way <span className="text-primary">Methodology</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Our unique methodology helps educate boys and girls both on and off the pitch by combining football training with the core values of the Real Madrid Foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-lg p-8 shadow-sm border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-black mr-4 flex-shrink-0">
                  {value.title.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-secondary text-white rounded-lg p-12 text-center mb-16">
          <h3 className="text-3xl font-black mb-4">
            Objectives
          </h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            The most important objective is to introduce children to the values of the Real Madrid Foundation: leadership, teamwork, effort, solidarity, cooperation, and respect. Through football, we help young players discover their potential and become better individuals both on and off the pitch.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-black text-foreground mb-12">
            Our <span className="text-primary">Partners</span> and Sponsors
          </h3>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <div className="flex-shrink-0">
              <img 
                src="/sponsor-abb.png" 
                alt="ABB Azerbaycan Beynelxalq Bankı" 
                className="h-24 object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <img 
                src="/sponsor-visa.png" 
                alt="VISA" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
