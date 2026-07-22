import { ArrowRight03Icon, Mail01Icon } from "hugeicons-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center bg-black overflow-hidden"
    >
      <div className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-white/40 text-sm mb-4">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92]">
              <span className="text-accent-500">Shayan</span>
              <br />
              <span className="text-white">Shakeel</span>
            </h1>

            <p className="mt-4 text-sm text-white/40 font-mono">
              Dev Marketer &mdash; SEO Manager &mdash; AI Integrator
            </p>

            <p className="mt-6 text-base sm:text-lg text-white/50 max-w-lg leading-relaxed">
              I bridge product engineering, growth marketing, and artificial intelligence
              to build digital experiences that rank, convert, and scale.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold bg-accent-500 text-black hover:bg-accent-400 transition-colors active:scale-[0.98]"
              >
                View My Work
                <ArrowRight03Icon className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold border border-white/[0.08] text-white/60 hover:text-white hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <Mail01Icon className="size-4" aria-hidden="true" />
                Get In Touch
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative aspect-[3/4] max-h-[70vh] rounded-2xl overflow-hidden">
              <img
                src="/shayann.webp"
                alt="Shayan Shakeel"
                width="896"
                height="1194"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
