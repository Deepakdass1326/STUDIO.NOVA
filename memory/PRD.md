# Studio Nova — Agency Website

## Problem Statement
Build a fullstack agency website (modern, aesthetic, authentic — not a SaaS look) with GSAP, Three.js, smooth subtle animations and lazy loading.

## User Choices
- Web development/Tech + Creative/Design hybrid agency
- All sections: Home (hero), About, Services, Work/Portfolio, Process, Team, Contact
- Static contact form (no backend persistence)
- Visual style: "you decide" → dark, bold, cinematic Swiss/editorial

## Architecture
- Frontend: React 19 + CRA (craco), TailwindCSS, Shadcn UI primitives, Sonner for toasts
- Animation stack: GSAP (+ScrollTrigger), Lenis (smooth scroll), @react-three/fiber@9 + three
- Lazy loading: React.lazy + Suspense for all below-the-fold sections and the Three.js canvas
- Backend: FastAPI (untouched — contact form is purely client-side per user)
- Single-page scrolling site at `/` with anchor navigation

## Implemented (2026-02)
- Preloader with animated counter (GSAP)
- Lenis smooth scroll wrapper + anchor link interception
- Custom GSAP cursor (dot + ring) with hover state change
- Fixed glass navbar with mobile drawer and section anchors
- Hero with Three.js (icosahedron wireframe + torus knot + particle field) and staggered text reveal
- Infinite client marquee
- About manifesto with word-by-word scrub opacity reveal + stats counter section
- Services list with hover-fill rows and animated entry
- Work / Portfolio bento grid (4 case studies) with lazy `loading="lazy"` imgs and hover zoom
- Process 4-phase grid
- Team 3-card grid with grayscale → color on hover
- Static contact form with sonner toast on submit (validates name/email/brief)
- Footer with massive brand wordmark + sitemap + colophon
- Acid lime accent (#D3FF24) over void black, Unbounded + Manrope + JetBrains Mono

## Backlog (P1)
- Page transitions between potential future case study pages
- Live "now playing" Spotify or weather widget in footer
- Real CMS integration for case studies

## Backlog (P2)
- WebGL distortion on hero text on hover
- Cursor magnetic effect on CTAs
- Localisation (EN/IS/PT)
