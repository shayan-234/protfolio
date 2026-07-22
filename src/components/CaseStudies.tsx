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
      <FadeInView className="max-w-xl mb-14">
        <h2 className="text-sm font-mono text-accent-500 tracking-[0.15em] mb-4">
          CASE STUDIES
        </h2>
        <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.1]">
          Problem, approach, outcome.
        </p>
      </FadeInView>

      <FadeInView>
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {caseStudies.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === s.id
                  ? "bg-accent-500 text-black"
                  : "bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {s.id === "syntrix"
                ? "Syntrix"
                : s.id === "issueforge"
                  ? "IssueForge"
                  : "SchoolStack"}
            </button>
          ))}
        </div>
      </FadeInView>

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
            className="inline-flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors mb-8 group"
          >
            Visit {project.name}
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>

          <div className="space-y-8">
            {[
              { label: "Problem", content: study.problem },
              { label: "Approach", content: study.approach },
              { label: "Result", content: study.result },
            ].map((item, i) => (
              <div key={item.label}>
                <h3 className="text-sm font-semibold text-accent-400 mb-2.5">
                  {i + 1}. {item.label}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            {study.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50"
              >
                {kw}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
