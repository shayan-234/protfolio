import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 bg-black ${className}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}
