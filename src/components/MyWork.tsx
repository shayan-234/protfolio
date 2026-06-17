import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react"

const lightScreenshots = [1, 4, 5, 8, 9]
const darkScreenshots = [2, 3, 6, 7, 10]

export default function MyWork() {
  const [dark, setDark] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => setDark(document.documentElement.classList.contains("dark") || mq.matches)
    update()
    const listener = () => update()
    mq.addEventListener("change", listener)
    const observer = new MutationObserver(update)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => {
      mq.removeEventListener("change", listener)
      observer.disconnect()
    }
  }, [])

  const screenshots = dark ? darkScreenshots : lightScreenshots
  const current = screenshots[index]
  const total = screenshots.length

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors active:scale-[0.98]"
          >
            Visit Advera
            <ArrowUpRight size={16} weight="bold" />
          </motion.a>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <AnimatePresence mode="wait">
              <motion.a
                key={current}
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
                  src={`/advera-${current}.png`}
                  alt={`Advera screenshot ${current}`}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Previous"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              {index + 1} / {total}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
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
