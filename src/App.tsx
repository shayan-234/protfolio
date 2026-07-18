import { useEffect, lazy, Suspense, type ReactNode } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"

const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const MyWork = lazy(() => import("./components/MyWork"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

function SuspenseSection({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="py-16 md:py-20 bg-black" />}>
      {children}
    </Suspense>
  )
}

function App() {
  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main id="main-content">
        <Hero />
        <SuspenseSection><About /></SuspenseSection>
        <SuspenseSection><Skills /></SuspenseSection>
        <SuspenseSection><Experience /></SuspenseSection>
        <SuspenseSection><MyWork /></SuspenseSection>
        <SuspenseSection><Contact /></SuspenseSection>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  )
}

export default App
