import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { projects, caseStudies } from "../data/portfolio"
import { SectionWrapper } from "./SectionWrapper"
import { FadeInView } from "./FadeInView"

export default function CaseStudies() {
  const [active, setActive] = useState(caseStudies[0].id)
  const study = caseStudies.find((s) => s.id === active)!
  const project = projects.find((p) => p.id === active)!

  return (
    <SectionWrapper id="case-studies">
      <FadeInView>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-2">
          Case Studies
        </h2>
        <p className="text-white/50 text-sm text-center mb-10">
          Problem, approach, and outcome for each project.
        </p>
      </FadeInView>

      <div className="flex items-center justify-center gap-2 mb-10">
        {caseStudies.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === s.id
                ? "bg-accent-500 text-black"
                : "bg-white/5 text-white/60 hover:text-white"
            }`}
          >
            {s.id === "syntrix" ? "Syntrix" : s.id === "issueforge" ? "IssueForge" : "SchoolStack"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-400 text-sm font-semibold hover:underline mb-6"
          >
            Visit {project.name} &rarr;
          </a>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-accent-400 mb-2">Problem</h3>
              <p className="text-white/70 leading-relaxed text-sm">{study.problem}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent-400 mb-2">Approach</h3>
              <p className="text-white/70 leading-relaxed text-sm">{study.approach}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent-400 mb-2">Result</h3>
              <p className="text-white/70 leading-relaxed text-sm">{study.result}</p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {study.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/50"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
