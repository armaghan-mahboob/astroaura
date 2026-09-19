// src/components/MobileApp.jsx
import { useEffect, useRef, useState } from "react";
function AppleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.3-36.5 16.3-64 50-84.4-18.8-26.9-47.1-41.7-84.6-44.6-35.5-2.8-74.4 20.7-88.6 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.4q0 39.3 14.4 81.1c12.8 36.7 59 126.6 107.1 125.1 25.2-.6 43-18 75.8-18 31.8 0 48.3 18 76.4 18 48.6-.7 90.4-82.4 102.6-119.2-65.2-30.7-61.6-90.1-61.6-91.7ZM262 104.4c27.3-32.4 24.8-61.9 24-72.4-24.1 1.4-52 16.4-67.9 34.8-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3Z" />
    </svg>
  );
}

function PlayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M3.5 2.6 14 12 3.5 21.4c-.3-.3-.5-.7-.5-1.2V3.8c0-.5.2-.9.5-1.2Z"
        fill="#00D2FF"
      />
      <path
        d="M14 12 17.6 8.8l3.6 2c1.1.6 1.1 2.2 0 2.8l-3.6 2L14 12Z"
        fill="#FFCB00"
      />
      <path d="M3.5 2.6 17.6 8.8 14 12 3.5 2.6Z" fill="#FF3A44" />
      <path d="M3.5 21.4 17.6 15.2 14 12 3.5 21.4Z" fill="#00E876" />
    </svg>
  );
}

function StoreButton({ Icon, caption, store }) {
  return (
    <button
      type="button"
      className="flex w-full justify-center items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-white/90 hover:bg-white/10 sm:w-auto"
    >
      <Icon className="h-6 w-6 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-xs text-white/60">{caption}</span>
        <span className="text-base font-semibold">{store}</span>
      </span>
    </button>
  );
}

const devices = [
  {
    id: "left",
    img: "/public/mobileapps/leftMobile.webp",
    rotate: -12,
    z: 10,
    left: "6%",
  },
  {
    id: "center",
    img: "/public/mobileapps/middleMobile.webp",
    rotate: 0,
    z: 20,
    left: "50%",
  },
  {
    id: "right",
    img: "/public/mobileapps/rightMobile.webp",
    rotate: 12,
    z: 10,
    right: "6%",
  },
];

function DeviceStack() {
  const [hovered, setHovered] = useState(null);
  const isDesktopRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    isDesktopRef.current = mq.matches;
    const handler = (e) => (isDesktopRef.current = e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleEnter = (id) => {
    if (isDesktopRef.current) setHovered(id);
  };
  const handleLeave = () => {
    if (isDesktopRef.current) setHovered(null);
  };

  return (
    <div className="relative mx-auto h-60 w-full max-w-sm sm:h-88 sm:max-w-md">
      {devices.map((d) => {
        const isHovered = hovered === d.id;
        const isCenter = d.id === "center";
        const translateX = isCenter ? -50 : 0;
        const translateY = isHovered ? -14 : 0;
        const scale = isHovered ? (isCenter ? 1.2 : 1.5) : 1;
        const currentRotate = isHovered ? 0 : d.rotate;

        return (
          <img
            key={d.id}
            src={d.img}
            alt="Aura AI app screen"
            onMouseEnter={() => handleEnter(d.id)}
            onMouseLeave={handleLeave}
            className={`absolute bottom-0 cursor-pointer rounded-2xl border-2 border-pink-700/40 shadow-2xl transition-transform duration-300 ease-out ${
              isCenter ? "w-30 sm:w-40" : "w-28 sm:w-36"
            }`}
            style={{
              left: d.left,
              right: d.right,
              zIndex: isHovered ? 50 : d.z,
              transform: `translateX(${translateX}%) translateY(${translateY}px) rotate(${currentRotate}deg) scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
}

function MobileApp() {
  return (
    <section className="relative bg-[#301833] z-10 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto px-8 flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* Left: text content */}
        <div className="flex w-full flex-col items-center gap-5 text-center lg:w-auto lg:max-w-md lg:items-start lg:text-left">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Take Your Cosmic Journey Anywhere
          </h2>

          <p className="text-white/70 sm:text-lg">
            Access personalized horoscopes, birth chart readings, and cosmic
            guidance right from your pocket. Our mobile app brings the universe
            to your fingertips.
          </p>

          <div>
            <p className="text-lg font-extrabold tracking-wide text-pink-500 sm:text-xl">
              APP LIVE NOW
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/80 sm:justify-start sm:text-base">
              <span className="text-yellow-400">★★★★★</span>
              <span className="font-semibold text-white">4.7</span>
              <span>on Google Play · 1M+ users</span>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <StoreButton
              Icon={AppleIcon}
              caption="Coming soon on the"
              store="App Store"
            />
            <StoreButton
              Icon={PlayIcon}
              caption="Get it on"
              store="Google Play"
            />
          </div>
        </div>

        {/* Right: device stack */}
        <div className="w-full lg:w-auto lg:flex-1">
          <DeviceStack />
        </div>
      </div>
    </section>
  );
}
export default MobileApp;
