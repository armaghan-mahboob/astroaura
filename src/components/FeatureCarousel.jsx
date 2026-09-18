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
  return (
    <div className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="relative flex h-40 w-70 shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 sm:h-50 sm:w-76"
        >
          {/* Background image */}
          <img
            src={card.img}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover object-right"
          />

          {/* Left-focused gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#1a0a2e] via-[#1a0a2e]/20 to-transparent" />

          {/* Content block: removed justify-between and applied uniform flex-col gap-3 */}
          <div className="relative z-10 flex h-full max-w-[58%] flex-col justify-center p-4 gap-3">
            <h3 className="text-base font-bold leading-tight text-white sm:text-xl">
              {card.title}
            </h3>

            <p className="text-sm leading-snug text-white">
              {card.description}
            </p>

            <button
              type="button"
              className="flex w-fit items-center gap-1.5 rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-[11px] font-semibold text-white shadow-[0_0_12px_rgba(255,60,120,0.35)] transition-transform hover:scale-105"
            >
              <card.icon className="h-3 w-3" />
              Ask Aura AI
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCarousel;
