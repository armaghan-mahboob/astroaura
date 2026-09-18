import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    /* Changed overflow-hidden to overflow-x-hidden to restore full page scrolling */
    <div className="relative min-h-screen w-full bg-[#1c0423] text-white overflow-x-hidden">
      {/* 1. Base Radial Backdrop - Changed absolute to fixed so it stays behind all content */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #3d0c4e 0%, #23052b 50%, #130218 100%)",
        }}
      />

      {/* 2. Soft Purple Glow - Fixed to viewport */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-150 rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* 3. Soft Pink Glow - Fixed to viewport */}
      <div className="fixed top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-125 rounded-full bg-pink-600/15 blur-[140px] pointer-events-none" />

      {/* 4. Starfield Tile Pattern - Fixed to viewport */}
      <div
        className="fixed inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 150px 80px, #ffb3d9, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 280px 120px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 400px 200px, #ffe6f2, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 520px 310px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 680px 180px, #ffd1ec, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 800px 240px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 950px 60px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 1100px 290px, #ffccd5, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 1250px 140px, #ffffff, rgba(0,0,0,0))
          `,
          backgroundSize: "600px 350px",
        }}
      />

      {/* Page Content wrapped natively without breaking scroll */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default App;
