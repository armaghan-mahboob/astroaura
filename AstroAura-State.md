# AstroAura-State

## Status

Landing page in progress.

## Completed

- Vite + React
- JavaScript/JSX
- Tailwind CSS
- Navbar (fixed/sticky, part of Hero section)
- Hero background (image + blur/overlay + curved bottom edge)
- Hero left section (rating badge, heading with cycling text, checklist, CTA)
- Hero right section (rotating chat UI mockup)

## Current

Hero section core layout complete (Navbar + Left + Right). Spinning planet GIFs along the curved bottom edge not yet implemented.

## Next

Planets (spinning GIFs positioned along/below the hero's curved bottom edge), then Features section.

## Planned Order

Hero → Features → Tarot → Global Trust → Global Use Cases → Testimonials → Blog Strip → Mobile App → UAA → FAQ → Footer

## Issues

None.

## Decisions

- JS/JSX only.
- Build one component at a time from reference images.
- GitHub repository is implementation source of truth.
- Hero split into Navbar.jsx, LeftHero.jsx, RightHero.jsx, composed in Hero.jsx.
- Hero uses flexbox (not grid) for Left/Right layout so sections size to content instead of fixed column fractions.
- Cycling text/content (LeftHero heading, RightHero conversations) done via useState + setInterval + opacity fade, no animation libraries.
- Icons are inline SVG, no icon library added.
- Background image at public/hero-bg.png.
