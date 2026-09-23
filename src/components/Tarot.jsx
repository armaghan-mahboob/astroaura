import { useState } from "react";

import { getCardById } from "../data/tarotCards";
import { Link } from "react-router-dom";

function StarBadge() {
  return (
    <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-pink-400">
      <span>☆</span>
      FREE TAROT READING
    </div>
  );
}

function SparkleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z" />
    </svg>
  );
}

function CardFace({ selected, fill }) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border bg-[#2a0e3d] ${
        fill ? "h-full w-full" : "aspect-2/3 w-full"
      } ${
        selected
          ? "border-pink-400 shadow-[0_0_14px_rgba(255,60,150,0.6)]"
          : "border-white/20"
      }`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(168,60,255,0.18) 0px, rgba(168,60,255,0.18) 2px, rgba(60,10,80,0.55) 2px, rgba(60,10,80,0.55) 6px)",
      }}
    >
      <SparkleIcon className="h-2.5 w-2.5 text-pink-300/70 sm:h-3 sm:w-3" />
    </div>
  );
}

function CardSlot({ label, selection, showReading, position }) {
  if (!selection) {
    return (
      <div className="flex flex-1 items-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 px-15 py-4 sm:flex-col sm:py-10">
        <div className="hidden w-full sm:block sm:h-44">
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-[radial-gradient(ellipse_at_center,rgba(255,60,120,0.25),rgba(168,60,255,0.1),transparent_70%)]" />
        </div>

        <div className="flex items-baseline gap-2 sm:flex-col sm:items-center sm:gap-1 sm:text-center">
          <p className="shrink-0 text-xs font-bold tracking-wide text-white/80">
            {label}
          </p>

          <p className="text-sm text-white/40 sm:mt-1 sm:text-xs">
            Tap a card below
          </p>
        </div>
      </div>
    );
  }

  const card = getCardById(selection.id);

  // ---- Reading layout (reference image style) ----
  if (showReading) {
    return (
      <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-orange-500 bg-[#1c0f2e] px-5 py-5 shadow-2xl sm:gap-2.5 sm:py-6">
        <div className="h-52 w-32 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white sm:h-56 sm:w-36">
          <img
            src={card.image}
            alt={card.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.16em] text-orange-400">
            {label}
          </span>

          {selection.reversed && (
            <span className="rounded-full border border-pink-400/40 bg-pink-400/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-pink-300">
              REVERSED
            </span>
          )}
        </div>

        <p className="text-base font-bold text-white">{card.name}</p>

        <p className="text-center text-sm leading-[1.65] text-white/60">
          {getCardReading(selection, position)}
        </p>
      </div>
    );
  }

  // ---- Original meaning layout (unchanged) ----
  return (
    <div className="flex flex-1 items-center gap-4 rounded-2xl border border-orange-500 bg-[#1c0f2e] px-15 py-4 shadow-2xl sm:flex-col sm:gap-2.5 sm:py-5 sm:text-center">
      <p className="w-14 shrink-0 text-xs font-bold tracking-wide text-orange-400 sm:w-auto">
        {label}
      </p>

      <div className="h-20 w-14 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white sm:h-44 sm:w-32">
        <img
          src={card.image}
          alt={card.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2.5 sm:items-center">
        <p className="text-base font-bold text-white">{card.name}</p>

        {selection.reversed && (
          <span className="hidden w-fit rounded-full border border-pink-400/40 bg-pink-400/10 px-3 py-1 text-xs font-semibold text-pink-300 sm:inline-block">
            REVERSED
          </span>
        )}

        <p className="hidden text-sm text-white/60 sm:block">
          {selection.reversed
            ? card.reversedMeaning || card.meaning
            : card.meaning}
        </p>
      </div>
    </div>
  );
}

function chunk(arr, size) {
  const rows = [];

  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size));
  }

  return rows;
}

function DeckRow({ row, cardWidthClass, overlapClass, selectedIds, onToggle }) {
  return (
    <div className="flex">
      {row.map((id, i) => (
        <div
          key={id}
          onClick={() => onToggle(id)}
          className={`relative shrink-0 cursor-pointer transition-transform duration-200 hover:z-20 hover:-translate-y-3 hover:scale-110 ${cardWidthClass} ${
            i === 0 ? "" : overlapClass
          }`}
        >
          <CardFace selected={selectedIds.includes(id)} />
        </div>
      ))}
    </div>
  );
}

function Deck({ selectedIds, onToggle }) {
  const cardIds = Array.from({ length: 78 }, (_, i) => i);

  const mobileRows = chunk(cardIds, 13);
  const desktopRows = chunk(cardIds, 39);

  return (
    <div className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
      {/* Mobile: 6 rows of 13 */}
      <div className="flex flex-col gap-3 sm:hidden">
        {mobileRows.map((row, i) => (
          <DeckRow
            key={i}
            row={row}
            cardWidthClass="w-12"
            overlapClass="-ml-6"
            selectedIds={selectedIds}
            onToggle={onToggle}
          />
        ))}
      </div>

      {/* Desktop: 2 rows of 39 */}
      <div className="hidden flex-col gap-4 sm:flex">
        {desktopRows.map((row, i) => (
          <DeckRow
            key={i}
            row={row}
            cardWidthClass="w-16"
            overlapClass="-ml-10"
            selectedIds={selectedIds}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

function ShuffleIcon({ className }) {
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
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  );
}

function RepeatIcon({ className }) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11V9a3 3 0 0 1 3-3h15" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
    </svg>
  );
}

function MessageIcon({ className }) {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.38 8.38 0 0 1-4.5-1.3L3 20l1.3-4.5A8.38 8.38 0 0 1 3 11.5a8.38 8.38 0 0 1 8.5-8.5 8.38 8.38 0 0 1 9 8.5Z" />
    </svg>
  );
}

function getCardTheme(selection) {
  const card = getCardById(selection.id);

  return selection.reversed
    ? card.reversedMeaning || card.meaning
    : card.meaning;
}

function getCardReading(selection, position) {
  const card = getCardById(selection.id);
  const theme = getCardTheme(selection);

  if (position === "past") {
    if (selection.reversed) {
      return `In your past, ${card.name} reversed points to a period where the energy of ${theme.toLowerCase()} may have been blocked, delayed, or turned inward. This experience may have shaped the way you approached the situation and created patterns that are still influencing where you are today.`;
    }

    return `In your past, ${card.name} points to a period shaped by ${theme.toLowerCase()}. This experience helped establish the circumstances and patterns that have brought you to where you are now.`;
  }

  if (position === "present") {
    if (selection.reversed) {
      return `Right now, ${card.name} reversed suggests that ${theme.toLowerCase()} is creating some tension or instability in your current situation. Something may feel incomplete, delayed, or difficult to settle, making this an important moment to understand what needs your attention.`;
    }

    return `Right now, ${card.name} highlights ${theme.toLowerCase()}. This is the energy surrounding your current situation and can reveal what deserves your attention as you decide what to do next.`;
  }

  if (selection.reversed) {
    return `Looking ahead, ${card.name} reversed suggests that the difficult side of ${theme.toLowerCase()} may become more noticeable if the present pattern continues. This does not mean the outcome is fixed, but it points toward something worth recognizing and addressing now.`;
  }

  return `Looking ahead, ${card.name} points toward ${theme.toLowerCase()}. If the current direction continues, this energy may become increasingly important in the next stage of your journey.`;
}

function getTogetherReading(selected) {
  const pastCard = getCardById(selected[0].id);
  const presentCard = getCardById(selected[1].id);
  const futureCard = getCardById(selected[2].id);

  const pastTheme = getCardTheme(selected[0]).toLowerCase();
  const presentTheme = getCardTheme(selected[1]).toLowerCase();
  const futureTheme = getCardTheme(selected[2]).toLowerCase();

  return `Your reading moves from ${pastTheme} through ${presentTheme} and toward ${futureTheme}. Together, ${pastCard.name}, ${presentCard.name}, and ${futureCard.name} show how your past experiences connect with what you are dealing with now and the direction your current choices may lead you.`;
}

function TarotActions({ count, ready, onShuffle, onReading }) {
  const remaining = 3 - count;

  return (
    <div className="mt-6 flex flex-col items-center gap-3 px-4 sm:flex-row sm:justify-center">
      {ready ? (
        <button
          type="button"
          onClick={onReading}
          className="w-full select-none rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.4)] transition-transform hover:scale-105 sm:w-auto"
        >
          Get reading
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white/40 sm:w-auto"
        >
          {count === 0
            ? "Pick 3 cards"
            : `Pick ${remaining} more card${remaining === 1 ? "" : "s"}`}
        </button>
      )}

      {count > 0 && (
        <button
          type="button"
          onClick={onShuffle}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 sm:w-auto"
        >
          <ShuffleIcon className="h-4 w-4" />
          Shuffle Again
        </button>
      )}
    </div>
  );
}

function TarotReading({ selected, onNewReading }) {
  return (
    <div className="mx-auto mt-10 max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20">
      {/* Together */}
      <div className="mt-5 rounded-2xl border border-[rgba(255,46,147,0.35)] bg-[linear-gradient(rgba(255,46,147,0.12),rgba(34,20,46,0.9))] px-6 py-6 text-center sm:px-12">
        <p className="text-[11px] font-bold tracking-[0.18em] text-orange-400">
          TOGETHER
        </p>

        <p className="mx-auto mt-2 max-w-4xl text-sm leading-7 text-white/80 sm:text-[15px]">
          {getTogetherReading(selected)}
        </p>
      </div>

      {/* Draw new cards */}
      <div className="mt-6 rounded-2xl border border-dashed border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.03)] px-6 py-7 text-center sm:px-10">
        <h3 className="text-lg font-bold text-white">Want another reading?</h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/65">
          Draw three new cards.
        </p>

        <button
          type="button"
          onClick={onNewReading}
          className="mt-5 select-none inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition-all hover:scale-105 hover:bg-orange-500/15"
        >
          <RepeatIcon className="h-4 w-4" />
          Draw new cards
        </button>
      </div>

      {/* Know more */}
      <div className="mt-5 rounded-2xl border border-[rgba(255,140,66,0.32)] bg-[linear-gradient(135deg,rgba(255,140,66,0.12),rgba(255,46,147,0.09))] px-6 py-7 text-center sm:px-10">
        <h3 className="text-lg font-bold text-white sm:text-xl">
          Know about your future through planetary positions
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-white/65 sm:text-[15px]">
          Tarot shows this moment. Your birth chart shows the timing: which
          planetary periods are running now, and when things actually turn. Ask
          Aura AI and get answers.
        </p>
        <Link
          to="/chat"
          className="mt-5 select-none inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,60,120,0.4)] transition-transform hover:scale-105"
        >
          <MessageIcon className="h-4 w-4" />
          Know more
        </Link>
      </div>
    </div>
  );
}

function Tarot() {
  const [selected, setSelected] = useState([]);
  const [showReading, setShowReading] = useState(false);

  const handleShuffle = () => {
    setSelected([]);
    setShowReading(false);
  };

  const handleGetReading = () => {
    if (selected.length === 3) {
      setShowReading(true);
    }
  };

  const handleToggle = (id) => {
    // Don't allow changes once the reading is open.
    if (showReading) return;

    setSelected((prev) => {
      if (prev.some((s) => s.id === id)) {
        return prev.filter((s) => s.id !== id);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [
        ...prev,
        {
          id,
          reversed: Math.random() < 0.5,
        },
      ];
    });
  };

  const selectedIds = selected.map((s) => s.id);

  return (
    <section className="relative z-10 py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <StarBadge />

        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Pick three cards. See what they say.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-white/70 sm:text-lg">
          One card for your past, one for your present, one for what is coming.
          Choose any three from the deck below
        </p>
      </div>

      {/* Question */}
      <div className="mx-auto mt-8 max-w-md px-4 sm:px-6">
        <div className="mb-2 flex items-center gap-1.5 text-sm">
          <span className="font-semibold text-white">
            What is on your mind?
          </span>

          <span className="text-white/40">optional</span>
        </div>

        <input
          type="text"
          placeholder="e.g. Should I take the new role?"
          className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-pink-500/50"
        />
      </div>

      {/* Selected cards ALWAYS remain visible */}
      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 px-4 sm:flex-row sm:gap-4 sm:px-6">
        <CardSlot
          label="PAST"
          selection={selected[0]}
          showReading={showReading}
          position="past"
        />
        <CardSlot
          label="PRESENT"
          selection={selected[1]}
          showReading={showReading}
          position="present"
        />
        <CardSlot
          label="FUTURE"
          selection={selected[2]}
          showReading={showReading}
          position="future"
        />
      </div>

      {/* Count */}
      <p className="mt-4 text-center text-sm text-white/70">
        <span className="font-semibold text-orange-400">{selected.length}</span>{" "}
        of 3 chosen
      </p>

      {/* Deck disappears after Get free reading */}
      {!showReading && (
        <div className="mx-auto flex">
          <Deck selectedIds={selectedIds} onToggle={handleToggle} />
        </div>
      )}

      {/* Buttons disappear after Get free reading */}
      {!showReading && (
        <TarotActions
          count={selected.length}
          ready={selected.length === 3}
          onShuffle={handleShuffle}
          onReading={handleGetReading}
        />
      )}

      {/* Reading appears below the selected cards */}
      {showReading && selected.length === 3 && (
        <TarotReading selected={selected} onNewReading={handleShuffle} />
      )}
    </section>
  );
}

export default Tarot;
