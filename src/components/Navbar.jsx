import { useEffect, useState } from "react";

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

const consultItems = [
  { label: "Chat", icon: "chat" },
  { label: "Reports", icon: "document" },
  { label: "Birth Chart", icon: "chart" },
  { label: "Talk to an Astrologer", icon: "phone" },
];

const toolItems = [
  { label: "Calculators", icon: "calculator", badge: "10", expandable: true },
  { label: "Daily Horoscope", icon: "sun" },
  { label: "Panchang", icon: "calendar" },
  { label: "Muhurat", icon: "clock" },
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

function ChevronRightIcon({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 6 15 12 9 18" />
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

function ChatIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="gold"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-8 8H5.5a1 1 0 0 1-.8-1.6L6 16.4A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function UserIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

function DocumentIcon({ className }) {
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
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function ChartIcon({ className }) {
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
      <line x1="6" y1="20" x2="6" y2="12" />
      <line x1="12" y1="20" x2="12" y2="6" />
      <line x1="18" y1="20" x2="18" y2="15" />
    </svg>
  );
}

function PhoneIcon({ className }) {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
    </svg>
  );
}

function CalculatorIcon({ className }) {
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
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="11" x2="8" y2="11" />
      <line x1="12" y1="11" x2="12" y2="11" />
      <line x1="16" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="8" y2="15" />
      <line x1="12" y1="15" x2="12" y2="15" />
      <line x1="16" y1="15" x2="16" y2="15" />
      <line x1="8" y1="19" x2="8" y2="19" />
      <line x1="12" y1="19" x2="12" y2="19" />
      <line x1="16" y1="19" x2="16" y2="19" />
    </svg>
  );
}

function SunIcon({ className }) {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
      <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
    </svg>
  );
}

function CalendarIcon({ className }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
  );
}

function ClockIcon({ className }) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

const iconMap = {
  chat: ChatIcon,
  document: DocumentIcon,
  chart: ChartIcon,
  phone: PhoneIcon,
  calculator: CalculatorIcon,
  sun: SunIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
};

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
        <div className="absolute left-1/2 top-full mt-1 w-48 -translate-x-1/2 rounded-xl border border-white/10 bg-[#1a0e2e]/95 p-2 shadow-xl backdrop-blur-md">
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

function DrawerRow({ icon, label, badge, expandable }) {
  const Icon = iconMap[icon];
  return (
    <a
      href="/"
      className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3.5 text-white transition-colors hover:bg-white/15"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="flex-1 text-[15px] font-medium">{label}</span>
      {badge && (
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-semibold text-white/90">
          {badge}
        </span>
      )}
      {expandable ? (
        <ChevronDownIcon className="text-white/60" />
      ) : (
        <ChevronRightIcon className="text-white/60" />
      )}
    </a>
  );
}

function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-60 bg-black/60 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-70 flex h-dvh w-[85%] max-w-sm flex-col overflow-y-auto bg-[linear-gradient(180deg,#3a1440,#1c0423)] px-5 pb-8 pt-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="Aura AI" className="h-8 w-14" />
            <span className="text-lg font-bold text-white">Aura AI</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
          >
            <CloseIcon className="h-4.5 w-4.5" />
          </button>
        </div>

        <a
          href="/"
          onClick={onClose}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.35)]"
        >
          <UserIcon className="h-4 w-4" />
          Sign in / Sign up
        </a>
        <p className="mt-2.5 text-center text-xs text-white/60">
          Your first question is free
        </p>

        <p className="mb-2 mt-6 text-xs font-semibold tracking-widest text-white/50">
          CONSULT
        </p>
        <div className="flex flex-col gap-2" onClick={onClose}>
          {consultItems.map((item) => (
            <DrawerRow key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>

        <p className="mb-2 mt-6 text-xs font-semibold tracking-widest text-white/50">
          FREE TOOLS
        </p>
        <div className="flex flex-col gap-2" onClick={onClose}>
          {toolItems.map((item) => (
            <DrawerRow
              key={item.label}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              expandable={item.expandable}
            />
          ))}
        </div>

        <a
          href="/"
          onClick={onClose}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90"
        >
          <GlobeIcon />
          EN
        </a>
      </div>
    </>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 sm:px-6 lg:px-0">
      <nav className="flex w-full items-center justify-between rounded-2xl sm:rounded-full border border-[#837373] bg-[linear-gradient(25deg,rgba(255,255,255,0.2),rgba(255,255,255,0.039))] px-4 py-2.5 shadow-[0_1.2px_30px_rgba(69,42,124,0.102)] backdrop-blur-[85px] sm:px-6">
        <a href="#" className="flex shrink-0 justify-center items-center">
          <img src="/favicon.png" alt="Aura AI" className="h-8 w-14" />
          <span className="text-lg font-bold text-white">Aura AI</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-white/90 transition-colors hover:text-white"
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

        {/* Desktop right side — unchanged */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
          >
            <GlobeIcon />
            EN
          </button>
          <span className="h-6 w-px bg-white/15" />
          <a
            href="#"
            className="rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.4)] transition-transform hover:scale-105"
          >
            Ask Aura AI
          </a>
        </div>

        {/* Mobile/tablet right side */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white/90"
          >
            <ChatIcon className="h-4 w-4" />
            Chat
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center text-white"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Navbar;
