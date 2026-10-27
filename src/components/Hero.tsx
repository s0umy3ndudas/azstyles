export default function Hero() {
  return (
    <section className="px-6 pt-44 sm:pt-52 md:pt-60">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="animate-fade-up text-xs uppercase tracking-luxury text-champagne-400">
          A More Exclusive Experience
        </p>

        <h1
          className="animate-fade-up mt-7 font-serif text-[2.75rem] font-light leading-[1.05] text-ivory-50 text-balance sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          style={{ animationDelay: '0.12s' }}
        >
          Discover Something
          <br className="hidden sm:block" /> Extraordinary.
        </h1>

        <div
          className="animate-fade-up mx-auto mt-8 h-px w-16 bg-champagne-500/50"
          style={{ animationDelay: '0.28s' }}
        />

        <p
          className="animate-fade-up mx-auto mt-8 max-w-xl text-base leading-relaxed text-ivory-300/80 text-balance sm:text-lg"
          style={{ animationDelay: '0.38s' }}
        >
          Experience a refined approach to premium service, designed around your
          individual needs.
        </p>
      </div>
    </section>
  );
}
