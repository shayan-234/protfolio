import { personalInfo } from "../data/portfolio"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
