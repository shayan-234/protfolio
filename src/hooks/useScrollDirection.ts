import { useState, useEffect } from "react"

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const handler = () => {
      const cur = window.scrollY
      setScrolled(cur > 50)
      if (cur > 50) {
        setDirection(cur > last ? "down" : "up")
      } else {
        setDirection("up")
      }
      last = cur
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return { direction, scrolled }
}
