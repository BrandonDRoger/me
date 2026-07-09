import { useLanguage } from '../LanguageContext'
import saturn from '../assets/astres/saturn.webp'
import jupiter from '../assets/astres/jupiter.webp'
import moon from '../assets/astres/moon.webp'
import neptune from '../assets/astres/neptune.webp'
import sun from '../assets/astres/cosmos/sun.webp'
import mercury from '../assets/astres/cosmos/mercury.webp'
import venus from '../assets/astres/cosmos/venus.webp'
import earth from '../assets/astres/cosmos/earth.webp'
import mars from '../assets/astres/cosmos/mars.webp'
import uranus from '../assets/astres/cosmos/uranus.webp'
import pluto from '../assets/astres/cosmos/pluto.webp'
import blackhole from '../assets/astres/cosmos/blackhole.webp'
import andromeda from '../assets/astres/cosmos/andromeda.webp'
import supernova from '../assets/astres/cosmos/supernova.webp'
import quasar from '../assets/astres/cosmos/quasar.webp'

const astres = {
  sun: { img: sun, link: 'https://science.nasa.gov/sun/' },
  mercury: { img: mercury, link: 'https://science.nasa.gov/mercury/' },
  venus: { img: venus, link: 'https://science.nasa.gov/venus/' },
  earth: { img: earth, link: 'https://science.nasa.gov/earth/' },
  moon: { img: moon, link: 'https://science.nasa.gov/moon/' },
  mars: { img: mars, link: 'https://science.nasa.gov/mars/' },
  jupiter: { img: jupiter, link: 'https://science.nasa.gov/jupiter/' },
  saturn: { img: saturn, link: 'https://science.nasa.gov/saturn/' },
  uranus: { img: uranus, link: 'https://science.nasa.gov/uranus/' },
  neptune: { img: neptune, link: 'https://science.nasa.gov/neptune/' },
  pluto: { img: pluto, link: 'https://science.nasa.gov/dwarf-planets/pluto/' },
  blackhole: { img: blackhole, link: 'https://science.nasa.gov/universe/black-holes/' },
  andromeda: { img: andromeda, link: 'https://science.nasa.gov/universe/galaxies/' },
  supernova: { img: supernova, link: 'https://science.nasa.gov/universe/stars/' },
  quasar: { img: quasar, link: 'https://en.wikipedia.org/wiki/Quasar' },
}

function Astro({ id }) {
  const { t } = useLanguage()
  const { img, link } = astres[id]
  const info = t.cosmos[id]

  return (
    <a
      className={`astro astro-${id}`}
      href={link}
      target="_blank"
      rel="noreferrer"
      title={`${info.name} — ${info.fact}`}
    >
      <img src={img} alt={info.name} />
    </a>
  )
}

export default Astro
