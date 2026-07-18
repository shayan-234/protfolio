import { motion } from "motion/react"
import { Mail01Icon, GithubIcon } from "hugeicons-react"
import { personalInfo } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <FadeInView y={30}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed max-w-md">
            Have an idea, a project, or a problem to solve? I'm always open to collaborating on exciting opportunities and building fast, modern, and user-focused web experiences. Let's turn your vision into something great.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-500/20 hover:text-accent-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
            </a>
          </div>
        </FadeInView>

        <FadeInView y={30} delay={0.1} className="flex items-center justify-center md:justify-center h-full">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent-500 text-black rounded-xl text-lg font-semibold hover:bg-accent-400 transition-colors"
          >
            Get In Touch
            <Mail01Icon className="size-5" aria-hidden="true" />
          </motion.a>
        </FadeInView>
      </div>
    </SectionWrapper>
  )
}
