import { useEffect, lazy, Suspense, type ReactNode } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import SplashCursor from "./components/SplashCursor"

const About = lazy(() => import("./components/About"))
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const MyWork = lazy(() => import("./components/MyWork"))
const CaseStudies = lazy(() => import("./components/CaseStudies"))
const Contact = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

function SuspenseSection({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="py-20 md:py-28 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="h-8 w-48 bg-white/[0.03] rounded-lg animate-pulse" />
          </div>
        </div>
      }
    >
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
      <SplashCursor
        DYE_RESOLUTION={256}
        SIM_RESOLUTION={64}
        PRESSURE_ITERATIONS={8}
        CURL={1}
        SPLAT_FORCE={2000}
      />
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
