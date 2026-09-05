import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="footer__built">Built with React + Vite</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
