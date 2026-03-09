import ContactItem from './components/ContactItem'
import ProjectCard from './components/ProjectCard'
import SkillBadge from './components/SkillBadge'
import InfoRow from './components/InfoRow'
import Section from './components/Section'
import Tag from './components/Tag'
import { person, projects, skills, info, education } from './data/resumeData'

function App() {
  return (
    <div className="page">

      <div className="header">
        <div className="header-top">
          <div className="avatar">{person.initials}</div>
          <div>
            <h1>{person.name}</h1>
            <div className="role">{person.role}</div>
          </div>
        </div>
        <div className="contacts">
          {person.contacts.map((c, i) => (
            <ContactItem key={i} icon={c.icon} text={c.text} />
          ))}
        </div>
      </div>

      <div className="body">
        <div className="main">

          <Section title="Опыт работы">
            <p className="no-exp">В процессе поиска первой позиции.</p>
          </Section>

          <Section title="Учебные проекты">
            {projects.map((p, i) => (
              <ProjectCard key={i} title={p.title} tech={p.tech} period={p.period} description={p.description} />
            ))}
          </Section>

          <Section title="Образование">
            {education.map((e, i) => (
              <ProjectCard key={i} title={e.title} tech={e.tech} period={e.period} description={e.description} />
            ))}
          </Section>

        </div>

        <div className="sidebar">

          <Section title="Навыки">
            {skills.map((s, i) => (
              <SkillBadge key={i} name={s.name} level={s.level} />
            ))}
          </Section>

          <Section title="О себе">
            {info.map((r, i) => (
              <InfoRow key={i} label={r.label} value={r.value} />
            ))}
          </Section>

          <Section title="Ищу">
            <Tag text="Стажировка" />
            <Tag text="Junior позиция" />
            <Tag text="Практика" />
          </Section>

        </div>
      </div>

    </div>
  )
}

export default App
