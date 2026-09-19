# AstroAura-State

## Status

Landing page in progress.

## Completed

- Vite + React
- JavaScript/JSX
- Tailwind CSS
- Navbar + Hero section
- Features section
- Tarot section
- Kundli section
- Global Trust section
- Global Use Cases section
- Testimonials section

## Current

Testimonials section completed.

## Next

Blog Strip.

## Planned Order

Hero → Features → Tarot → Kundli → Global Trust → Global Use Cases → Testimonials → Blog Strip → Mobile App → UAA → FAQ → Footer

## Issues

None.

## Decisions

- JS/JSX only.
- Build one component at a time from reference images.
- GitHub repository is implementation source of truth.
- Build UI from the outside inward.
- Use shadcn where applicable.
- Avoid excessive abstraction.
- Hero split into Navbar.jsx, LeftHero.jsx, RightHero.jsx, Planets.jsx, composed in Hero.jsx.
- Hero uses flexbox instead of grid.
- Cycling content uses useState + setInterval + opacity fade, no animation libraries.
- Icons are inline SVG.
- Background image: public/hero-bg.png.
- Planets use pre-rotating .webp assets, not CSS spin animation.
- Tarot.jsx contains tarot subcomponents in one file.
- Tarot data lives in src/data/tarotCards.js.
- Tarot selection state is an ordered `{ id, reversed }` array mapped to Past/Present/Future.
- Reversed cards affect badge/meaning only; images are never rotated.
- Kundli.jsx contains its related subcomponents in one file.
- Kundli uses custom dropdowns instead of native select.
- Saved Kundli currently has no persistence.
- Global Trust marquee uses requestAnimationFrame and position-based CSS transforms; no animation library.
- Global Trust marquee uses requestAnimationFrame for continuous infinite horizontal scrolling.
- Global Trust hover pauses/resumes the marquee.
- Global Trust cards use position-based 3D perspective transforms (`rotateY`, `rotateX`, `scale`) based on distance from center.
- Global Trust cards flatten at center and gradually tilt/scale toward the edges.
- Global Trust animation uses JavaScript + requestAnimationFrame + CSS transforms; no animation library.
- GlobalUseCases.jsx contains its subcomponents (PanelContent, DesktopPanel, MobilePanel) in one file.
- GlobalUseCases uses dummy image/text data in-file; real data to be swapped in later.
- Desktop accordion uses CSS `flex-grow` transitions for panel width, driven by a self-rescheduling `setTimeout` (not `setInterval`) plus a `pausedRef` for hover pause/resume.
- Desktop auto-cycle: 5s interval, hover immediately opens that panel and pauses the cycle, leaving resumes the cycle from the hovered panel.
- Desktop panel text reveal uses a nested grid (`grid-cols-[0fr]/[1fr]`) with an outer `min-w-0` wrapper (lets the track collapse to 0) and an inner `min-w-max` wrapper (keeps text at fixed intrinsic width so it clips/reveals instead of reflowing).
- Mobile accordion has fully independent state from desktop; no auto-cycle, no shared timer, tap-to-open/close only.
- Testimonials.jsx uses requestAnimationFrame marquee (same seamless 3x-loop pattern as Global Trust), but never pauses on hover.
- Testimonials avatars are CSS initials-on-gradient-circle (no image assets yet); dummy quote/name data lives in-file.
- Testimonial card hover uses a direct border-color + box-shadow glow on the card itself (no separate blurred glow element).
