import { skills } from '../data/content.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 — Skills"
      title="The toolkit"
      lead="What I reach for, roughly in order of how often I reach for it."
    >
      <div className="skills">
        {skills.map((group, index) => (
          <div className="skills__group" key={group.group} data-reveal style={{ '--delay': `${index * 80}ms` }}>
            <h3 className="skills__title">{group.group}</h3>
            <ul className="tags tags--lg">
              {group.items.map((item) => (
                <li className="tag" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
