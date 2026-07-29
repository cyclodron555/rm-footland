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

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-bold text-primary mb-3 drop-shadow-md tracking-wider">
            PLAY THE
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg">
            <span className="text-secondary">PLAY THE </span>
            <span className="text-primary">REAL WAY</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-md">
            Real Madrid Foundation Clinics Azerbaijan
          </p>
          <p className="text-lg text-white/90 mt-4 drop-shadow-md">
            Your effort, their future
          </p>
        </div>
      </div>
    </section>
  )
}
