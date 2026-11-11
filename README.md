# Mohammed Fazil — Software Engineer Portfolio

A dark, developer-themed portfolio built with React, Vite, and three.js — centred headline over a looping terminal, an editorial work ledger, and a microservices constellation rendered behind the hero.

## Tech Stack

- React 19
- Vite 8
- three.js (lazy-loaded scene)
- Plain CSS (design tokens, no framework)
- Geist & Geist Mono
- Lucide React, React Icons

## Sections

- **Hero** — name, headline, and a live terminal window over a drifting three.js constellation of service nodes
- **Work** — selected projects (TinyURL, DocFlow) and an experience ledger
- **Contact** — dark closing band with links and colophon

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Lint and build:

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
├── assets/          # logo, favicon
├── components/      # Navbar, Scene3D (three.js constellation)
├── sections/        # Hero, Work, Contact
├── App.jsx
├── main.jsx
└── index.css        # full design system (tokens, sections, motion)
```

## Notes

- The three.js scene is code-split into its own chunk and respects `prefers-reduced-motion`, pauses when the tab is hidden, and caps pixel ratio for high-DPI screens.

## Deployment

A static Vite build — deploy the `dist/` folder to Vercel, Netlify, or any static host:

```bash
npm run build
```

---

Built with React, three.js, Geist & Geist Mono.
