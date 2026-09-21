import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

function SendIcon({ className }) {
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex w-fit items-center gap-1.5 rounded-3xl border border-white/10 bg-white/10 px-5 py-4">
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:-0.3s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/50 [animation-delay:-0.15s]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-white/50" />
    </div>
  );
}

function MessageBubble({ role, text }) {
  const isUser = role === "user";
  return (
    <div
      className={`max-w-3/4 border px-5 py-2 text-base leading-relaxed sm:text-base ${
        isUser
          ? "ml-auto rounded-2xl border-transparent bg-linear-to-r from-pink-600 to-orange-500 text-white"
          : "mr-auto rounded-lg border-white/10 bg-white/10 text-white/90"
      }`}
    >
      {text}
    </div>
  );
}

const INTRO_MESSAGE = {
  role: "assistant",
  text: "Hi, I'm Aura AI. I've studied over 1 million Vedic birth charts and I can read yours too. Ask me anything about your career, love life, money or the year ahead, and you'll get a clear answer drawn from your own chart. Your first question is free.",
};

function Chat() {
  const [messages, setMessages] = useState([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />

      <div className="mx-auto flex w-full flex-1 flex-col px-4 pb-6 pt-25 sm:px-6 ">
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto">
          {messages.map((msg, i) => (
            <MessageBubble key={i} role={msg.role} text={msg.text} />
          ))}
          {loading && <TypingDots />}
          {error && (
            <p className="mr-auto max-w-2xl rounded-3xl border border-red-400/30 bg-red-500/10 px-6 py-4 text-sm text-red-300">
              {error}
            </p>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md sm:px-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question ..."
            disabled={loading}
            className="flex-1 bg-transparent px-2 text-sm text-white placeholder-white/50 outline-none disabled:opacity-60 sm:text-base"
          />
          <button
            type="button"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-pink-600 to-orange-500 text-white transition-transform disabled:cursor-not-allowed disabled:opacity-50 enabled:hover:scale-105"
          >
            <SendIcon className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
