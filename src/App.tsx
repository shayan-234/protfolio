import { useEffect, lazy, Suspense, type ReactNode } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"

const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const MyWork = lazy(() => import("./components/MyWork"))
const CaseStudies = lazy(() => import("./components/CaseStudies"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

function SuspenseSection({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="py-16 md:py-20 bg-black" />}>
      {children}
    </Suspense>
  )
}

function useScrollToTopWithoutHash() {
  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [])
}

function App() {
  useScrollToTopWithoutHash()

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main id="main-content">
        <Hero />
        <SuspenseSection><About /></SuspenseSection>
        <SuspenseSection><Skills /></SuspenseSection>
        <SuspenseSection><Experience /></SuspenseSection>
        <SuspenseSection><MyWork /></SuspenseSection>
        <SuspenseSection><CaseStudies /></SuspenseSection>
        <SuspenseSection><Contact /></SuspenseSection>
      </main>
      <SuspenseSection><Footer /></SuspenseSection>
    </div>
  )
}

export default App
