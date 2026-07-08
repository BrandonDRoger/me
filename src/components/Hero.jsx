import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'

function useTypewriter(words) {
  const [text, setText] = useState('')

  useEffect(() => {
    let word = 0
    let char = 0
    let deleting = false
    let timer

    function tick() {
      const current = words[word]
      char += deleting ? -1 : 1
      setText(current.slice(0, char))

      let delay = deleting ? 40 : 90
      if (!deleting && char === current.length) {
        delay = 1800
        deleting = true
      } else if (deleting && char === 0) {
        deleting = false
        word = (word + 1) % words.length
        delay = 350
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

function Hero() {
  const { t } = useLanguage()
  const role = useTypewriter(t.hero.roles)

  return (
    <section className="hero">
      <div className="mini-planet" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-badge">
          <span className="pulse" />
          {t.hero.available}
        </p>
        <p className="hero-hello">{t.hero.hello}</p>
        <h1>Darren Brandon<br />Fotio Tatio</h1>
        <p className="hero-role">
          {t.hero.rolePrefix} <span className="typewriter">{role}</span><span className="caret" />
        </p>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">{t.hero.ctaProjects}</a>
          <a className="btn" href="#contact">{t.hero.ctaContact}</a>
          <a className="btn" href="https://github.com/BrandonDRoger" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <p className="hero-location">📍 {t.hero.location}</p>
      </div>
      <div className="horizon" aria-hidden="true" />
      <a className="scroll-hint" href="#about" aria-label={t.nav.about}>⌄</a>
    </section>
  )
}

export default Hero
