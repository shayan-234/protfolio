import { useState, memo, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight03Icon, ArrowLeft03Icon, ArrowRight03Icon } from "hugeicons-react"
import { projects } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

const ProjectTabs = memo(function ProjectTabs({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {projects.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            active === p.id
              ? "bg-accent-500 text-black"
              : "bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.06]"
          }`}
        >
          {p.name}
        </button>
      ))}
    </div>
  )
})

const ProjectView = memo(function ProjectView({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId)
  const [index, setIndex] = useState(0)

  const total = project?.screenshots.length ?? 0
  const prev = useCallback(() => setIndex((i) => (i === 0 ? total - 1 : i - 1)), [total])
  const next = useCallback(
    () => setIndex((i) => (i === total - 1 ? 0 : i + 1)),
    [total],
  )

  if (!project) {
    return <div className="text-white/50 text-center">Project not found.</div>
  }

  const hasScreenshots = project.screenshots.length > 0

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors mb-6 group"
          >
            Visit Live Site
            <ArrowUpRight03Icon
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <p className="text-white/60 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-mono text-white/50 tracking-[0.1em] mb-3 uppercase">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/50 tracking-[0.1em] mb-3 uppercase">
              Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="text-white/50 text-sm flex items-center gap-2.5"
                >
                  <span className="w-1 h-1 rounded-full bg-accent-500/60 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
            {hasScreenshots ? (
              <AnimatePresence mode="wait">
                <motion.a
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="block"
                >
                  <img
                    src={`/${projectId}-${project.screenshots[index]}.webp`}
                    alt={`${project.name} screenshot ${project.screenshots[index]}`}
                    width="1366"
                    height="768"
                    loading="lazy"
                    decoding="async"
                    className="max-w-full h-auto"
                  />
                </motion.a>
              </AnimatePresence>
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-accent-900/20 via-zinc-900 to-black">
                <div className="text-center">
                  <span
                    className="text-5xl font-bold text-accent-500/20"
                    aria-hidden="true"
                  >
                    {'{ }'}
                  </span>
                  <p className="mt-2 text-xs text-white/50 font-mono">
                    screenshots coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          {hasScreenshots && (
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Previous screenshot"
              >
                <ArrowLeft03Icon className="size-3.5" aria-hidden="true" />
              </button>
              <span className="text-xs font-mono text-white/50" aria-hidden="true">
                {index + 1} / {total}
              </span>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.08] transition-all"
                aria-label="Next screenshot"
              >
                <ArrowRight03Icon className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default function MyWork() {
  const [activeProject, setActiveProject] = useState("syntrix")

  return (
    <SectionWrapper id="work">
      <FadeInView>
        <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4 text-center">
          PROJECTS
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center leading-[1.1] mb-2">
          Things I&apos;ve built.
        </p>
        <ProjectTabs active={activeProject} onChange={setActiveProject} />
      </FadeInView>

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
    </SectionWrapper>
  )
}
