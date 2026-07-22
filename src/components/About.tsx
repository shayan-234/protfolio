import { motion } from "motion/react"
import { personalInfo } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <FadeInView y={30} className="lg:col-span-2 lg:self-center">
          <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4">
            ABOUT
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.1]">
            Code, growth, and AI — that&apos;s my stack.
          </p>
        </FadeInView>

        <div className="lg:col-span-3 space-y-5">
          {personalInfo.about.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-white/60 leading-relaxed text-[15px]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
