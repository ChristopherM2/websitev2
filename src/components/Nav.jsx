import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useReveal.js'
import { CloseIcon, DownloadIcon, MenuIcon } from './Icons.jsx'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const sectionIds = links.map((link) => link.id)

export default function Nav() {
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useActiveSection(sectionIds, setActive)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark">CM</span>
          <span className="nav__brandText">Christopher Matheson</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="nav__resume" href={profile.resume} download onClick={() => setOpen(false)}>
            <DownloadIcon className="icon-sm" />
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
