import { motion } from "motion/react"
import { skills } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <FadeInView className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-10">
        <h2>Skills & Tools</h2>
      </FadeInView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <FadeInView
            key={group.category}
            delay={i * 0.05}
            duration={0.4}
            viewportAmount={0.2}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-500/30 transition-colors"
          >
            <h3 className="text-sm font-semibold text-accent-400 mb-4">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, j) => (
                <li key={item}>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.05 + j * 0.03 }}
                    className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/60"
                  >
                    {item}
                  </motion.span>
                </li>
              ))}
            </ul>
          </FadeInView>
        ))}
      </div>
    </SectionWrapper>
  )
}
