import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Darren Brandon Fotio Tatio</footer>
    </>
  )
}

export default App
