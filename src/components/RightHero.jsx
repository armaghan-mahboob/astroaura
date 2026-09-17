import { useEffect, useState } from "react";

const conversations = [
  {
    question: "Should I change my job this year?",
    answers: [
      "Saturn is transiting your 10th house and your Mercury antardasha starts in March.",
      "March to August looks strongest for a move. Before that, Saturn asks you to finish what you started.",
    ],
  },
  {
    question: "Will I find love this year?",
    answers: [
      "Venus enters your 7th house in April, bringing a stronger pull toward partnership.",
      "Someone from your existing circle may become significant between April and July.",
    ],
  },
  {
    question: "Is this the right time to invest?",
    answers: [
      "Jupiter's transit through your 2nd house favors steady.",
      "Avoid major financial decisions during Mercury retrograde next month.",
    ],
  },
];

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function RightHero() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % conversations.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { question, answers } = conversations[index];

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/50 shadow-[0_0_40px_rgba(168,60,255,0.15)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-sm font-semibold">Aura AI</span>
        </div>
        <span className="text-xs text-white/50">online</span>
      </div>

      {/* Conversation - Restored original bg-white/5 for AI bubbles */}
      <div
        className={`flex max-h-65 flex-col gap-3 px-4 py-5 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="ml-auto max-w-[85%] rounded-2xl bg-linear-to-r from-pink-600 to-orange-500 px-4 py-2.5 text-sm font-medium text-white">
          {question}
        </div>

        {answers.map((answer) => (
          <div
            key={answer}
            className="max-w-[90%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
          >
            {answer}
          </div>
        ))}
      </div>

      {/* Input bar - Restored original bg-black/20 */}
      <div className="px-4 pb-3 pt-3">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5">
          <span className="flex-1 text-sm text-white/40">
            Ask anything about your chart
          </span>
          <button
            type="button"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-600 text-white"
          >
            <SendIcon />
          </button>
        </div>
      </div>

      {/* Footer note */}
      <div className="flex items-center gap-1.5 border-t border-white/10 px-4 py-2.5 text-xs text-white/50">
        <LockIcon />
        Private and encrypted. Ask what you would not say out loud.
      </div>
    </div>
  );
}
export default RightHero;
