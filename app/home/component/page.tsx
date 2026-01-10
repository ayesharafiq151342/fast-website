export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/university-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10 md:px-20">
        <div className="max-w-xl text-white">
          <p className="mb-3 text-sm uppercase tracking-widest">
            Welcome to Univet University
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Preparing Minds <br /> For The Future
          </h1>

          <button className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold hover:bg-emerald-700 transition">
            View Our Programs →
          </button>
        </div>
      </div>

      {/* Human Image (Changeable) */}
      <img
        src="/images/students-1.png"
        alt="Students"
        className="absolute bottom-0 right-0 z-10 hidden h-[85%] md:block"
      />
    </section>
  );
}
