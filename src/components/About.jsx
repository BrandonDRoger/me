import { useLanguage } from '../LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <h2>{t.about.title}</h2>
      <p className="about-bio">{t.about.bio}</p>
      <ul className="timeline">
        {t.about.timeline.map((step) => (
          <li key={step.title}>
            <span className="timeline-period">{step.period}</span>
            <h3>{step.title}</h3>
            <p>{step.place}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
