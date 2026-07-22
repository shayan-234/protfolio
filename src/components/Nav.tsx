import { useState, useCallback } from "react"
import { Menu01Icon, Cancel01Icon } from "hugeicons-react"
import { useScrollDirection } from "../hooks/useScrollDirection"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { direction, scrolled } = useScrollDirection()
  const visible = !scrolled || direction === "up"

  const close = useCallback(() => setOpen(false), [])
  const toggleOpen = useCallback(() => setOpen((prev) => !prev), [])

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
        <a href="#home" aria-label="Home" className="flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-accent-500" aria-hidden="true">&lt;</span>
          <span className="text-white" aria-hidden="true">/</span>
          <span className="text-accent-500" aria-hidden="true">&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-white/40 hover:text-white/80 transition-colors rounded-lg hover:bg-white/[0.03]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleOpen}
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Cancel01Icon className="size-5" /> : <Menu01Icon className="size-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-black/80 backdrop-blur-xl border-b border-white/[0.04]`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-sm text-white/60 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-white/[0.03]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
