// src/components/GlobalUseCases.jsx
import { useEffect, useRef, useState } from "react";

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.7-4.3-9.3-8.2C1 10 1.6 6.6 4.4 5.1c2.3-1.2 4.8-.4 6.1 1.4l1.5 2 1.5-2c1.3-1.8 3.8-2.6 6.1-1.4 2.8 1.5 3.4 4.9 1.7 7.7C18.7 16.7 12 21 12 21Z" />
    </svg>
  );
}

function FamilyIcon({ className }) {
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
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5" />
      <path d="M14.5 15.2c2.3.3 4.5 1.8 4.5 5.3" />
    </svg>
  );
}

function BriefcaseIcon({ className }) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CoinsIcon({ className }) {
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
      <ellipse cx="9" cy="7" rx="6" ry="3" />
      <path d="M3 7v6c0 1.7 2.7 3 6 3s6-1.3 6-3V7" />
      <path d="M15 10.5c2.9.3 5 1.4 5 2.9s-2.1 2.6-5 2.9" />
      <path d="M3 13v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-3" />
    </svg>
  );
}

function CompassIcon({ className }) {
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
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 14.5a8.5 8.5 0 0 1-11-11 8.5 8.5 0 1 0 11 11Z" />
    </svg>
  );
}

const useCases = [
  {
    icon: HeartIcon,
    title: "Love & Relationship",
    description:
      "Understand relationship patterns, compatibility, emotional confusion, and future direction.",
    image: "/usecases/love.webp",
  },
  {
    icon: FamilyIcon,
    title: "Marriage & Family",
    description:
      "Guidance on marriage timing, family pressure, partner concerns, and compatibility.",
    image: "/usecases/marriage.webp",
  },
  {
    icon: BriefcaseIcon,
    title: "Career & Job",
    description:
      "Ask about career growth, job change, business decisions, and professional challenges.",
    image: "/usecases/career.webp",
  },
  {
    icon: CoinsIcon,
    title: "Money & Finance",
    description:
      "Understand financial phases, opportunities, delays, and better timing for decisions.",
    image: "/usecases/money.webp",
  },
  {
    icon: CompassIcon,
    title: "Life Direction",
    description:
      "Get clarity when you feel stuck, confused, or unsure about your next step.",
    image: "/usecases/life.webp",
  },
  {
    icon: MoonIcon,
    title: "Your Birth Chart",
    description:
      "Your exact natal chart read and explained, planets, houses, dashas, and what they mean for you.",
    image: "/usecases/birth.webp",
  },
];

function PanelContent({ item, isOpen }) {
  const Icon = item.icon;
  return (
    <div
      className={`absolute inset-x-0 bottom-0 flex items-end p-4 sm:p-6 ${
        isOpen ? "justify-start gap-4" : "justify-center"
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm sm:h-14 sm:w-14">
        <Icon className="h-5 w-5 text-white" />
      </span>

      <div
        className={`grid transition-[grid-template-columns,opacity] duration-500 ease-in-out ${
          isOpen
            ? "grid-cols-[1fr] opacity-100"
            : "grid-cols-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden min-w-0">
          <div className="min-w-max">
            <p className="whitespace-nowrap text-xs font-semibold tracking-wide text-pink-300">
              ASK AURA AI ABOUT
            </p>
            <h3 className="mt-1 whitespace-nowrap text-xl font-bold text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-white/80 whitespace-normal">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopPanel({ item, isOpen, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="relative h-105 cursor-pointer overflow-hidden rounded-3xl border border-white/10 transition-[flex-grow] duration-700 ease-in-out sm:h-120"
      style={{ flexGrow: isOpen ? 5 : 1, flexBasis: 0, minWidth: 0 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-70"
        }`}
      />
      <PanelContent item={item} isOpen={isOpen} />
    </div>
  );
}

function MobilePanel({ item, isOpen, onClick }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-3xl border border-white/10 text-left transition-all duration-500 ease-in-out ${
        isOpen ? "h-96" : "h-16 rounded-2xl"
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background Overlays */}
      <div
        className={`absolute inset-0 bg-black/75 transition-opacity duration-500 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Closed State Header View */}
      <div
        className={`absolute inset-x-0 top-0 flex h-16 items-center gap-3 px-4 transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Icon className="h-4 w-4 text-white" />
        </span>
        <span className="text-sm font-semibold text-white">{item.title}</span>
      </div>

      {/* Expanded State Content View */}
      <div
        className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </span>
        <p className="text-xs font-semibold tracking-wide text-pink-300">
          ASK AURA AI ABOUT
        </p>
        <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-sm text-white/80">{item.description}</p>
      </div>
    </button>
  );
}

function GlobalUseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    let timeoutId;

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        if (!pausedRef.current) {
          setActiveIndex((prev) => (prev + 1) % useCases.length);
        }
        scheduleNext();
      }, 5000);
    };

    scheduleNext();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseEnter = (index) => {
    pausedRef.current = true;
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <h2 className="text-3xl text-center font-extrabold sm:text-4xl">
          Ask Aura AI About Anything That Matters to You
        </h2>
      </div>

      {/* Desktop accordion */}
      <div className="mx-auto mt-10 hidden max-w-7xl gap-4 px-4 sm:px-6 lg:flex lg:px-10">
        {useCases.map((item, i) => (
          <DesktopPanel
            key={item.title}
            item={item}
            isOpen={i === activeIndex}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 px-4 sm:px-6 lg:hidden">
        {useCases.map((item, i) => (
          <MobilePanel
            key={item.title}
            item={item}
            isOpen={i === mobileActive}
            onClick={() => setMobileActive(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default GlobalUseCases;
