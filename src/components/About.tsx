import { motion } from "motion/react"
import { personalInfo } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Marketing meets engineering meets AI
          </h2>
          <div className="mt-6 space-y-4">
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
