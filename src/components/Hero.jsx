import Navbar from "./Navbar";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import Planets from "./Planets";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden">
      {/* Background image container with blur and fade — overflow-hidden scoped here so the scaled bg doesn't leak, without clipping planets below */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat  opacity-70 scale-130"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
      </div>
      {/* Dark overlay fading into brand purple at the bottom */}
      <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/20 to-black/10" />
      {/* Curved bottom edge */}
      <svg
        className="absolute bottom-0 left-0 w-full text-[#5E155F]"
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,50 C360,300 1080,300 1440,50 L1440,300 L0,300 Z" />
      </svg>
      <Planets />
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        <div className="pointer-events-auto mx-auto max-w-7xl px-4 pt-30 pb-20 sm:px-6 lg:px-10">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-20">
            <LeftHero />
            <RightHero />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
