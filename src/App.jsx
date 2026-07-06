import Starfield from './components/Starfield'
import { useLanguage } from './LanguageContext'
import './App.css'

function App() {
  const { lang, setLang, t } = useLanguage()

  return (
    <>
      <Starfield />
      <button
        type="button"
        className="lang-toggle"
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>
      <main>
        <section className="hero">
          <h1>Darren Brandon Fotio Tatio</h1>
          <p>{t.hero.role}</p>
        </section>
      </main>
    </>
  )
}

export default App
