# Christopher Matheson — Portfolio

Personal portfolio site built with React 19 + Vite.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
npm run lint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/content.js` | **All site content** — bio, experience, projects, skills, contact details. Edit here, not in the components. |
| `src/components/` | One component per section (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`) plus `Nav`, `Footer`, `Section`, and inline SVG `Icons`. |
| `src/hooks/useReveal.js` | Scroll-reveal animations and nav active-section tracking, both via `IntersectionObserver`. Respects `prefers-reduced-motion`. |
| `src/index.css` | Design tokens (colors, type, spacing) and base styles. |
| `src/App.css` | Section and component styles. |
| `public/Christopher-Matheson-Resume.pdf` | The file behind every "Resume" button. Replace it in place to update. |

## Common edits

- **Add a project** — append an object to `projects` in `src/data/content.js`. Set `category` to one of the values in `projectFilters`, and `featured: true` to make the card span two columns.
- **Update the resume** — overwrite `public/Christopher-Matheson-Resume.pdf`, keeping the filename.
- **Change the accent color** — edit `--accent`, `--accent-soft` and `--gradient` in `src/index.css`.

## Deploying

The build is fully static. `npm run build`, then serve `dist/` from Netlify, Vercel, GitHub Pages, or any static host.
