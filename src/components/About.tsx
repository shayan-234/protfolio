import { motion } from "motion/react"
import { personalInfo } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4">
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-white/60 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
