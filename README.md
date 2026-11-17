# Jan Lloyd Cagoco — Portfolio

High-performance, editorial portfolio for Jan Lloyd Cagoco (Associate Developer at LGU Baggao · Cum Laude BS Computer Science, CSU Carig · Civil Service Professional). Built with Next.js 15, React 19, and Tailwind CSS 4.

## Architecture

- **Framework**: Next.js 15 (App Router) with Turbopack and React 19.
- **Styling**: Tailwind CSS 4 with custom theme tokens (`Paper` and `Graphite` palettes).
- **Static Generation**: All routes prerendered statically with shared JS bundle under ~101 kB.
- **Interactive Avatar**: Dynamic 2D canvas mouse-following tracking avatar with preloaded state sprites.
- **Contact**: Server route `/api/contact` powered by Resend with client validation.

## Routes

| Route | Description |
| :--- | :--- |
| `/` | Overview showcasing bio, recent projects, timeline summary, tech stacks, and credentials. |
| `/projects` | Complete catalog of municipal platforms, mobile apps, and developer tools. |
| `/experiences` | Detailed timeline for Employment, Education, and Honors & Awards. |
| `/stack` | Directory of languages, frameworks, developer tools, and AI platforms. |
| `/certifications` | Verified industry certifications with direct credential verification links. |
| `/inquiry` | Contact form for technical consulting and collaboration inquiries. |

## Development

```bash
# Install dependencies
npm install

# Start local dev server with Turbopack
npm run dev

# Production build & static export verification
npm run build
```
