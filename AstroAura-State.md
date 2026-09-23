# AstroAura-State

## Status

Landing page complete (Hero → Footer). AI Chatbot feature complete and deployed live. Responsive mobile navbar added. Hero background + Planets responsive behavior fixed. Tarot section reading flow (pick → reveal full reading in-place) complete.

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
- FAQ section
- Footer section
- Responsive mobile/tablet navbar with slide-out drawer
- React Router added; landing page moved to `Chat.jsx`'s sibling route
- AI Chatbot (`/chat` route) — full serverless backend + UI, wired to all "Ask"/"Ask AI" buttons site-wide
- Tarot reading flow: pick 3 cards → "Get free reading" swaps the selected card slots from short meaning to full per-position reading (Past/Present/Future) in place, then shows the Together summary + "Draw new cards" + "Know more" CTAs

## Current

Full landing page order finished. AI Chatbot live on production (`/chat`), backed by a Vercel serverless function calling Google Gemini. All "Ask Aura AI" CTAs across the site (Navbar desktop/mobile, LeftHero, FeatureCarousel) navigate to `/chat`. Logo navigation bug (broken `<a href="#">` not intercepted by router) fixed. Tarot "Get free reading" now morphs the existing three selected card slots into their full readings instead of rendering a duplicate reading card grid below.

## Next

Open — no confirmed next milestone yet (e.g. polish pass, chat persistence, new page, backend integration).

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
- Planets use pre-rotating .webp assets, not CSS spin animation.
- Tarot.jsx contains tarot subcomponents in one file.
- Tarot data lives in src/data/tarotCards.js.
- Tarot selection state is an ordered `{ id, reversed }` array mapped to Past/Present/Future.
- Reversed cards affect badge/meaning only; images are never rotated.
- Tarot card slots have two layouts inside the same `CardSlot` component: the original compact meaning layout (image + label + name + short meaning) and a reading layout (stacked, centered, full reading text). The `showReading` flag toggles between them; no separate reading-card component is rendered.
- `CardSlot` receives `showReading` and `position` props; when `showReading` is true it swaps the short meaning for `getCardReading(selection, position)`.
- The standalone `ReadingCard` component was removed; readings now render inside the existing three selected card slots.
- `TarotReading` only contains the Together summary, "Draw new cards" block, and "Know more" block — no duplicate card grid.
- "Get free reading" toggles `showReading`; the deck and the TarotActions bar disappear, and the three selected slots morph into their full readings in place.
- "Shuffle Again" / "Draw new cards" both reset `selected` and `showReading`, returning to the deck view.
- Card selection is locked once `showReading` is true (`handleToggle` early-returns).
- Together container, "Want another reading?" container, and "Know about your future…" container use inline-style → Tailwind arbitrary-value translations for their gradients/borders (no new utility layer added).
- "Know more" CTA is now a `<Link to="/chat">` (react-router-dom), matching the site-wide Ask Aura AI CTA pattern.
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
- Footer.jsx contains all its subcomponents (icons, FooterCTA, BrandBlock, FooterLinkGroup, DesktopLinks, MobileAccordionItem, MobileLinks, FooterBottom) in one file.
- Footer desktop layout is 4 columns: BrandBlock + 3 columns, each column stacking 2 link groups vertically (Core Features/Astrology Blog, Free Calculators/Insights, Daily & Consult/Support).
- Footer mobile layout flattens all 6 link groups into a single-open accordion (same grid-rows pattern as FAQ), with brand block above it.
- Footer accordion `+`/`−` uses plain text characters, not SVG (distinct from FAQ's div-based icon).
- Footer link data (coreFeatures, freeCalculators, dailyConsult, astrologyBlog, insights, support) lives in-file; dummy hrefs (`#`) throughout.
- Footer CTA email input has no submit handler yet — visual only, matching current milestone scope.
- Navbar.jsx now contains both desktop nav (unchanged) and a separate mobile/tablet layout (logo + Chat pill + hamburger) gated with `hidden`/`lg:flex`/`lg:hidden`.
- Mobile drawer (`MobileDrawer` inside Navbar.jsx) is a right-side slide-out panel, always mounted and toggled via translate-x transform for smooth open/close animation.
- Drawer content: header (logo + close), Sign in/Sign up CTA, CONSULT group, FREE TOOLS group, EN button — grouped/icon data (`consultItems`, `toolItems`, `iconMap`) lives in-file.
- Hero background is split into two sibling layers instead of one media-queried element: a desktop layer (`hidden … lg:block`) and a tablet/mobile layer (`lg:hidden`), each with its own geometry and image so the two layouts never fight overrides.
- Desktop hero background: `120vw × 119vh` (min-height 780px) ellipse, shifted up `top: -30vh` and centered with `-translate-x-1/2`, `rounded-[50%]`, overflow hidden. Image: `public/hero-bg.png` (1081×613), `bg-center`.
- Tablet/mobile hero background: full-bleed `inset-0` panel with bottom curve `rounded-[0_0_50%_50%/0_0_90px_90px]`, `overflow-hidden`. Uses `inset-0` (not a fixed vh height) so the layer always stretches to the full section height and stays behind `RightHero` regardless of how tall the chat card gets.
- Tablet/mobile hero image: `public/bg-cosmic.webp` (768×1376 portrait), anchored `bg-top` so the subject isn't cut off; `bg-cover`.
- Both hero background layers carry `filter: brightness(.52) saturate(1.06) contrast(1.04)` and a `from-black/90 via-black/20 to-black/10` gradient overlay.
- Hero content wrapper uses `items-center` on the flex column so `LeftHero` + `RightHero` are centered on tablet/mobile; `lg:items-start lg:justify-center` restores the original left-aligned desktop layout.
- Planets is desktop-only: root uses `hidden … lg:block` (was `md:block`, which leaked it into the tablet breakpoint).
- `react-router-dom` added; landing page content moved unchanged from `App.jsx` into `src/components/Landing.jsx`; `App.jsx` now only defines `<Routes>` (`/` → Landing, `/chat` → Chat).
- Chatbot backend: single Vercel serverless function `api/chat.js`, using `@google/genai` SDK, model `gemini-3.6-flash`, key stored as `GEMINI_API_KEY` env var (Vercel dashboard, all environments).
- `eslint.config.js` has a separate Node-globals override for `api/**/*.js` (browser-globals block excludes it) so `process` isn't flagged.
- Chat.jsx reuses existing visual language (RightHero-style bubbles/typing dots, Kundli/Tarot-style input): full-height standalone page with Navbar on top, message list, intro AI bubble, pill-shaped input bar with send/arrow icon (not mic — swapped after initial build to match reference).
- All "Ask"/"Ask AI" CTAs site-wide (Navbar desktop CTA + mobile Chat pill + drawer Chat item, LeftHero CTA, FeatureCarousel card buttons) route to `/chat` via `Link`/`useNavigate`.
- Navbar logo now uses `<Link to="/">` instead of `<a href="#">` (previous bug: clicking it while on `/chat` just appended `#` to the URL instead of navigating home).
