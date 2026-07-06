import { useLanguage } from '../LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <p className="hero-hello">{t.hero.hello}</p>
      <h1>Darren Brandon Fotio Tatio</h1>
      <p className="hero-role">{t.hero.role}</p>
      <p className="hero-tagline">{t.hero.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">{t.hero.ctaProjects}</a>
        <a className="btn" href="#contact">{t.hero.ctaContact}</a>
      </div>
    </section>
  )
}

export default Hero
