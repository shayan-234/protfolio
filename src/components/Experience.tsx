import { motion } from "motion/react"
import { experience } from "../data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 size-[23px] rounded-full border border-accent-500/50 bg-black flex items-center justify-center">
                  <span className="size-2 rounded-full bg-accent-500" />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-accent-400 mt-0.5">{exp.company}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-white/40 font-mono">{exp.period}</p>
                    <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-white/60">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-500/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
