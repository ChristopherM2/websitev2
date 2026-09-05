import { about, education } from '../data/content.js'
import Section from './Section.jsx'
import { CapIcon } from './Icons.jsx'

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Two majors, one habit: take it apart and see how it works.">
      <div className="about">
        <div className="about__prose">
          {about.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} data-reveal style={{ '--delay': `${index * 80}ms` }}>
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="card card--education" data-reveal style={{ '--delay': '120ms' }}>
          <CapIcon className="card__icon" />
          <p className="card__kicker">Education</p>
          <h3 className="card__title">{education.school}</h3>
          <p className="card__meta">{education.location}</p>
          <p className="card__body">{education.degree}</p>
          <p className="card__detail">{education.detail}</p>
          <p className="card__period">{education.period}</p>
        </aside>
      </div>
    </Section>
  )
}
