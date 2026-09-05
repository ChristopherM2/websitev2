import { profile } from '../data/content.js'
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, SparkIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact__card" data-reveal>
          <SparkIcon className="contact__spark" />
          <p className="section__eyebrow">05 — Contact</p>
          <h2 className="contact__title">Let’s build something.</h2>
          <p className="contact__lead">
            I just wrapped up my degree and I’m looking for new grad software roles. If you’re hiring — or just want to
            argue about heuristics — my inbox is open.
          </p>

          <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
            <MailIcon className="icon-sm" />
            {profile.email}
            <ArrowIcon className="icon-sm" />
          </a>

          <ul className="contact__list">
            <li>
              <PhoneIcon className="icon-sm" />
              <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            </li>
            <li>
              <PinIcon className="icon-sm" />
              <span>{profile.location}</span>
            </li>
          </ul>

          <p className="contact__openTo">{profile.openTo}</p>

          <div className="contact__socials">
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="icon-sm" />
              GitHub
            </a>
            <a className="btn btn--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon className="icon-sm" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
