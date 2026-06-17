import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import MyWork from "./components/MyWork"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-zinc-950 dark:via-zinc-950 dark:to-teal-950/20 text-zinc-900 dark:text-zinc-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <MyWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
