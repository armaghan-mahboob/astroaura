import Hero from "./components/Hero";
import Features from "./components/Features";
import Tarot from "./components/Tarot";
import Kundli from "./components/Kundli";
import GlobalTrust from "./components/GlobalTrust";
import GlobalUseCases from "./components/GlobalUseCases";
import Testimonials from "./components/Testimonials";
import BlogStrip from "./components/BlogStrip";
import MobileApp from "./components/MobileApp";
import UAA from "./components/UAA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
// import TarotAudit from "./components/TarotAudit";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* ============ 1. BASE COSMIC GRADIENT ============
          Vertical magenta wash: #4c065f (top) -> #700547 (bottom).
          Fixed to viewport so the page scrolls over a static cosmos. */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #4c065f 0%, #5a1259 35%, #6a1a55 70%, #700547 100%)",
        }}
      />
      {/* ============ 2. SOFT PURPLE GLOW (top) ============ */}
      <div className="pointer-events-none fixed left-1/2 top-1/4 z-0 h-125 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/25 blur-[120px]" />
      {/* ============ 3. SOFT PINK GLOW (bottom) ============ */}
      <div className="pointer-events-none fixed left-1/2 top-3/4 z-0 h-100 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[140px]" />
      {/* ============ 4. STARFIELD TILE ============ */}
      {/* ============ 4. STARFIELD TILE ============ */}
      {/* ============ 4. STARFIELD TILE (soft / blurred) ============ */}
      {/* ============ 4. STARFIELD TILE (soft / blurred) ============ */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          backgroundImage: `
      radial-gradient(3px 3px at 20px 30px,   rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(3px 3px at 60px 180px,  rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(4px 4px at 110px 60px,  rgba(255,179,217,0.90) 0%, rgba(255,179,217,0.30) 25%, transparent 55%),
      radial-gradient(3px 3px at 150px 80px,  rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 190px 260px, rgba(255,209,236,0.85) 0%, rgba(255,209,236,0.25) 25%, transparent 55%),
      radial-gradient(4px 4px at 230px 40px,  rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 25%, transparent 55%),
      radial-gradient(3px 3px at 260px 200px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 300px 130px, rgba(255,204,213,0.90) 0%, rgba(255,204,213,0.30) 25%, transparent 55%),
      radial-gradient(3px 3px at 340px 300px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 380px 90px,  rgba(255,230,242,0.90) 0%, rgba(255,230,242,0.30) 25%, transparent 55%),
      radial-gradient(4px 4px at 420px 220px, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 25%, transparent 55%),
      radial-gradient(3px 3px at 460px 40px,  rgba(255,179,217,0.85) 0%, rgba(255,179,217,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 500px 170px, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 540px 280px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 580px 90px,  rgba(255,209,236,0.90) 0%, rgba(255,209,236,0.30) 25%, transparent 55%),
      radial-gradient(3px 3px at 30px 320px,  rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 90px 250px, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(3px 3px at 170px 340px, rgba(255,204,213,0.85) 0%, rgba(255,204,213,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 250px 30px,  rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(4px 4px at 330px 60px,  rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 25%, transparent 55%),
      radial-gradient(3px 3px at 410px 150px, rgba(255,230,242,0.85) 0%, rgba(255,230,242,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 490px 240px, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 550px 200px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),

      radial-gradient(2.5px 2.5px at 40px 100px,  rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 80px 20px,     rgba(255,209,236,0.90) 0%, rgba(255,209,236,0.28) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 130px 200px, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.22) 25%, transparent 55%),
      radial-gradient(3px 3px at 170px 140px,   rgba(255,179,217,0.85) 0%, rgba(255,179,217,0.26) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 210px 320px, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 240px 100px, rgba(255,230,242,0.85) 0%, rgba(255,230,242,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 280px 260px,   rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 320px 40px,  rgba(255,204,213,0.85) 0%, rgba(255,204,213,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 360px 180px,   rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.28) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 400px 60px,  rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.22) 25%, transparent 55%),
      radial-gradient(3px 3px at 440px 300px,   rgba(255,209,236,0.85) 0%, rgba(255,209,236,0.25) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 480px 130px, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.30) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 520px 60px,  rgba(255,179,217,0.85) 0%, rgba(255,179,217,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 560px 320px,   rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 10px 220px,  rgba(255,230,242,0.80) 0%, rgba(255,230,242,0.22) 25%, transparent 55%),
      radial-gradient(3px 3px at 50px 40px,     rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.28) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 100px 300px, rgba(255,204,213,0.85) 0%, rgba(255,204,213,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 140px 20px,    rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 200px 180px, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.22) 25%, transparent 55%),
      radial-gradient(3.5px 3.5px at 300px 340px, rgba(255,209,236,0.90) 0%, rgba(255,209,236,0.30) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 430px 100px, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 25%, transparent 55%),
      radial-gradient(3px 3px at 510px 260px,   rgba(255,179,217,0.85) 0%, rgba(255,179,217,0.26) 25%, transparent 55%),
      radial-gradient(2.5px 2.5px at 580px 240px, rgba(255,255,255,0.80) 0%, rgba(255,255,255,0.22) 25%, transparent 55%)
    `,
          backgroundSize: "600px 350px",
          filter: "blur(1px)",
        }}
      />
      {/* ============ 5. CONTENT ============ */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Features />
        <Tarot />
        {/* <TarotAudit /> */}
        <Kundli />
        <GlobalTrust />
        <GlobalUseCases />
        <Testimonials />
        <BlogStrip />
        <MobileApp />
        <UAA />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
