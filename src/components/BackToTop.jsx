import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'

function BackToTop() {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={show ? 'to-top show' : 'to-top'}
      aria-label={t.toTop}
      title={t.toTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      🚀
    </button>
  )
}

export default BackToTop
