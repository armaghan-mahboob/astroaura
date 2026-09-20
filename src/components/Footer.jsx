// src/components/Footer.jsx
import { useState } from "react";

const coreFeatures = [
  "Home",
  "AI Astrologer",
  "Birth Chart",
  "Daily Predictions",
  "Compatibility",
  "Remedies",
  "AI Chat",
];
const freeCalculators = [
  "Manglik Calculator",
  "Kaal Sarp Dosha",
  "Sade Sati Calculator",
  "Moon Sign Calculator",
  "Nakshatra Calculator",
  "Rising Sign Calculator",
  "Mahadasha Calculator",
  "Free Kundli",
  "Kundli Matching",
];
const dailyConsult = [
  "Daily Horoscope",
  "Today's Panchang",
  "Shubh Muhurat",
  "Talk to Astrologer",
  "Astrologer in Dubai",
  "Indian Astrologer in USA",
  "Astrology Worldwide",
];
const astrologyBlog = [
  "All Articles",
  "Fire Signs Explained",
  "Full Moon Guide",
  "Year-End Predictions",
  "Planetary Transits",
];
const insights = [
  "Career Guidance",
  "Love Life",
  "Health Insights",
  "Financial Forecast",
  "Spiritual Growth",
  "Life Path",
];
const support = [
  "About Us",
  "How It Works",
  "Ask Aura AI",
  "Pricing",
  "Founder's Note",
  "FAQ",
  "Contact Us",
  "Terms of Service",
  "Privacy Policy",
];

// Order matters: index i pairs with index i+3 in the desktop 3-column layout
const footerColumns = [
  { heading: "Core Features", links: coreFeatures },
  { heading: "Free Calculators", links: freeCalculators },
  { heading: "Daily & Consult", links: dailyConsult },
  { heading: "Astrology Blog", links: astrologyBlog },
  { heading: "Insights", links: insights },
  { heading: "Support", links: support },
];

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FooterCTA() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10 sm:py-6 max-w-10/12 sm:mx-auto">
      <h2 className="text-2xl font-extrabold sm:text-4xl">
        Ready to Transform Your Life?
      </h2>
      <p className="mt-3 text-white sm:text-lg">
        Join thousands who have discovered their true potential through Aura AI
      </p>

      <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-pink-500/50"
        />
        <button
          type="button"
          className="w-full shrink-0 rounded-xl bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.4)] transition-transform hover:scale-105 sm:w-auto"
        >
          Get Started
        </button>
      </div>

      <p className="mt-4 text-sm">Start your free consultation today</p>
    </div>
  );
}

function BrandBlock() {
  return (
    <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
      <a href="#" className="flex items-center">
        <img src="/favicon.png" alt="Aura AI" className="h-12 w-18" />
        <span className="text-xl font-bold text-white">Aura AI</span>
      </a>

      <p className="text-sm text-white/50">by Stratnova Technologies LLP</p>

      <p className="max-w-xs text-sm leading-relaxed text-white/70">
        Your trusted AI-powered astrology companion, providing personalized
        insights and guidance for your life journey.
      </p>

      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
        >
          <YoutubeIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function FooterLinkGroup({ heading, links }) {
  return (
    <div>
      <h3 className="text-base font-bold text-white">{heading}</h3>
      <ul className="mt-4 flex flex-col gap-1">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-white/60 hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesktopLinks() {
  return (
    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-x-10 lg:gap-y-10">
      <div className="row-span-2">
        <BrandBlock />
      </div>
      {footerColumns.map((group) => (
        <FooterLinkGroup
          key={group.heading}
          heading={group.heading}
          links={group.links}
        />
      ))}
    </div>
  );
}
function PlusMinusIcon({ open }) {
  return (
    <span className="text-xl font-light leading-none text-white/70">
      {open ? "−" : "+"}
    </span>
  );
}

function MobileAccordionItem({ heading, links, isOpen, onClick }) {
  return (
    <div className=" py-4 px-4">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-bold text-white">{heading}</span>
        <PlusMinusIcon open={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileLinks() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col lg:hidden">
      <BrandBlock />
      <div className="mt-8 flex flex-col">
        {footerColumns.map((group, i) => (
          <MobileAccordionItem
            key={group.heading}
            heading={group.heading}
            links={group.links}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
      <p>© 2026 Aura AI. All rights reserved.</p>
      <a href="mailto:contact@astroaura.ai" className="hover:text-white/80">
        contact@astroaura.ai
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-10 bg-[#111]">
      <div className="mx-auto max-w-7xl">
        <FooterCTA />

        <div className="mt-14 text-center">
          <h2 className="text-3xl font-extrabold sm:text-3xl">
            Explore Aura AI
          </h2>
          <p className="mt-3 text-white/70 sm:text-lg">
            Discover all our features and services
          </p>
        </div>

        <div className="mt-12 sm:px-20">
          <DesktopLinks />
          <MobileLinks />
        </div>
        <div className="sm:px-20">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
