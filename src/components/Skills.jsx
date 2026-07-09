import { useLanguage } from '../LanguageContext'
import useReveal from '../useReveal'
import java from '../assets/logos/java.svg'
import csharp from '../assets/logos/csharp.svg'
import kotlin from '../assets/logos/kotlin.svg'
import javascript from '../assets/logos/javascript.svg'
import html5 from '../assets/logos/html5.svg'
import css3 from '../assets/logos/css3.svg'
import c from '../assets/logos/c.svg'
import spring from '../assets/logos/spring.svg'
import dotnet from '../assets/logos/dotnet.svg'
import react from '../assets/logos/react.svg'
import flutter from '../assets/logos/flutter.svg'
import sqlserver from '../assets/logos/sqlserver.svg'
import mysql from '../assets/logos/mysql.svg'
import postgresql from '../assets/logos/postgresql.svg'
import linux from '../assets/logos/linux.svg'
import windows from '../assets/logos/windows.svg'
import git from '../assets/logos/git.svg'
import gitlab from '../assets/logos/gitlab.svg'
import github from '../assets/logos/github.svg'
import cisco from '../assets/logos/cisco.svg'
import claude from '../assets/logos/claude.svg'
import Astro from './Astro'

function Skills() {
  const { t } = useLanguage()
  const ref = useReveal()
  const s = t.skills

  const categories = [
    {
      title: s.languages,
      items: [
        { name: 'Java', logo: java },
        { name: 'C#', logo: csharp },
        { name: 'Kotlin', logo: kotlin },
        { name: 'JavaScript', logo: javascript },
        { name: 'HTML5', logo: html5 },
        { name: 'CSS', logo: css3 },
        { name: 'C', logo: c },
      ],
    },
    {
      title: s.frameworks,
      items: [
        { name: 'Spring Boot', logo: spring },
        { name: 'ASP.NET', logo: dotnet },
        { name: 'React', logo: react },
        { name: 'Flutter', logo: flutter },
      ],
    },
    {
      title: s.databases,
      items: [
        { name: 'SQL Server', logo: sqlserver },
        { name: 'MySQL', logo: mysql },
        { name: 'PostgreSQL', logo: postgresql },
      ],
    },
    {
      title: s.network,
      items: [
        { name: 'Linux', logo: linux },
        { name: 'Windows Server', logo: windows },
        { name: 'Cisco', logo: cisco },
      ],
      extras: s.networkExtras,
    },
    {
      title: s.ai,
      items: [{ name: 'Claude', logo: claude }],
      extras: s.aiExtras,
    },
    {
      title: s.tools,
      items: [
        { name: 'Git', logo: git },
        { name: 'GitHub', logo: github },
        { name: 'GitLab', logo: gitlab },
      ],
      extras: s.toolsExtras,
    },
  ]

  return (
    <section id="skills" className="section reveal" ref={ref}>
      <Astro id="moon" />
      <Astro id="mercury" />
      <Astro id="uranus" />
      <Astro id="quasar" />
      <h2 data-ghost={s.ghost}>{s.title}</h2>
      <div className="skills-grid">
        {categories.map((cat) => (
          <div className="skill-card" key={cat.title}>
            <h3>{cat.title}</h3>
            <ul className="logo-grid">
              {cat.items.map((item) => (
                <li key={item.name}>
                  <img src={item.logo} alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            {cat.extras && (
              <ul className="tags">
                {cat.extras.map((extra) => (
                  <li key={extra}>{extra}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
