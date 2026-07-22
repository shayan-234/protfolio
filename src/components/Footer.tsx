import { personalInfo } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-50 py-10 bg-black border-t border-white/[0.03]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-white/30 font-mono">
          React + Tailwind
        </p>
      </div>
    </footer>
  )
}
