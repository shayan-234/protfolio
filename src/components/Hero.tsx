import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, Envelope } from "@phosphor-icons/react"
import { personalInfo } from "../data/portfolio"

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 via-transparent to-transparent dark:from-teal-950/20 dark:via-transparent dark:to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 md:pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-zinc-900 dark:text-white">
              Building products that <span className="text-accent-500">rank, convert,</span> and scale with AI
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors active:scale-[0.98]"
              >
                View My Work
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors active:scale-[0.98]"
              >
                <Envelope size={16} />
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:block relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 via-teal-50 to-zinc-100 dark:from-teal-950/40 dark:via-zinc-900 dark:to-zinc-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-teal-300/40 dark:text-teal-600/30">AI</div>
                  <div className="text-[10px] font-mono tracking-[0.3em] text-teal-400/30 dark:text-teal-500/20 mt-1 uppercase">automation</div>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-zinc-900/5 dark:ring-white/5 rounded-2xl pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-accent-500/10 dark:bg-accent-400/10 border border-accent-200/50 dark:border-accent-700/50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">8+</span>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-center text-xs text-zinc-500 dark:text-zinc-400 font-medium text-center leading-tight p-2">
              SEO
              <br />
              driven
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
