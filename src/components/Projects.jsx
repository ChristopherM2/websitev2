import { useMemo, useState } from 'react'
import { profile, projectFilters, projects } from '../data/content.js'
import Section from './Section.jsx'
import { ArrowIcon, GitHubIcon } from './Icons.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title="Things I've built"
      lead="Hackathon weekends, course projects, and a few things that started as a joke and got out of hand."
    >
      <div className="filters" data-reveal role="tablist" aria-label="Filter projects by category">
        {projectFilters.map((name) => (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={filter === name}
            className={`filter ${filter === name ? 'is-active' : ''}`}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="projects">
        {visible.map((project, index) => (
          <a
            className={`project ${project.featured ? 'project--featured' : ''}`}
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ '--delay': `${index * 70}ms` }}
          >
            <div className="project__top">
              <GitHubIcon className="project__source" />
              <span className="project__period">{project.period}</span>
              <ArrowIcon className="project__arrow" />
            </div>

            {project.badge ? <p className="project__badge">{project.badge}</p> : null}

            <h3 className="project__name">{project.name}</h3>
            <p className="project__blurb">{project.blurb}</p>

            <ul className="tags">
              {project.tags.map((tag) => (
                <li className="tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <p className="projects__more" data-reveal>
        More experiments, coursework and LeetCode grinding live on{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </Section>
  )
}
