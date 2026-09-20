// src/components/Kundli.jsx
import { useState, useRef, useEffect } from "react";

// 👇 Replace the <svg> below with your own SVG
function CustomIcon() {
  return (
    <div className="kundli-icon-anim">
      <img
        src="/kundli.svg"
        alt="Kundli icon"
        width={80}
        height={80}
        className="h-20 w-20"
        draggable={false}
      />
    </div>
  );
}

function ChevronDownIcon({ isOpen }) {
  return (
    <svg
      className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Custom Styled Select Component with disabled support
function CustomSelect({ placeholder, options, value, onChange, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center rounded-2xl border border-white/10 bg-white/10 px-3.5 py-3.5 text-left text-sm font-semibold text-white transition-colors focus:border-pink-500/50 disabled:cursor-not-allowed sm:px-4 sm:text-base"
      >
        <span className={value ? "text-white" : "text-white/40"}>
          {value || placeholder}
        </span>
        <ChevronDownIcon isOpen={isOpen && !disabled} />
      </button>

      {/* Styled Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute left-0 top-full z-50 mt-1.5 max-h-60 w-full overflow-y-auto rounded-2xl border border-white/20 bg-linear-to-b from-[#8a224f] via-[#b82662] to-[#3b0b24] p-2 shadow-2xl backdrop-blur-md [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:rounded-r-2xl [&::-webkit-scrollbar-track]:bg-zinc-300 [&::-webkit-scrollbar]:w-3">
          <div className="px-3 py-2.5 text-base font-medium text-white/90">
            {placeholder}
          </div>

          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full rounded-xl px-3 py-2.5 text-left text-base font-normal transition-colors hover:bg-white/20 ${
                value === opt
                  ? "bg-white/25 font-semibold text-white"
                  : "text-white/90"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-pink-500" />
        <span className="text-sm font-bold tracking-wide text-white/80">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function TextInput({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-base font-semibold text-white placeholder-white/40 outline-none transition-colors focus:border-pink-500/50"
    />
  );
}

const days = Array.from({ length: 31 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => String(currentYear - i));
const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);

function NewKundliForm() {
  const [formData, setFormData] = useState({
    gender: "",
    date: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    ampm: "",
    unknownTime: false,
  });

  const updateForm = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
      {/* Name */}
      <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <Field label="Name">
          <TextInput placeholder="Enter Your Name" />
        </Field>
      </div>

      {/* Gender */}
      <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <Field label="Gender">
          <CustomSelect
            placeholder="Select Gender"
            options={["Male", "Female", "Other"]}
            value={formData.gender}
            onChange={(val) => updateForm("gender", val)}
          />
        </Field>
      </div>

      {/* Birth Date */}
      <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <Field label="Birth Date">
          <div className="flex gap-1.5 sm:gap-2.5">
            <CustomSelect
              placeholder="Date"
              options={days}
              value={formData.date}
              onChange={(val) => updateForm("date", val)}
            />
            <CustomSelect
              placeholder="Month"
              options={months}
              value={formData.month}
              onChange={(val) => updateForm("month", val)}
            />
            <CustomSelect
              placeholder="Year"
              options={years}
              value={formData.year}
              onChange={(val) => updateForm("year", val)}
            />
          </div>
        </Field>
      </div>

      {/* Birth Time */}
      <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <Field label="Birth Time">
          <div className="flex flex-col gap-2.5">
            <div
              className={`flex gap-1.5 sm:gap-2.5 transition-all duration-300 ${
                formData.unknownTime
                  ? "pointer-events-none opacity-40 blur-[1px]"
                  : "opacity-100 blur-none"
              }`}
            >
              <CustomSelect
                placeholder="00"
                options={hours}
                value={formData.hour}
                onChange={(val) => updateForm("hour", val)}
                disabled={formData.unknownTime}
              />
              <CustomSelect
                placeholder="00"
                options={minutes}
                value={formData.minute}
                onChange={(val) => updateForm("minute", val)}
                disabled={formData.unknownTime}
              />
              <CustomSelect
                placeholder="AM"
                options={["AM", "PM"]}
                value={formData.ampm}
                onChange={(val) => updateForm("ampm", val)}
                disabled={formData.unknownTime}
              />
            </div>
            <label className="flex items-center gap-2.5 text-sm text-white/60">
              <input
                type="checkbox"
                checked={formData.unknownTime}
                onChange={(e) => updateForm("unknownTime", e.target.checked)}
                className="h-4 w-4 rounded border-white/20 bg-white/10 accent-pink-500"
              />
              Don't know your birth time
            </label>
          </div>
        </Field>
      </div>

      {/* Birth Place */}
      <div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <Field label="Birth Place">
          <TextInput placeholder="Start typing, then tap your city" />
        </Field>
      </div>

      {/* Submit Button */}
      <div className="flex w-full items-end sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
        <button
          type="button"
          disabled
          className="relative w-full overflow-hidden rounded-full bg-linear-to-r from-pink-600 to-orange-500 px-6 py-4 text-base font-semibold text-white opacity-90 shadow-[0_0_20px_rgba(255,60,120,0.35)] transition-transform enabled:hover:scale-105 disabled:cursor-not-allowed"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-3/4 w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/55 to-transparent animate-[cta-shine_2.8s_ease-in-out_infinite]"
          />
          <span className="relative">Select birth city to continue</span>
        </button>
      </div>
    </div>
  );
}

function SavedKundli() {
  return (
    <p className="py-4 text-center text-base text-white/70">
      No saved Kundli found. Please create a new Kundli.
    </p>
  );
}

function Kundli() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      {/* Icon breathing animation */}
      <style>{`
        @keyframes kundliIconBreathe {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        .kundli-icon-anim {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: kundliIconBreathe 4s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }
      `}</style>

      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          Kundli Details: Uncover Your Astrological Insights
        </h2>

        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-24 flex-1 max-w-52 bg-linear-to-r from-transparent to-pink-500/40" />
          <CustomIcon />
          <span className="h-px w-24 flex-1 max-w-52 bg-linear-to-l from-transparent to-pink-500/40" />
        </div>
      </div>

      <div
        className="mx-auto mt-10 max-w-6xl relative w-full"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background:
            "linear-gradient(180deg,#ffffff1a,hsla(0,0%,100%,.035)) padding-box, linear-gradient(135deg,#ed06878c,#fe6c0f73 55%,#ffffff1f) border-box",
          border: "1px solid transparent",
          borderRadius: "28px",
          boxShadow:
            "inset 0 1px 0 #ffffff29, 0 30px 80px -30px #000000a6, 0 0 70px -22px #ed068766",
          paddingBottom: "8px",
        }}
      >
        <div
          className="flex items-center justify-between gap-2 overflow-hidden w-full"
          style={{
            background: "#0000002e",
            borderBottom: "1px solid #ffffff14",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            boxShadow: "inset 0 2px 6px #00000047",
            height: "74px",
            padding: "8px",
          }}
        >
          {" "}
          <button
            type="button"
            onClick={() => setActiveTab("new")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors sm:py-4.5 sm:text-lg ${
              activeTab === "new"
                ? "rounded-2xl bg-linear-to-r from-pink-600 to-orange-500 text-white shadow-[0_0_20px_rgba(255,60,120,0.3)]"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            New Kundli
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors sm:py-4.5 sm:text-lg ${
              activeTab === "saved"
                ? "rounded-2xl bg-linear-to-r from-pink-600 to-orange-500 text-white shadow-[0_0_20px_rgba(255,60,120,0.3)]"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            Saved Kundli
          </button>
        </div>
        <div className="bg-linear-to-b from-pink-950/40 to-orange-950/10 p-5 sm:p-10">
          {activeTab === "new" ? <NewKundliForm /> : <SavedKundli />}
        </div>
      </div>
    </section>
  );
}

export default Kundli;
