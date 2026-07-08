import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import useReveal from '../useReveal'
import neptune from '../assets/astres/neptune.jpg'

const user = 'brandonfotio'
const domain = 'gmail.com'

function Contact() {
  const { t } = useLanguage()
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(`${user}@${domain}`).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="section contact reveal" ref={ref}>
      <img className="astro astro-neptune" src={neptune} alt="" aria-hidden="true" />
      <h2 data-ghost={t.contact.ghost}>{t.contact.title}</h2>
      <p className="contact-big">{t.contact.big}</p>
      <p>{t.contact.text}</p>
      <div className="contact-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            window.location.href = `mailto:${user}@${domain}`
          }}
        >
          {t.contact.emailBtn}
        </button>
        <button type="button" className="btn" onClick={copyEmail}>
          {copied ? t.contact.copied : t.contact.copy}
        </button>
        <a className="btn" href="https://github.com/BrandonDRoger" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
