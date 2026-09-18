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
- Hero planets (9 planets positioned along curve, pre-animated .webp assets, hover lift effect)

## Current

Hero section fully complete (Navbar + Left + Right + Planets).

## Next

Features section.

## Planned Order

Hero → Features → Tarot → Global Trust → Global Use Cases → Testimonials → Blog Strip → Mobile App → UAA → FAQ → Footer

## Issues

None.

## Decisions

- JS/JSX only.
- Build one component at a time from reference images.
- GitHub repository is implementation source of truth.
- Hero split into Navbar.jsx, LeftHero.jsx, RightHero.jsx, Planets.jsx, composed in Hero.jsx.
- Hero uses flexbox (not grid) for Left/Right layout so sections size to content instead of fixed column fractions.
- Cycling text/content (LeftHero heading, RightHero conversations) done via useState + setInterval + opacity fade, no animation libraries.
- Icons are inline SVG, no icon library added.
- Background image at public/hero-bg.png.
- Planets use pre-rotating .webp assets (no CSS spin animation) at public/planets/\*.webp, positioned via percentage coordinates sampled from the curve's bezier path.
- Hero content wrapper (Navbar + Left/Right) uses pointer-events-none/auto split so empty space doesn't block hover/clicks on planets underneath.
- body background set to brand purple (#5E155F) as a backstop against overflow flashing white.
