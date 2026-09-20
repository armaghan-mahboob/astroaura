import { useCallback, useEffect, useState } from "react";

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
      stroke="lightgreen"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" fill="lightgreen" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex w-fit items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5">
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:-0.3s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/50" />
    </div>
  );
}

function AnswerBubble({ text }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`max-w-[90%] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {text}
    </div>
  );
}

const TYPING_DURATION = 1000;
const REVEAL_STEP = 550;
const HOLD_AFTER_COMPLETE = 4500;

// Owns only the question/answer body for one conversation. Remounted (via key) each
// cycle so its typing/reveal state always starts fresh — header lives in the parent
// and is never remounted, so it can't flicker.
function ChatConversation({ conversation, onStatusChange, onFinished }) {
  const [showTyping, setShowTyping] = useState(true);
  const [visibleAnswers, setVisibleAnswers] = useState(0);

  useEffect(() => {
    onStatusChange("reading");

    const timeouts = [];
    const track = (fn, delay) => {
      const id = setTimeout(fn, delay);
      timeouts.push(id);
    };

    const { answers } = conversation;

    track(() => {
      setShowTyping(false);
      onStatusChange("online"); // flip the moment the dots disappear, not after last answer

      answers.forEach((_, i) => {
        track(() => setVisibleAnswers(i + 1), i * REVEAL_STEP);
      });
    }, TYPING_DURATION);

    const revealDuration = answers.length * REVEAL_STEP;
    const totalDelay = TYPING_DURATION + revealDuration + HOLD_AFTER_COMPLETE;

    track(onFinished, totalDelay);

    return () => timeouts.forEach(clearTimeout);
  }, [conversation, onStatusChange, onFinished]);

  const { question, answers } = conversation;

  return (
    <div className="flex min-h-65 flex-col gap-3 px-4 py-5">
      <div className="ml-auto max-w-[85%] rounded-2xl bg-linear-to-r from-pink-600 to-orange-500 px-4 py-2.5 text-sm font-medium text-white">
        {question}
      </div>

      {showTyping ? (
        <TypingDots />
      ) : (
        answers
          .slice(0, visibleAnswers)
          .map((answer) => <AnswerBubble key={answer} text={answer} />)
      )}
    </div>
  );
}

function RightHero() {
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("reading");
  const [fade, setFade] = useState(true);

  // Stable identity via useCallback — otherwise a new function each render (triggered
  // by the status updates above) would re-trigger ChatConversation's effect and restart
  // its timers mid-cycle.
  const handleFinished = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % conversations.length);
      setFade(true);
    }, 300);
  }, []);

  return (
    <div className="w-full max-w-md xl:-mt-8 rounded-2xl border border-white/10 bg-black/50 shadow-[0_0_40px_rgba(168,60,255,0.15)] backdrop-blur-md">
      {/* Header — persistent, never remounted, so no flicker on conversation change */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-sm font-semibold">Aura AI</span>
        </div>
        <span className="text-xs text-white/50">
          {status === "reading" ? "reading your chart" : "online"}
        </span>
      </div>

      <div
        className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
      >
        <ChatConversation
          key={index}
          conversation={conversations[index]}
          onStatusChange={setStatus}
          onFinished={handleFinished}
        />
      </div>

      {/* Input bar */}
      <div className="px-4 pb-3 pt-3">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2.5">
          <span className="flex-1 text-sm text-white/40">
            Ask anything about your chart
          </span>
          <button
            type="button"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-pink-600 to-orange-500 text-white"
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
