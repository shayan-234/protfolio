import { useEffect } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import MyWork from "./components/MyWork"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
