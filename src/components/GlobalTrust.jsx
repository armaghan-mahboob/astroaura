import { useEffect, useRef } from "react";

const trustCards = [
  {
    title: "First chat free",
    description: "Ask your first question free. No card required.",
  },
  {
    title: "100% personal",
    description: "Read from your exact birth date, time, and place.",
  },
  {
    title: "Available 24/7",
    description: "Answers any hour, in your own language.",
  },
  {
    title: "Private & secure",
    description: "Your details are encrypted and never sold.",
  },
  {
    title: "Real Vedic AI",
    description: "Classical Jyotish, read by AI and explained simply.",
  },
];

// Repeated 3x for a seamless infinite loop marquee
const loopCards = [...trustCards, ...trustCards, ...trustCards];

const SPEED = 40; // px/sec, left -> right

function GlobalTrust() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(null);

  const pausedRef = useRef(false);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let frameId;

    const tick = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const track = trackRef.current;
      const container = containerRef.current;

      if (track && container) {
        const oneSetWidth = track.scrollWidth / 3;

        if (offsetRef.current === null) {
          offsetRef.current = -oneSetWidth;
        }

        // Move marquee
        if (!pausedRef.current) {
          offsetRef.current += SPEED * dt;

          if (offsetRef.current >= 0) {
            offsetRef.current -= oneSetWidth;
          }
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;

        // -----------------------------------------
        // 3D CARD PERSPECTIVE
        // -----------------------------------------

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        const cards = track.children;

        Array.from(cards).forEach((card) => {
          const cardRect = card.getBoundingClientRect();

          const cardCenter = cardRect.left + cardRect.width / 2;

          // Distance from the center of the visible area.
          const distance = cardCenter - containerCenter;

          // Normalize distance.
          // -1 = far left
          //  0 = center
          // +1 = far right
          const maxDistance = containerRect.width / 2;
          const normalizedDistance = Math.max(
            -1,
            Math.min(1, distance / maxDistance),
          );

          // Maximum Y rotation.
          const maxRotateY = 14;

          // Left side = positive rotation
          // Right side = negative rotation
          const rotateY = -normalizedDistance * maxRotateY;

          // Small X rotation adds more depth.
          const rotateX = Math.abs(normalizedDistance) * 2.5;

          // Slight scale reduction toward edges.
          const scale = 1 - Math.abs(normalizedDistance) * 0.04;

          card.style.transform = `
            perspective(900px)
            rotateY(${rotateY}deg)
            rotateX(${rotateX}deg)
            scale(${scale})
          `;
        });
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative z-10 overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Why People Trust Aura AI
        </h2>

        <p className="mt-3 text-white/70 sm:text-lg">
          Ancient science, decoded with data-backed AI astrology.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mt-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
          WebkitMaskImage:
            "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
          perspective: "900px",
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6 px-4 py-8 sm:px-6 sm:py-8"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {loopCards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
              }}
              className="relative flex h-56 w-56 shrink-0 cursor-pointer flex-col items-center justify-center gap-2.5 rounded-3xl border border-white/20 bg-white/5 p-3 text-center sm:h-50 sm:w-45"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div
                className="pointer-events-none absolute -bottom-2 left-[15%] h-4 w-[70%] rounded-[50%] bg-black/70 blur-lg"
                style={{
                  transform: "translateZ(-1px)",
                }}
              />

              <h3 className="text-lg font-bold text-white">{card.title}</h3>

              <p className="text-sm leading-snug text-white/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalTrust;
