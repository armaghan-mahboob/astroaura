const stats = [
  { value: "10M+", label: "real charts read" },
  { value: "10K+", label: "Vedic rules encoded" },
  { value: "100+", label: "astrologers validating" },
];

// Repeated 3x to comfortably cover wide screens before the loop wraps
const baseSet = [...stats, ...stats, ...stats];
function FeatureStats() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Top Gradient Border Line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, #0000, #ff8c428c 28%, #ff2e9399 50%, #ff8c428c 72%, #0000)",
        }}
      />

      {/* Marquee Wrapper with Mask Image */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
          WebkitMaskImage:
            "linear-gradient(90deg, #0000, #000 9%, #000 91%, #0000)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[...baseSet, ...baseSet].map((stat, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col items-center gap-1 px-10 sm:px-14"
            >
              <span className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Border Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, #0000, #ff8c428c 28%, #ff2e9399 50%, #ff8c428c 72%, #0000)",
        }}
      />
    </div>
  );
}

export default FeatureStats;
