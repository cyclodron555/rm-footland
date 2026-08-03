export default function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-secondary">
      {/* Hero Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10">
        <img
          src="/hero-team.jpg"
          alt="Real Madrid Foundation team with coaches and players at clinic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Radial Gradient Behind Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-black/40 via-black/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <div className="max-w-3xl">
          <p className="text-base md:text-lg font-bold text-primary mb-6 drop-shadow-lg tracking-widest uppercase">
            JOIN US AND
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-xl" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>
            <span className="text-white">PLAY THE </span>
            <span className="text-primary">REAL WAY</span>
          </h1>
          <p className="text-lg md:text-2xl text-white font-bold drop-shadow-lg" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)' }}>
            Real Madrid Foundation Clinics Azerbaijan
          </p>
          <p className="text-base md:text-lg text-white mt-6 font-medium drop-shadow-lg" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}>
            Your effort, their future
          </p>
        </div>
      </div>
    </section>
  )
}
