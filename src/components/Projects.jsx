import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import xeno1 from '../assets/xenomorph/xenomorph-1.jpg'
import xeno2 from '../assets/xenomorph/xenomorph-2.jpg'
import xeno3 from '../assets/xenomorph/xenomorph-3.jpg'
import xeno4 from '../assets/xenomorph/xenomorph-4.jpg'
import xeno5 from '../assets/xenomorph/xenomorph-5.jpg'
import xeno6 from '../assets/xenomorph/xenomorph-6.jpg'

const xenoPhotos = [xeno1, xeno2, xeno3, xeno4, xeno5, xeno6]

function Projects() {
  const { t } = useLanguage()
  const [photo, setPhoto] = useState(0)
  const p = t.projects

  return (
    <section id="projects" className="section">
      <h2>{p.title}</h2>
      <div className="projects">
        <article className="project">
          <div className="project-header">
            <h3>{p.magasin.name}</h3>
            <span className="badge">{p.production}</span>
          </div>
          <p className="project-context">{p.magasin.context}</p>
          <p>{p.magasin.desc}</p>
          <p className="project-result">→ {p.magasin.result}</p>
          <ul className="tags">
            {['C#', 'ASP.NET Web API', 'SQL Server', 'JavaScript', 'Razor'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>

        <article className="project">
          <div className="project-header">
            <h3>{p.primavera.name}</h3>
            <span className="badge">{p.production}</span>
          </div>
          <p className="project-context">{p.primavera.context}</p>
          <p>{p.primavera.desc}</p>
          <a href="https://www.academieprimavera.com/" target="_blank" rel="noreferrer">
            {p.primavera.linkLabel} ↗
          </a>
          <ul className="tags">
            {['React', 'Vite', 'JavaScript', 'CSS'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>

        <article className="project">
          <div className="project-header">
            <h3>{p.xeno.name}</h3>
          </div>
          <p className="project-context">{p.xeno.context}</p>
          <p>{p.xeno.desc}</p>
          <div className="gallery">
            <img className="gallery-main" src={xenoPhotos[photo]} alt={p.xeno.photoAlt} />
            <div className="gallery-thumbs">
              {xenoPhotos.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === photo ? 'active' : ''}
                  onClick={() => setPhoto(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
          <ul className="tags">
            {['ESP32', 'C++ (Arduino)', 'PCA9685', 'PIR / HC-SR04', 'DFPlayer Mini'].map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Projects
