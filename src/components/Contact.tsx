import { motion } from "motion/react"
import { Envelope, GithubLogo } from "@phosphor-icons/react"
import { personalInfo } from "../data/portfolio"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Let&apos;s build something
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed max-w-md">
              Whether you need growth strategy, technical SEO, AI integration, Meta Ads, Google Ads, or a full-stack marketing engine - I&apos;d love to hear about your project.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-500/20 hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubLogo size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-black rounded-lg text-sm font-semibold hover:bg-accent-400 transition-colors active:scale-[0.98]"
            >
              Get In Touch
              <Envelope size={16} weight="bold" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
