import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'

const sections = ['about', 'projects', 'skills', 'contact']

function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const labels = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  }

  return (
    <header className="navbar">
      <a href="#" className="brand">DB</a>
      <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
        {sections.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {labels[id]}
          </a>
        ))}
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
