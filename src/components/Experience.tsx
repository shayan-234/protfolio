import { motion } from "motion/react"
import { experience } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <FadeInView className="max-w-xl mb-14">
        <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4">
          EXPERIENCE
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.1]">
          Where I&apos;ve been and what I&apos;ve built.
        </p>
      </FadeInView>

      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" />

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-1.5 size-[23px] rounded-full border border-accent-500/50 bg-black flex items-center justify-center">
                <span className="size-2 rounded-full bg-accent-500" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <p className="text-accent-400/80 text-sm mt-0.5">{exp.company}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-white/50 font-mono">{exp.period}</p>
                  <p className="text-xs text-white/50 mt-0.5">{exp.location}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-500/50" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
