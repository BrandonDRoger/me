import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
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
      </main>
    </>
  )
}

export default App
