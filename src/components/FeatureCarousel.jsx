import { useEffect, useRef, useState } from "react";

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-6.7-4.3-9.3-8.2C1 10 1.6 6.6 4.4 5.1c2.3-1.2 4.8-.4 6.1 1.4l1.5 2 1.5-2c1.3-1.8 3.8-2.6 6.1-1.4 2.8 1.5 3.4 4.9 1.7 7.7C18.7 16.7 12 21 12 21Z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      width="14"
      height="14"
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

function PulseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="14"
      height="14"
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

const cards = [
  {
    title: "Love & Relationships",
    description: "Compatibility, timing & relationship patterns.",
    img: "/features/love.webp",
    icon: HeartIcon,
  },
  {
    title: "Career & Finance",
    description: "Growth, opportunities & smart timing.",
    img: "/features/career.webp",
    icon: BriefcaseIcon,
  },
  {
    title: "Health & Wellness",
    description: "Energy cycles & daily balance.",
    img: "/features/health.webp",
    icon: PulseIcon,
  },
  {
    title: "Personal Insights",
    description: "Your karmic path, strengths & purpose.",
    img: "/features/insight.webp",
    icon: UserIcon,
  },
  {
    title: "AI Chats",
    description: "Ask anything, get instant answers.",
    img: "/features/chat.webp",
    icon: UserIcon,
  },
  {
    title: "AI Reports",
    description: "Detailed personal astrology reports.",
    img: "/features/reports.webp",
    icon: UserIcon,
  },
  {
    title: "AI Voice Call",
    description: "Talk to your AI astrology guide.",
    img: "/features/voice.webp",
    icon: UserIcon,
  },
];

function FeatureCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    const cardEl = container?.children[index];
    if (cardEl && container) {
      const scrollLeft =
        cardEl.offsetLeft - (container.clientWidth - cardEl.offsetWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  // Keep dots synced with whatever card is actually centered/leading in view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardEls = container.children;
      if (!cardEls.length) return;

      const target = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(cardEls).forEach((el, i) => {
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(cardCenter - target);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Single autoplay timer, mobile-only, loops back to the first card
  useEffect(() => {
    const interval = setInterval(() => {
      if (!window.matchMedia("(max-width: 639px)").matches) return;

      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % cards.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        ref={scrollRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-[calc(50vw-128px)] sm:snap-none sm:px-6 sm:scroll-px-6 lg:px-10 lg:scroll-px-10 sm:py-5"
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative flex h-40 w-64 shrink-0 snap-center rounded-3xl border border-white/10 transition-transform duration-300 ease-out sm:h-55 sm:w-76 sm:snap-start sm:hover:-translate-y-2 hover:cursor-pointer"
          >
            {/* Hover glow (desktop only) — outside overflow mask */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 shadow-[0_0_15px_rgba(255,60,120,0.25)] transition-opacity duration-300 sm:group-hover:opacity-100" />

            {/* Inner card content wrapper with rounded clipping */}
            <div className="relative flex h-full w-full overflow-hidden rounded-3xl">
              {/* Background image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover object-right"
              />

              {/* Left-focused gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#1a0a2e] via-[#1a0a2e]/20 to-transparent" />

              {/* Content block */}
              <div className="relative z-10 flex h-full max-w-[62%] flex-col justify-center gap-2.5 p-3 sm:max-w-[58%] sm:gap-3 sm:p-4">
                <h3 className="text-sm font-bold leading-tight text-white sm:text-xl">
                  {card.title}
                </h3>

                <p className="text-xs leading-snug text-white sm:text-sm">
                  {card.description}
                </p>

                <button
                  type="button"
                  className="flex w-fit items-center gap-1.5 rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-5 py-2.5 text-[10px] font-semibold text-white shadow-[0_0_12px_rgba(255,60,120,0.35)] transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[11px]"
                >
                  <card.icon className="h-3 w-3" />
                  Ask Aura AI
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="mt-3 flex justify-center gap-2 sm:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to card ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === activeIndex ? "bg-pink-500" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureCarousel;
