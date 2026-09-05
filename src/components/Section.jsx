export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="shell">
        <header className="section__head" data-reveal>
          <p className="section__eyebrow">{eyebrow}</p>
          <h2 className="section__title">{title}</h2>
          {lead ? <p className="section__lead">{lead}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
