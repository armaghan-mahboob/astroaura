import FeatureStats from "./FeatureStats";
import FeatureCarousel from "./FeatureCarousel";

function Features() {
  return (
    <section className="relative z-10 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Confused About Life? Ask Aura AI Now
        </h2>
        <p className="mt-3 text-white/70 sm:text-lg">
          Get instant Vedic astrology guidance based on your birth.
        </p>
      </div>

      <div className="mt-10">
        <FeatureStats />
      </div>

      <div className="mt-12">
        <FeatureCarousel />
      </div>
    </section>
  );
}

export default Features;
