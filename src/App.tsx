import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import MyWork from "./components/MyWork"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
