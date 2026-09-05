import { experience } from '../data/content.js'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 — Experience"
      title="Where I've worked"
      lead="Backend services, mechanical prototypes, and three years of teaching first-years how to debug."
    >
      <ol className="timeline">
        {experience.map((job, index) => (
          <li className="timeline__item" key={job.company + job.role} data-reveal style={{ '--delay': `${index * 90}ms` }}>
            <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} aria-hidden="true" />

            <div className="timeline__card">
              <div className="timeline__head">
                <div>
                  <h3 className="timeline__role">{job.role}</h3>
                  <p className="timeline__company">
                    {job.company}
                    <span className="timeline__sep" aria-hidden="true">·</span>
                    <span className="timeline__location">{job.location}</span>
                  </p>
                </div>
                <p className="timeline__period">{job.period}</p>
              </div>

              <ul className="timeline__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 28)}>{bullet}</li>
                ))}
              </ul>

              <ul className="tags">
                {job.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
