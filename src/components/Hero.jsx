import Navbar from "./Navbar";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import Planets from "./Planets";

function Hero() {
  return (
    <section className="relative flex w-full flex-col justify-between pb-16">
      {/* ================= DESKTOP BACKGROUND  (>= 1024px) =================
          120vw x 119vh ellipse, pushed up 30vh so only the bottom
          curve of the ellipse is visible.                                  */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-[-30vh] hidden
          h-[119vh] min-h-195 w-[120vw] -translate-x-1/2
          overflow-hidden rounded-[50%]
          lg:block
        "
        style={{ filter: "brightness(.52) saturate(1.06) contrast(1.04)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/20 to-black/10" />
      </div>

      {/* ============ TABLET + MOBILE BACKGROUND  (< 1024px) ==============
          Full-bleed panel with a bottom curve, min 72vh tall,
          portrait image anchored to the top.                              */}
      {/* ============ TABLET + MOBILE BACKGROUND  (< 1024px) ============== */}
      <div
        className="
    pointer-events-none absolute inset-0
    overflow-hidden
    rounded-[0_0_50%_50%/0_0_90px_90px]
    lg:hidden
  "
        style={{ filter: "brightness(.52) saturate(1.06) contrast(1.04)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/bg-cosmic.webp')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/20 to-black/10" />
      </div>

      {/* ============================ CONTENT ============================ */}
      <Navbar />

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-4 pt-34 pb-8 sm:px-6 lg:px-10">
        {/* items-center  ->  centers LeftHero + RightHero on tablet/mobile
            lg:items-start -> left-aligns them on desktop as before       */}
        <div className="pointer-events-auto flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
          <LeftHero />
          <RightHero />
        </div>
      </div>

      <Planets />
    </section>
  );
}

export default Hero;
