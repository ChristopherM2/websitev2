import { profile, stats } from '../data/content.js'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="hero__status" data-reveal>
          <span className="dot" aria-hidden="true" />
          {profile.status}
        </p>

        <h1 className="hero__name" data-reveal style={{ '--delay': '60ms' }}>
          {profile.name}
        </h1>

        <p className="hero__role" data-reveal style={{ '--delay': '120ms' }}>
          <span className="hero__roleText">{profile.role}</span>
          <span className="hero__pronouns">{profile.pronouns}</span>
        </p>

        <p className="hero__tagline" data-reveal style={{ '--delay': '180ms' }}>
          {profile.tagline}
        </p>

        <div className="hero__actions" data-reveal style={{ '--delay': '240ms' }}>
          <a className="btn btn--primary" href="#projects">
            View my work
            <ArrowIcon className="icon-sm" />
          </a>
          <a className="btn" href={profile.resume} download>
            <DownloadIcon className="icon-sm" />
            Download resume
          </a>
          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon className="icon-sm" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="icon-sm" />
            </a>
          </div>
        </div>

        <dl className="hero__stats" data-reveal style={{ '--delay': '320ms' }}>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat__value">{stat.value}</dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
