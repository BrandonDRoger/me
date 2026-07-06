import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'

function App() {
  return (
    <>
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
