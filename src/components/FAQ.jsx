// src/components/FAQ.jsx
import { useState } from "react";

function BrainIcon({ className }) {
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
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.83V15a3 3 0 0 0 3 3h1" />
      <path d="M15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.83V15a3 3 0 0 1-3 3h-1" />
      <path d="M9 4v15M15 4v15" />
      <path d="M9 9h1M9 13h1M14 9h1M14 13h1" />
    </svg>
  );
}

function TargetIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ShieldIcon({ className }) {
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
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
    </svg>
  );
}

function HeartOutlineIcon({ className }) {
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
      <path d="M12 21s-6.7-4.3-9.3-8.2C1 10 1.6 6.6 4.4 5.1c2.3-1.2 4.8-.4 6.1 1.4l1.5 2 1.5-2c1.3-1.8 3.8-2.6 6.1-1.4 2.8 1.5 3.4 4.9 1.7 7.7C18.7 16.7 12 21 12 21Z" />
    </svg>
  );
}

function BalanceIcon({ className }) {
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
      <path d="M12 3v18M7 21h10" />
      <path d="M5 7h6M13 7h6" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0L5 7Z" />
      <path d="M19 7l-3 6a3 3 0 0 0 6 0l-3-6Z" />
    </svg>
  );
}

function LockIcon({ className }) {
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
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ListIcon({ className }) {
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
      <rect x="3" y="4" width="4" height="4" rx="1" />
      <rect x="3" y="10" width="4" height="4" rx="1" />
      <rect x="3" y="16" width="4" height="4" rx="1" />
      <path d="M10 6h11M10 12h11M10 18h11" />
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

function SparklesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.5 3.2 2.1 4.8 5.3 5.3-3.2.5-4.8 2.1-5.3 5.3-.5-3.2-2.1-4.8-5.3-5.3 3.2-.5 4.8-2.1 5.3-5.3Z" />
      <path d="M18.5 14c.3 1.7 1.1 2.5 2.8 2.8-1.7.3-2.5 1.1-2.8 2.8-.3-1.7-1.1-2.5-2.8-2.8 1.7-.3 2.5-1.1 2.8-2.8Z" />
    </svg>
  );
}

const faqs = [
  {
    icon: BrainIcon,
    question: "What is Aura AI?",
    answer:
      "Aura AI takes the old practice of Vedic astrology and gives it a modern engine. Instead of short, vague horoscopes, it offers clear advice you can act on. It shows you what might happen, when it could happen and how likely it is. Alongside every prediction you get a simple note about the astrological principle behind it, so youre not just taking our word for it. We built the platform from a huge base of classical texts and millions of real charts. The aim is to give anyone, anywhere, a personal map of their life thats both rooted in tradition and sharpened by technology.",
  },
  {
    icon: TargetIcon,
    question: "How Accurate are the results?",
    answer:
      "Accuracy starts with the chart itself. Your kundli is computed from high-grade NASA astronomy data, so every planetary degree is precise, and the reading includes details most apps skip: Gulika and Mandi positions, and a deep yoga analysis covering more than 1,000 yogas. On top of that chart, the system has learned from millions of anonymised birth charts and thousands of classical rules, letting it see patterns too complex for any single astrologer to track manually. Rather than saying “something may happen soon,” it gives you a probability range and points to the specific future windows that look strongest for you, so you can see how confident the system is before you act on it.Dummy description — replace with real accuracy details.",
  },
  {
    icon: ShieldIcon,
    question: "Why AI Astrology?",
    answer:
      "Choosing the right astrologer can be confusing - Aura AI removes the guesswork. It combines insights from 100 verified astrologers, 1M+ historical birth charts, and advanced AI models to deliver consistent, transparent guidance. Your first question is free, chat is never billed per minute, and there are no hidden fees or auto-renewing subscriptions: after the free start, chats are paid from wallet credits, so you only pay for what you actually use. This means you get a reliable, always-available astrologer-like experience with highly accurate, probability-based insights.",
  },
  {
    icon: HeartOutlineIcon,
    question: "Why Aura AI is the Right Choice?",
    answer:
      "When people talk about Aura AI, they dont just mention “accuracy” or “algorithms.” They talk about how it feels - a mix of old-world astrology and modern clarity. Someone might open the app before a job interview; another might check it late at night to understand a relationship pattern. What they all notice is that it doesnt sound like a horoscope column - it sounds like someone who actually knows them.",
  },
  {
    icon: BalanceIcon,
    question: "Is AI astrology more accurate than human astrologers?",
    answer:
      "They are good at different things. A human astrologer brings intuition, context and the ability to read your situation as a whole. Aura AI brings breadth and consistency: it reads over 100 astrological variables at once, more than any single astrologer can hold in mind simultaneously, and it condenses the experience of thousands of astrologers into one system. Because it learns from millions of charts, it keeps getting sharper over time, and because it is built on validated astrological principles rather than guesswork, two people asking the same question of the same chart get the same reasoning. The honest summary: AI wins on pattern recognition and consistency, humans win on nuance and empathy.",
  },
  {
    icon: LockIcon,
    question: "How do AI astrology tools ensure data privacy and security?",
    answer:
      "Your birth details and conversations are treated as private by default. Aura AI uses end-to-end encryption, stores birth data in anonymised form, and follows strict privacy policies; your details are never sold. Practically, that means the chat is a safe, private and encrypted space where you can speak without judgment, which matters because people ask this AI the questions they would hesitate to ask another person: about a marriage that is struggling, money they have lost, or a health worry they have told no one. Nothing you type is used to identify you publicly, and you can ask anything at any hour without a queue, an audience, or a record that follows you around.",
  },
  {
    icon: ListIcon,
    question:
      "What factors determine the accuracy of astrological predictions?",
    answer:
      "Birth data accuracy, astrological method, and interpretation style all matter. Aura AI relies on pattern recognition and calibration, while humans add nuance. The readers intent and belief also shape how predictions are received.",
  },
  {
    icon: ClockIcon,
    question: "When is help available?",
    answer:
      "We are available for your help when you actually need it. Whether its midnight in Mumbai or dawn in Chicago, you can get a reading without a queue or per-minute charge on chat.",
  },
  {
    icon: SparklesIcon,
    question: "What makes the Aura experience different?",
    answer:
      "Heres what regular users say draws them back: The roots run deep, as the system is built on thousands of hand-annotated charts and classic Vedic texts, giving its predictions a weight and texture you can feel. You also see the reasoning behind each forecast, which arrives with a short note explaining why a certain transit matters. Finally, it talks like a person, not a machine—the tone is closer to a mentor or guide, a style shaped by the real astrologers who helped train it.",
  },
];

function PlusMinusIcon({ open }) {
  return (
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
      <span className="absolute h-px w-3.5 bg-white/70" />
      <span
        className={`absolute h-3.5 w-px bg-white/70 transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}
function FAQItem({ icon: Icon, question, answer, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#fbcfe833] bg-[linear-gradient(90deg,#6c1e5980,#d23aad80)]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-5"
      >
        <span className="flex items-center gap-3 sm:gap-4">
          <Icon className="h-5 w-5 shrink-0 text-white/80" />
          <span className="text-base font-bold text-white sm:text-lg">
            {question}
          </span>
        </span>
        <PlusMinusIcon open={isOpen} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className=" pl-10 pr-6 pb-6 pt-0 text-sm leading-relaxed text-white/80 sm:pl-12 sm:pr-8 sm:text-base">
            <p className="border-t border-[#fbcfe833] pt-4">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="relative z-10 py-16 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-extrabold sm:text-4xl">
          Free AI Astrology Chat: Your Questions Answered
        </h2>
        <p className="mt-3 text-white/70 sm:text-lg">
          What is free, how the AI reads your kundli, and what it costs after
          that
        </p>
      </div>

      <div className="mx-auto mt-10 flex w-full sm:max-w-3/4 flex-col gap-4 px-4 sm:px-6">
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.question}
            icon={faq.icon}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
