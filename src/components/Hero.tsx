import { useMemo } from "react"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight03Icon, Mail01Icon } from "hugeicons-react"

function useIsMobile() {
  return useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(max-width: 767px)").matches
  }, [])
}

function useNoAnimation() {
  const reduce = useReducedMotion()
  const mobile = useIsMobile()
  return reduce || mobile
}

export default function Hero() {
  const noAnimation = useNoAnimation()

  return (
    <section id="home" className="relative min-h-svh flex items-center bg-black">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center">
          <motion.div
            initial={noAnimation ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-sm mb-4">Hi, I&apos;m</p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="text-accent-500">Shayan Shakeel</span>
              <br />
              <span className="text-white">I build </span>
              <span className="text-accent-500">digital</span>
              <br />
              <span className="text-accent-500">experiences.</span>
            </h1>

            <motion.p
              initial={noAnimation ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: noAnimation ? 0 : 0.15 }}
              className="mt-6 text-base sm:text-lg text-white/60 max-w-md leading-relaxed"
            >
              A passionate developer and digital marketer from Pakistan, building modern web apps with React, Tailwind CSS, Python, and PostgreSQL.
            </motion.p>

            <motion.div
              initial={noAnimation ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: noAnimation ? 0 : 0.25 }}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-black rounded-lg text-sm font-semibold hover:bg-accent-400 transition-colors active:scale-[0.98]"
              >
                View My Work
                <ArrowRight03Icon className="size-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent-500/50 text-accent-400 rounded-lg text-sm font-semibold hover:bg-accent-500/10 transition-colors active:scale-[0.98]"
              >
                <Mail01Icon className="size-4" aria-hidden="true" />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={noAnimation ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: noAnimation ? 0 : 0.35 }}
              className="mt-10"
            >
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">
                TECH I WORK WITH
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-orange-500">HTML5</span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-blue-500">CSS3</span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-yellow-500">JavaScript</span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-cyan-500">React</span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-white">Next.js</span>
                <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-cyan-500">Tailwind</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={noAnimation ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block relative"
          >
            <div className="relative aspect-[3/4] max-h-[70vh] rounded-2xl overflow-hidden">
              <img src="/shayann.webp" alt="Shayan Shakeel" width="896" height="1194" loading="eager" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />
            </div>

            <div aria-hidden="true" className="absolute -top-4 -right-4 w-36 rounded-xl bg-black/80 border border-white/10 p-3 font-mono text-[10px] text-accent-400/60 leading-relaxed">
              const developer = {'{'}
              <br />
              &nbsp;&nbsp;name: "Shayan Shakeel",
              <br />
              &nbsp;&nbsp;passion: "Building digital experiences",
              <br />
              &nbsp;&nbsp;focus: ["Web", "Apps", "UI/UX"],
              <br />
              {'}'};
              <br />
              let&apos;sBuild();
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
