import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import useReveal from '../useReveal'
import Astro from './Astro'

// la Grande Ourse : 2 étoiles de manche + 4 étoiles de cuve
const starMap = [
  { x: 5, y: 12, side: 'bottom', edge: 'edge-l' },
  { x: 28, y: 36, side: 'top' },
  { x: 40, y: 58, side: 'top' },
  { x: 36, y: 80, side: 'bottom' },
  { x: 68, y: 84, side: 'bottom' },
  { x: 64, y: 44, side: 'top' },
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
      <Astro id="andromeda" />
      <Astro id="pluto" />
      <Astro id="earth" />
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
          <line
            x1={starMap[5].x}
            y1={starMap[5].y}
            x2={starMap[2].x}
            y2={starMap[2].y}
            pathLength="1"
          />
        </svg>
        {t.about.timeline.map((step, i) => (
          <div
            key={step.title}
            className={`c-node ${starMap[i].side} ${starMap[i].edge || ''}`}
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
