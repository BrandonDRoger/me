import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'
import { useLanguage } from './LanguageContext'
import './App.css'

function App() {
  const { t } = useLanguage()

  return (
    <>
      <div className="nebula" aria-hidden="true" />
      <Starfield />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Darren Brandon Fotio Tatio</p>
        <p>{t.footer} · Photos : NASA/JPL</p>
      </footer>
      <BackToTop />
    </>
  )
}

export default App
