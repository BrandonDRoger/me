import { useLanguage } from '../LanguageContext'

function Navbar() {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="navbar">
      <a href="#" className="brand">DB</a>
      <nav>
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#contact">{t.nav.contact}</a>
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
