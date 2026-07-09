import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react"
import { projects } from "../data/portfolio"

function ProjectTabs({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {projects.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
            active === p.id
              ? "bg-accent-500 text-black"
              : "bg-white/5 text-white/60 hover:text-white"
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  )
}

function ProjectView({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId)!
  const [index, setIndex] = useState(0)
  const hasScreenshots = project.screenshots.length > 0
  const total = project.screenshots.length
  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-black rounded-lg text-sm font-semibold hover:bg-accent-400 transition-colors active:scale-[0.98]"
        >
          Visit {project.name}
          <ArrowUpRight size={16} weight="bold" />
        </a>
      </div>

      <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto text-center">
        {project.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-sm font-semibold text-accent-400 mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack!.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-white/60">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-accent-400 mb-3">Features</h3>
          <ul className="space-y-1.5">
            {project.features!.map((f) => (
              <li key={f} className="text-white/60 text-sm flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            {hasScreenshots ? (
              <AnimatePresence mode="wait">
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25 }}
                  className="block w-full h-full"
                >
                  <img
                    src={`/${projectId}-${project.screenshots[index]}.png`}
                    alt={`${project.name} screenshot ${project.screenshots[index]}`}
                    className="w-full h-full object-cover"
                  />
                </motion.a>
              </AnimatePresence>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-900/20 via-zinc-900 to-black">
                <div className="text-center">
                  <span className="text-5xl font-bold text-accent-500/30">{'{ }'}</span>
                  <p className="mt-2 text-xs text-white/20 font-mono">screenshots coming soon</p>
                </div>
              </div>
            )}
          </div>

          {hasScreenshots && (
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
                aria-label="Previous"
              >
                <CaretLeft size={16} weight="bold" />
              </button>
              <span className="text-xs font-mono text-white/40">
                {index + 1} / {total}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
                aria-label="Next"
              >
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MyWork() {
  const [activeProject, setActiveProject] = useState("syntrix")

  return (
    <section id="work" className="py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-2">
            My Work
          </h2>
          <ProjectTabs active={activeProject} onChange={setActiveProject} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectView projectId={activeProject} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
