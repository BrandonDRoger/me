import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import useReveal from '../useReveal'
import xeno1 from '../assets/xenomorph/xenomorph-1.jpg'
import xeno2 from '../assets/xenomorph/xenomorph-2.jpg'
import xeno3 from '../assets/xenomorph/xenomorph-3.jpg'
import xeno4 from '../assets/xenomorph/xenomorph-4.jpg'
import xeno5 from '../assets/xenomorph/xenomorph-5.jpg'
import xeno6 from '../assets/xenomorph/xenomorph-6.jpg'
import jupiter from '../assets/astres/jupiter.jpg'

const xenoPhotos = [xeno1, xeno2, xeno3, xeno4, xeno5, xeno6]

function tilt(e) {
  const card = e.currentTarget
  const r = card.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  card.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`
}

function untilt(e) {
  e.currentTarget.style.transform = ''
}

function Projects() {
  const { t } = useLanguage()
  const ref = useReveal()
  const [photo, setPhoto] = useState(0)
  const p = t.projects

  return (
    <section id="projects" className="section reveal" ref={ref}>
      <img className="astro astro-jupiter" src={jupiter} alt="" aria-hidden="true" />
      <h2 data-ghost={p.ghost}>{p.title}</h2>

      <article className="mission" data-num="01">
        <div className="mission-info">
          <p className="mission-label">{p.mission} 01 — Evident Scientific</p>
          <h3>{p.magasin.name}</h3>
          <div className="mission-badges">
            <span className="badge badge-star">★ {p.featured}</span>
            <span className="badge">{p.production}</span>
          </div>
          <p>{p.magasin.desc}</p>
          <ul className="tags">
            {['C#', 'ASP.NET Web API', 'SQL Server', 'JavaScript', 'Razor'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="mission-visual metric-panel" onMouseMove={tilt} onMouseLeave={untilt}>
          <span className="metric-value">{p.magasin.metric}</span>
          <span className="metric-unit">{p.magasin.metricUnit}</span>
          <span className="metric-caption">{p.magasin.metricCaption}</span>
        </div>
      </article>

      <article className="mission reverse" data-num="02">
        <div className="mission-info">
          <p className="mission-label">{p.mission} 02 — Freelance</p>
          <h3>{p.primavera.name}</h3>
          <div className="mission-badges">
            <span className="badge">{p.production}</span>
          </div>
          <p>{p.primavera.desc}</p>
          <a className="btn" href="https://www.academieprimavera.com/" target="_blank" rel="noreferrer">
            {p.primavera.linkLabel} ↗
          </a>
          <ul className="tags">
            {['React', 'Vite', 'JavaScript', 'CSS'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="mission-visual browser" onMouseMove={tilt} onMouseLeave={untilt}>
          <div className="browser-bar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="browser-url">academieprimavera.com</span>
            <span className="badge badge-live">● {p.primavera.liveLabel}</span>
          </div>
          <iframe
            src="https://www.academieprimavera.com/"
            title={p.primavera.name}
            loading="lazy"
          />
        </div>
      </article>

      <article className="mission" data-num="03">
        <div className="mission-info">
          <p className="mission-label">{p.mission} 03 — Cégep Limoilou</p>
          <h3>{p.xeno.name}</h3>
          <p>{p.xeno.desc}</p>
          <ul className="tags">
            {['ESP32', 'C++ (Arduino)', 'PCA9685', 'PIR / HC-SR04', 'DFPlayer Mini'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="mission-visual gallery" onMouseMove={tilt} onMouseLeave={untilt}>
          <div className="gallery-frame">
            <img className="gallery-main" src={xenoPhotos[photo]} alt={p.xeno.photoAlt} loading="lazy" />
            <button
              type="button"
              className="gallery-arrow prev"
              aria-label="Photo précédente"
              onClick={() => setPhoto((n) => (n + xenoPhotos.length - 1) % xenoPhotos.length)}
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-arrow next"
              aria-label="Photo suivante"
              onClick={() => setPhoto((n) => (n + 1) % xenoPhotos.length)}
            >
              ›
            </button>
            <span className="gallery-count">{photo + 1} / {xenoPhotos.length}</span>
          </div>
          <div className="gallery-thumbs">
            {xenoPhotos.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === photo ? 'active' : ''}
                onClick={() => setPhoto(i)}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects
