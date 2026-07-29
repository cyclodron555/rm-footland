export default function TrainingTechnique() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base font-bold text-primary mb-3 tracking-wider">
            LEARNING THE REAL WAY
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-secondary mb-4 text-balance">
            Young Players Learning Football Technique
          </h3>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our expert coaches guide participants through proven Real Madrid Foundation methodology, 
            focusing on technique, teamwork, and the core values that define the Real Spirit.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/training-technique.jpg"
            alt="Young players learning football technique with Real Madrid Foundation coaches"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Training Focus Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <div className="text-3xl">⚽</div>
            </div>
            <h4 className="text-xl font-bold text-secondary mb-2">Technical Skills</h4>
            <p className="text-foreground/70">
              Master fundamental techniques including ball control, passing, shooting, and positioning through structured drills.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <div className="text-3xl">🤝</div>
            </div>
            <h4 className="text-xl font-bold text-secondary mb-2">Teamwork</h4>
            <p className="text-foreground/70">
              Learn to play as part of a team, understanding positioning, communication, and collective strategy.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <div className="text-3xl">🏆</div>
            </div>
            <h4 className="text-xl font-bold text-secondary mb-2">Real Values</h4>
            <p className="text-foreground/70">
              Develop leadership, effort, solidarity, cooperation, and respect both on and off the pitch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
