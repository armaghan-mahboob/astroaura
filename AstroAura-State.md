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
- Blog Strip section
- Mobile App section
- Understand AI Astrology (UAA) section
- FAQ section (Milestone 1: layout, accordion behavior, icons)

## Current

FAQ Milestone 1 completed.

## Next

FAQ Milestone 2 (if any refinements) or Footer.

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
- Global Trust hover pauses/resumes the marquee.
- Global Trust cards use position-based 3D perspective transforms (`rotateY`, `rotateX`, `scale`) based on distance from center.
- GlobalUseCases.jsx contains its subcomponents (PanelContent, DesktopPanel, MobilePanel) in one file.
- GlobalUseCases uses dummy image/text data in-file; real data to be swapped in later.
- Desktop accordion uses CSS `flex-grow` transitions driven by a self-rescheduling `setTimeout` plus a `pausedRef` for hover pause/resume.
- Mobile accordion has fully independent state from desktop; tap-to-open/close only, no auto-cycle.
- Testimonials.jsx uses requestAnimationFrame marquee (same seamless 3x-loop pattern as Global Trust), but never pauses on hover.
- Testimonials avatars are CSS initials-on-gradient-circle; dummy quote/name data lives in-file.
- BlogStrip.jsx uses horizontal scroll (snap-x, overflow-x-auto), not a marquee — user-driven scroll, not auto-play.
- BlogStrip desktop card width uses `calc((100%-60px)/4)` so exactly 4 cards fill the row regardless of screen width, with extra cards revealed by scrolling.
- BlogStrip mobile uses fixed `w-72` peek-carousel width (partial next card visible), matching reference.
- BlogStrip dummy data/images live in-file; real posts to be swapped in later.
- MobileApp.jsx contains its subcomponents (StoreButton, DeviceStack, icons) in one file.
- Device stack uses absolute positioning with inline-computed `transform`/`zIndex`, not stacked Tailwind transform classes.
- Hover-to-front/scale effect on device stack is desktop-only (`matchMedia` gated at the `lg` breakpoint) to prevent tap-triggered hover states on touch devices.
- UAA.jsx contains all its subcomponents (badges, steps, topic cards, checklist) in one file, built across 3 reference images in stacked card sections.
- UAA topic grid ("What Can You Ask") is 1/2/3 columns at mobile/tablet/desktop.
- UAA "Why Choose Aura AI" checklist is a flat 2-column grid (left items then right items), 1 column on mobile.
- FAQ.jsx contains all its subcomponents (icons, PlusMinusIcon, FAQItem) in one file, following the UAA/Tarot single-file pattern.
- FAQ is single-open accordion (opening one closes any other open item); first item open by default.
- FAQ height animation uses CSS grid-rows (`[0fr]`/`[1fr]`) trick, no animation library.
- FAQ `+`/`−` toggle built from two plain divs (horizontal + vertical bar), not SVG.
- FAQ card background uses solid translucent magenta (`bg-[#5c1a48]/70`), distinct from other sections' `bg-white/5` cards, to match reference.
- FAQ icons are inline SVG matching the outline style of other icon components; dummy Q&A data lives in-file.
