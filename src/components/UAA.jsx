// src/components/UAA.jsx

function UAABadge({ number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-pink-500/50 bg-pink-500/10 text-sm font-bold text-pink-400">
      {number}
    </span>
  );
}

function UAAStep({ number, title, description, isLast }) {
  return (
    <div
      className={`flex gap-4 py-5 ${isLast ? "" : "border-b border-white/10"}`}
    >
      <UAABadge number={number} />
      <div className="flex flex-col gap-1.5">
        <p className="text-base font-bold text-white">{title}</p>
        <p className="text-md leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Enter Your Birth Details",
    description:
      "Provide your date, exact time, and place of birth. Aura AI uses this information to generate your Kundli and understand your unique Vedic birth chart.",
  },
  {
    title: "Generate Your Free Kundli",
    description:
      "Your Free Kundli is created using your birth details and becomes the foundation for every conversation. Aura AI studies your planetary positions, houses, Dashas, and other key elements of Vedic astrology to deliver insights that are unique to you.",
  },
  {
    title: "Chat with Your AI Astrologer",
    description:
      "Whether you're exploring career astrology, marriage astrology, relationships, finances, or personal growth, Aura AI explains your birth chart in simple, conversational language that's easy to understand.",
  },
  {
    title: "Continue the Conversation",
    description:
      "Life keeps changing, and so do your questions. Continue chatting with Aura AI whenever you need guidance or want to understand a new situation through AI astrology.",
  },
];

function UAAIntroCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <p className="text-sm leading-relaxed text-white/80 sm:text-base">
        Life rarely comes with simple answers. Whether you're thinking about
        your next career move, navigating a relationship, planning your future,
        or simply looking for clarity, AI astrology makes it easier to explore
        life's questions in a more personal way.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Aura AI combines the timeless wisdom of Vedic astrology with intelligent
        conversations to help you understand yourself better. Simply enter your
        birth details to generate your{" "}
        <a href="#" className="text-blue-400 underline hover:text-blue-300">
          free kundli
        </a>
        , explore your Kundli, and chat with an{" "}
        <a href="#" className="text-blue-400 underline hover:text-blue-300">
          AI astrologer
        </a>{" "}
        whenever you have a question.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Marriage is its own question, so it has its own tool. Run{" "}
        <a href="#" className="text-blue-400 underline hover:text-blue-300">
          kundli matching
        </a>{" "}
        to score the full Ashtakoot gun milan for two charts out of 36 gunas,
        with Mangal and Nadi dosha checked in both.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        No confusing charts. No complicated astrology terms. Just meaningful
        conversations that help you understand yourself, recognize patterns, and
        reflect on the possibilities ahead.
      </p>
    </div>
  );
}

function UAAHowItWorksCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        How AI Astrology Works
      </h3>
      <div className="mt-2">
        {steps.map((step, i) => (
          <UAAStep
            key={step.title}
            number={i + 1}
            title={step.title}
            description={step.description}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

// src/components/UAA.jsx — add below existing code, keep everything above unchanged

const topics = [
  {
    title: "Career & Job",
    description:
      "Thinking about changing jobs, preparing for an interview, or planning your next move? Explore career astrology insights to better understand opportunities, strengths, and important phases in your professional journey.",
  },
  {
    title: "Love & Relationships",
    description:
      "Understand relationship patterns, emotional compatibility, and the dynamics that shape your connections. Whether you're single or in a relationship, Aura AI helps you explore these questions with greater clarity.",
  },
  {
    title: "Marriage",
    description:
      "Thinking about marriage or wondering about compatibility? Explore marriage astrology, Kundli matching, and relationship compatibility through your birth chart.",
  },
  {
    title: "Money & Wealth",
    description:
      "Understand financial patterns, wealth opportunities, and important phases that may influence your financial journey.",
  },
  {
    title: "Health & Well-being",
    description:
      "Explore your birth chart to better understand periods that may affect your energy, balance, and overall well-being through the lens of Vedic astrology.",
  },
  {
    title: "Personality & Life Path",
    description:
      "Discover your natural strengths, communication style, motivations, and life tendencies through your Kundli.",
  },
];

function UAATopicCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
      <p className="text-base font-bold text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}

function UAATopicsCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        What Can You Ask Your AI Astrologer?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
        Every Kundli tells a different story, which means every conversation
        with Aura AI is built around your own birth chart, not generic
        predictions.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <UAATopicCard
            key={topic.title}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  );
}

function UAAKundliCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Understand Your Kundli
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Your Kundli, also known as a Vedic birth chart, is a map of the
        planetary positions at the exact time and place you were born. It helps
        you better understand your personality, relationships, career, marriage,
        finances, and important phases of life.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Aura AI explains your birth chart in clear, conversational language,
        making AI astrology easy to understand whether you're just getting
        started or have been exploring Vedic astrology for years.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        You can also ask Aura AI about topics like Mahadasha, Rahu Mahadasha,
        Sade Sati, Rahu Ketu, Mangal Dosha, planetary combinations, and houses,
        with explanations that are simple and easy to follow.
      </p>
    </div>
  );
}

// src/components/UAA.jsx — add below existing code, keep everything above unchanged

function UAACheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-pink-500"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const whyChooseLeft = [
  "Personalized insights based on your birth details",
  "Generate your Free Kundli in minutes",
  "Chat naturally with your AI astrologer",
  "Easy-to-understand explanations rooted in Vedic astrology",
];

const whyChooseRight = [
  "Explore your Horoscope, Rashifal, Kundli matching, and more",
  "Guidance for career, marriage, relationships, money, and life decisions",
  "Private and secure conversations",
  "Available 24×7, in 109 languages",
];

function UAAExploreMoreCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Explore More with AI Astrology
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Whether you're checking your daily Horoscope, reading your Rashifal,
        understanding your Panchang, exploring Kundli matching, or learning
        about important planetary periods, Aura AI helps you continue the
        conversation through personalized AI astrology.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Instead of searching across multiple websites, you can ask questions
        naturally and receive guidance that's connected to your own birth chart.
      </p>
    </div>
  );
}

function UAAWhyChooseCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left sm:p-8">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Why Choose Aura AI?
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        AI astrology should feel personal, simple, and easy to explore.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Whether you're looking for an AI astrologer, a Kundli app, or an easier
        way to understand your birth chart, Aura AI brings together AI astrology
        and Vedic astrology in one seamless experience.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
        Instead of trying to interpret complex charts on your own, you can ask
        questions naturally and receive thoughtful answers based on your Kundli.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8">
        {[...whyChooseLeft, ...whyChooseRight].map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <UAACheckIcon />
            <span className="text-sm text-white/80">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UAA() {
  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <p className="text-xs font-bold tracking-widest text-orange-400">
          UNDERSTAND AI ASTROLOGY
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-5xl">
          AI Astrology, Made
          <br />
          Personal with Aura AI
        </h2>
      </div>

      <div className="mx-auto mt-10 flex w-full flex-col gap-6 px-4 sm:px-20">
        <UAAIntroCard />
        <UAAHowItWorksCard />
        <UAATopicsCard />
        <UAAKundliCard />
        <UAAExploreMoreCard />
        <UAAWhyChooseCard />
      </div>
    </section>
  );
}

export default UAA;
