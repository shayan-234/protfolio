import { motion } from "motion/react"
import { personalInfo } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-white/50">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-white/50">
          Built with React + Tailwind
        </p>
      </motion.div>
    </footer>
  )
}
