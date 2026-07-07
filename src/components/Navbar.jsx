import { useState } from 'react'
import { useLanguage } from '../LanguageContext'

function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#" className="brand">DB</a>
      <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#skills">{t.nav.skills}</a>
        <a href="#contact">{t.nav.contact}</a>
      </nav>
      <div className="nav-right">
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <button
          type="button"
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar
