import { useState } from "react";

const navLinks = [
  { label: "Reports", href: "#" },
  { label: "Birth Chart", href: "#" },
  { label: "Chat", href: "#" },
  { label: "Call", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Blog", href: "#" },
];

const dropdownLinks = [
  {
    label: "Calculators",
    items: ["Love Calculator", "Numerology", "Kundli Matching"],
  },
  { label: "Learn More", items: ["About Us", "Blog", "FAQ"] },
];

function ChevronDownIcon({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20" />
    </svg>
  );
}

function NavDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <ChevronDownIcon
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 rounded-xl border border-white/10 bg-[#1a0e2e]/95 p-2 shadow-xl backdrop-blur-md">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-[0_0_25px_rgba(168,60,255,0.25)] backdrop-blur-md sm:px-6">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <img src="/favicon.svg" alt="Aura AI" className="h-8 w-8" />
          <span className="text-lg font-bold text-white">Aura AI</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {dropdownLinks.map((dropdown) => (
            <NavDropdown
              key={dropdown.label}
              label={dropdown.label}
              items={dropdown.items}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 sm:flex"
          >
            <GlobeIcon />
            EN
          </button>
          <span className="hidden h-6 w-px bg-white/15 sm:block" />
          <a
            href="#"
            className="rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.4)] transition-transform hover:scale-105"
          >
            Ask Aura AI
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
