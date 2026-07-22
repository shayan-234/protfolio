import { motion } from "motion/react"
import { Mail01Icon, GithubIcon } from "hugeicons-react"
import { personalInfo } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <FadeInView className="max-w-xl mb-14">
        <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4">
          CONTACT
        </h2>
      </FadeInView>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeInView y={30}>
          <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">
            Let&apos;s build something great together.
          </p>
          <p className="mt-6 text-white/50 leading-relaxed max-w-md">
            Have an idea, a project, or a problem to solve? I&apos;m always open to
            collaborating on exciting opportunities.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-accent-400 hover:border-accent-500/30 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
            </a>
          </div>
        </FadeInView>

        <FadeInView y={30} delay={0.1}>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-semibold bg-accent-500 text-black hover:bg-accent-400 transition-colors w-full sm:w-auto justify-center"
          >
            Get In Touch
            <Mail01Icon className="size-5" aria-hidden="true" />
          </motion.a>
        </FadeInView>
      </div>
    </SectionWrapper>
  )
}
