import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react"

const screenshots = [2, 3, 6, 7, 10]

export default function MyWork() {
  const [index, setIndex] = useState(0)

  const total = screenshots.length

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section id="work" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            My Work
          </h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="https://nexora-h4xj.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-black rounded-lg text-sm font-semibold hover:bg-accent-400 transition-colors active:scale-[0.98]"
          >
            Visit Advera
            <ArrowUpRight size={16} weight="bold" />
          </motion.a>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.a
                key={index}
                href="https://nexora-h4xj.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="block w-full h-full"
              >
                <img
                  src={`/advera-${screenshots[index]}.png`}
                  alt={`Advera screenshot ${screenshots[index]}`}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <span className="text-xs font-mono text-white/40">
              {index + 1} / {total}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
