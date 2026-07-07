import { useLanguage } from '../LanguageContext'

const user = 'brandonfotio'
const domain = 'gmail.com'

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <h2>{t.contact.title}</h2>
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
        <a className="btn" href="https://github.com/BrandonDRoger" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </section>
  )
}

export default Contact
