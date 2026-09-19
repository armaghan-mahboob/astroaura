import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Rohan T.",
    role: "Marketing Manager",
    quote:
      "Aura AI gave me career insights I actually found useful. Aura AI showed me a perfect window for the move — and it actually played out.",
  },
  {
    name: "Priya M.",
    role: "29, Marketing Professional",
    quote:
      "Aura AI gave me clarity before a big job change. It didn't just tell me what might happen but also showed the timing and the likelihood.",
  },
  {
    name: "Arun S.",
    role: "34, Software Engineer",
    quote:
      "I've tried a lot of astrology apps, but this one feels different. The reading felt personal and I could actually see why the prediction was made.",
  },
  {
    name: "Meera K.",
    role: "27, Student",
    quote:
      "I used it late at night to check on a relationship question. The compatibility breakdown was detailed and made sense.",
  },
  {
    name: "Imran S.",
    role: "31, Business Owner",
    quote:
      "I still have questions about my past, but this brought me the closest I've felt to real clarity.",
  },
];

// Repeated 3x for a seamless infinite loop
const loopCards = [...testimonials, ...testimonials, ...testimonials];

const SPEED = 40; // px/sec

function QuoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 8C6.5 8 4 10.5 4 13.7c0 2.6 1.9 4.3 4 4.3.3 0 .6 0 .8-.1-.5 1.6-1.9 2.9-3.8 3.3l.6 1.6c3.4-.7 5.9-3.5 5.9-7.3V13c0-2.8-.9-5-2-5Zm10 0c-3 0-5.5 2.5-5.5 5.7 0 2.6 1.9 4.3 4 4.3.3 0 .6 0 .8-.1-.5 1.6-1.9 2.9-3.8 3.3l.6 1.6c3.4-.7 5.9-3.5 5.9-7.3V13c0-2.8-.9-5-2-5Z" />
    </svg>
  );
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-pink-600 to-orange-500 text-sm font-bold text-white">
      {initials}
    </span>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="h-80 w-72 shrink-0 sm:w-80">
      <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#3a1440]/60 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-pink-400/50 hover:shadow-[0_0_18px_rgba(255,60,150,0.35)]">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Avatar name={item.name} />
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-white">
              {item.name}
            </p>
            <p className="truncate text-sm text-white/60">{item.role}</p>
          </div>
        </div>

        <QuoteIcon className="mt-4 text-pink-400/70" />

        <p className="mt-3 text-base italic leading-snug text-white/90">
          "{item.quote}"
        </p>
      </div>
    </div>
  );
}
function Testimonials() {
  const trackRef = useRef(null);
  const offsetRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let frameId;

    const tick = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const track = trackRef.current;
      if (track) {
        const oneSetWidth = track.scrollWidth / 3;

        if (offsetRef.current === null) {
          offsetRef.current = -oneSetWidth;
        }

        offsetRef.current -= SPEED * dt;
        if (offsetRef.current <= -oneSetWidth * 2) {
          offsetRef.current += oneSetWidth;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          What Our Users Say
        </h2>
        <p className="mt-3 text-white/70 sm:text-lg">
          Real experiences from Aura AI users around the world
        </p>
      </div>

      <div
        className="relative mt-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
          WebkitMaskImage:
            "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
        }}
      >
        <div ref={trackRef} className="flex w-max gap-6 px-4 py-8 sm:px-6">
          {loopCards.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
