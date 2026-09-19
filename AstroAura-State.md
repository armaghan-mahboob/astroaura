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
- Features section (heading, marquee stats, feature carousel)
- Tarot section: heading/subtext/input, 3 selected-card slots (responsive), 78-card overlapping deck with hover pop, select/remove/compaction logic, real front-face card art (full 78-card Rider-Waite-Smith deck sourced and integrated), Get Reading / Shuffle Again buttons with count-based states

## Current

Kundli section.

## Next

Kundli section.

## Planned Order

Hero → Features → Tarot → Kundli → Global Trust → Global Use Cases → Testimonials → Blog Strip → Mobile App → UAA → FAQ → Footer

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
- body background set to cosmic.
- Fixed all layout issues (verify against GitHub code)
- Tarot.jsx holds all tarot subcomponents (CardSlot, CardFace, Deck, DeckRow, TarotActions) in one file — not split into separate files, per "avoid excessive abstraction."
- Tarot card data lives in src/data/tarotCards.js (full 78-card RWS deck: name, slug, meaning); getCardById(id) maps deck index 0–77 directly to a card.
- Card images at public/tarot/<slug>.jpg — full 78-card public-domain Rider-Waite-Smith set sourced from a GitHub mirror (mixvlad/TarotCards, originally Wikimedia Commons) and renamed to match slugs.
- Tarot selection state is an ordered array of { id, reversed } in Tarot.jsx; index position maps directly to Past/Present/Future slots, so removing an item naturally compacts the array.
- Reversed status is randomized (~50%) per selection; reversed only affects badge/meaning text and image is never rotated.
- Shuffle Again clears the current selection (available once count > 0); "Get free reading" only enables at 3/3 chosen. Reading logic itself not yet implemented.
