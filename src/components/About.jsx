import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import useReveal from '../useReveal'

const starMap = [
  { x: 7, y: 72, side: 'top' },
  { x: 22, y: 34, side: 'bottom' },
  { x: 40, y: 64, side: 'top' },
  { x: 58, y: 20, side: 'bottom' },
  { x: 76, y: 62, side: 'top' },
  { x: 93, y: 24, side: 'bottom' },
]

function Stat({ value, suffix = '', label }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame)
        if (!entry.isIntersecting) {
          setDisplay(0)
          return
        }
        const start = performance.now()
        function tick(now) {
          const p = Math.min((now - start) / 2600, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(ref.current)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [value])

  return (
    <li ref={ref}>
      <span className="stat-orbit" aria-hidden="true">
        <span className="stat-moon m1" />
        <span className="stat-moon m2" />
      </span>
      <span className="stat-number">{display}{suffix}</span>
      <span className="stat-label">{label}</span>
    </li>
  )
}

function About() {
  const { t } = useLanguage()
  const ref = useReveal()

  return (
    <section id="about" className="section reveal" ref={ref}>
      <h2 data-ghost={t.about.ghost}>{t.about.title}</h2>
      <p className="about-bio">{t.about.bio}</p>
      <ul className="stats">
        {t.about.stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </ul>

      <div className="constellation">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline
            points={starMap.map((s) => `${s.x},${s.y}`).join(' ')}
            pathLength="1"
          />
        </svg>
        {t.about.timeline.map((step, i) => (
          <div
            key={step.title}
            className={`c-node ${starMap[i].side}${i === 0 ? ' edge-l' : ''}${i === starMap.length - 1 ? ' edge-r' : ''}`}
            style={{ left: `${starMap[i].x}%`, top: `${starMap[i].y}%`, '--i': i }}
          >
            <span className="c-star" />
            <div className="c-chip">
              <span className="timeline-period">{step.period}</span>
              <h3>{step.title}</h3>
              <p>{step.place}</p>
            </div>
          </div>
        ))}
      </div>

      <ul className="timeline">
        {t.about.timeline.map((step, i) => (
          <li key={step.title} style={{ '--i': i }}>
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
