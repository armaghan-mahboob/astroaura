import tarotCards from "../data/tarotCards";
import { useState } from "react";

function AuditRow({ card }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-2">
      <div className="h-20 w-14 shrink-0 overflow-hidden rounded border border-white/15 bg-black/30">
        <img
          src={`/public/tarots/${card.slug}.jpg`}
          alt={card.name}
          className="h-full w-full object-cover"
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("missing")}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{card.name}</p>
        <p className="truncate text-xs text-white/50">{card.meaning}</p>
      </div>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
          status === "ok"
            ? "bg-green-500/20 text-green-400"
            : status === "missing"
              ? "bg-red-500/20 text-red-400"
              : "bg-white/10 text-white/40"
        }`}
      >
        {status === "loading" ? "…" : status === "ok" ? "OK" : "MISSING"}
      </span>
    </div>
  );
}

function TarotAudit() {
  return (
    <div className="min-h-screen bg-[#1c0423] p-6 text-white">
      <h1 className="mb-4 text-xl font-bold">
        Tarot Deck Audit ({tarotCards.length} cards)
      </h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tarotCards.map((card) => (
          <AuditRow key={card.slug} card={card} />
        ))}
      </div>
    </div>
  );
}

export default TarotAudit;
