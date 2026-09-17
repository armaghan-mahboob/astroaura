import { useEffect, useState } from "react";

const cyclingWords = [
  "deepest questions",
  "love & marriage",
  "true purpose",
  "biggest decisions",
  "career & money",
];

const checklist = [
  "Ancient science, decoded with data-backed AI astrology",
  "10M+ charts, 10K+ Vedic rules, 100+ astrologers",
  "Safe. Private. Encrypted.",
];

function CheckIcon() {
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
      className="shrink-0 text-pink-500"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function LeftHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cyclingWords.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* Badge: Sized up to text-sm */}
      <div className="flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-sm">
        <span className="text-yellow-400">★★★★★</span>
        <span className="font-semibold">4.7</span>
        <span className="text-white/60">Trusted by</span>
        <span className="font-semibold">1M+ users</span>
      </div>

      {/* Headings: Increased size steps across breakpoints */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          AI Astrology,
          <span className="bg-linear-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
            {` Answered`}
          </span>
        </h1>
        <h2 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
          Ask Aura AI about your life's
          <br />
          <span
            className={`bg-linear-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {cyclingWords[index]}
          </span>
        </h2>
      </div>

      {/* Checklist: Increased gap and text size to text-base */}
      <ul className="flex flex-col gap-2.5 text-base">
        {checklist.map((item) => (
          <li key={item} className="flex items-center gap-3 text-white/85">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button: Restored button padding & text size */}
      <a
        href="#"
        className="w-fit rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(255,60,120,0.4)] transition-transform hover:scale-105"
      >
        Ask Your First Question FREE
      </a>
    </div>
  );
}

export default LeftHero;
