import { motion } from "motion/react"
import { personalInfo } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function About() {
  return (
    <SectionWrapper id="about">
      <FadeInView y={30} className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
          About Me
        </h2>
        <div className="space-y-4">
          {personalInfo.about.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-white/60 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </FadeInView>
    </SectionWrapper>
  )
}
