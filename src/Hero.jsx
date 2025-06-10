export function Hero() {
  return (
    <section className="mt-24 max-md:mt-16 max-sm:mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Text Section */}
        <div className="flex-1">
          <p className="mb-5 text-2xl font-inter text-[#5AB8F3]">Hi, my name is</p>

          <h2 className="mb-5 text-4xl font-bold leading-none text-zinc-300 max-md:text-5xl max-sm:text-4xl">
            Desalegn Dagachew
          </h2>

          <h3 className="mb-10 text-4xl font-bold leading-none text-zinc-400 max-md:text-4xl max-sm:text-3xl">
            Building digital.
          </h3>

          <p className="mb-10 text-xl font-inter text-zinc-300 max-w-2xl">
          I'm a Frontend Developer and Visual Designer passionate about bringing ideas to life through clean code, intuitive design, and impactful branding. With a background in web design, brand identity, and product design, I build visually compelling and user-centered digital experiences.
          </p>

          <a
            href="" // Add your actual resume link here
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="group relative inline-flex items-center justify-center px-6 py-2 text-xl font-semibold text-[#5AB8F3] border border-[#5AB8F3] rounded-full overflow-hidden bg-transparent transition duration-300 ease-in-out hover:bg-[#5AB8F3] hover:text-slate-900 shadow-md">
              <span className="absolute inset-0 w-full h-full bg-[#5AB8F3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <span className="relative z-10">Resume</span>
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="Dese.png"
            alt="tadesse"
            className="w-64 h-64 object-cover "
          />
        </div>
      </div>
    </section>
  );
}
