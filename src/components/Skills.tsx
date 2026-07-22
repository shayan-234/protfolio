import { motion } from "motion/react"
import { skills } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <FadeInView className="max-w-xl mb-14">
        <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4">
          SKILLS
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.1]">
          Tools and expertise I bring to every project.
        </p>
      </FadeInView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group, i) => (
          <FadeInView
            key={group.category}
            delay={i * 0.04}
            duration={0.4}
            viewportAmount={0.15}
          >
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full">
              <h3 className="text-sm font-semibold text-accent-400 mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.04 + j * 0.02 }}
                    className="px-2.5 py-1.5 text-xs rounded-lg bg-white/[0.04] text-white/50"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </SectionWrapper>
  )
}
