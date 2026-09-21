import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
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
          <span className="bg-[linear-gradient(180deg,#fff,#ffccfd)] bg-clip-text text-transparent">
            {` Answered`}
          </span>
        </h1>
        <h2 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
          Ask Aura AI about your life's
          <br />
          <span
            className={`bg-[linear-gradient(180deg,#fff,#ffccfd)] bg-clip-text text-transparent transition-opacity duration-300 ${
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

      {/* CTA Button */}
      <Link
        to="/chat"
        className="group relative w-fit overflow-hidden rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-base font-semibold text-white shadow-[0_8px_30px_#ed0687b3,0_0_30px_2px_#fe6c0f8c] transition-all duration-200 hover:-translate-y-1"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-3/4 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/55 to-transparent animate-[cta-shine_2.8s_ease-in-out_infinite]"
        />
        <span className="relative">Ask Your First Question FREE</span>
      </Link>
    </div>
  );
}

export default LeftHero;
