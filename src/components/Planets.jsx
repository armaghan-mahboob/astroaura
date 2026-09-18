const planets = [
  {
    name: "Rahu",
    subtitle: "Rahu",
    img: "/planets/rahu.webp",
    left: "3.93%",
    top: "28.54%",
    size: 202,
  },
  {
    name: "Mercury",
    subtitle: "Budh",
    img: "/planets/mercury.webp",
    left: "15.15%",
    top: "52.76%",
    size: 202,
  },
  {
    name: "Mars",
    subtitle: "Mangal",
    img: "/planets/mars.webp",
    left: "27.90%",
    top: "69.17%",
    size: 202,
  },
  {
    name: "Jupiter",
    subtitle: "Guru",
    img: "/planets/jupiter.webp",
    left: "40%",
    top: "77.76%",
    size: 202,
  },
  {
    name: "Sun",
    subtitle: "Surya",
    img: "/planets/sun.webp",
    left: "50%",
    top: "79.17%",
    size: 202,
  },
  {
    name: "Venus",
    subtitle: "Shukra",
    img: "/planets/venus.webp",
    left: "60%",
    top: "77.76%",
    size: 202,
  },
  {
    name: "Saturn",
    subtitle: "Shani",
    img: "/planets/saturn.webp",
    left: "71%",
    top: "69.17%",
    size: 202,
  },
  {
    name: "Moon",
    subtitle: "Chandra",
    img: "/planets/moon.webp",
    left: "84%",
    top: "52.76%",
    size: 202,
  },
  {
    name: "Ketu",
    subtitle: "Ketu",
    img: "/planets/ketu.webp",
    left: "95%",
    top: "28.54%",
    size: 202,
  },
];
function Planets() {
  return (
    <div
      className="relative z-20 hidden -mt-45 w-full pointer-events-none md:block"
      style={{ aspectRatio: "1440 / 300" }}
    >
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="absolute -translate-x-1/2 flex flex-col items-center gap-1 transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer pointer-events-auto"
          style={{ left: planet.left, top: planet.top }}
        >
          <div className="h-50.5 w-50.5 overflow-hidden leading-none shrink-0">
            <img
              src={planet.img}
              alt={planet.name}
              className="h-full w-full object-cover"
              onError={(e) =>
                console.warn("Missing planet image:", e.currentTarget.src)
              }
            />
          </div>

          <div className="text-center -mt-18">
            <p className="text-sm font-semibold text-white">{planet.name}</p>
            <p className="text-xs text-white/60">{planet.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Planets;
