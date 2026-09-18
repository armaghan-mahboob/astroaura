import Navbar from "./Navbar";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import Planets from "./Planets";

function Hero() {
  // Reduced height from 900 to 750 to compress the background height and reduce the gap
  const maskSVG = `url("data:image/svg+xml,%3Csvg width='1440' height='750' viewBox='0 0 1440 750' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L1440,0 L1440,520 C1080,750 360,750 0,520 Z' fill='black'/%3E%3C/svg%3E")`;

  return (
    <section className="relative w-full pb-16 flex flex-col justify-between">
      {/* Background Masked Container with reduced height */}
      {/* Background Masked Container */}
      <div
        className="absolute inset-x-0 top-0 h-[clamp(600px,52vw,750px)] pointer-events-none overflow-hidden"
        style={{
          maskImage: maskSVG,
          maskSize: "100% 100%",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskImage: maskSVG,
          WebkitMaskSize: "100% 100%",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/20 to-black/10" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-34 pb-8 sm:px-6 lg:px-10 pointer-events-none w-full">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-10 pointer-events-auto">
          <LeftHero />
          <RightHero />
        </div>
      </div>

      <Planets />
    </section>
  );
}

export default Hero;
