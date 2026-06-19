"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      ref={scrollRef}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #050d0b 0%, #071a14 40%, #030a09 100%)",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(13,148,136,0.12) 0%, transparent 70%)",
          top: "10%",
          left: "-10%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)",
          bottom: "5%",
          right: "-5%",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--teal-light) 1px, transparent 1px), linear-gradient(90deg, var(--teal-light) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            background: "rgba(13,148,136,0.1)",
            border: "1px solid rgba(13,148,136,0.3)",
            color: "var(--teal-accent)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--teal-light)" }}
          />
          Premium Barber Studio
        </div>

        <h1
          className={`text-5xl sm:text-7xl lg:text-8xl font-bold leading-none mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span style={{ color: "var(--foreground)" }}>Precision.</span>
          <br />
          <span className="gradient-text">Style.</span>
          <br />
          <span style={{ color: "var(--foreground)" }}>Craft.</span>
        </h1>

        <p
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ color: "var(--muted)" }}
        >
          Where every cut tells a story. Experience the art of grooming at
          DQBlendz — your destination for fresh fades, sharp lineups, and
          flawless blends.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary px-8 py-4 rounded-xl font-semibold text-base tracking-wide"
            style={{
              background: "var(--teal-primary)",
              color: "white",
              boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
            }}
          >
            Book an Appointment
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary px-8 py-4 rounded-xl font-semibold text-base tracking-wide"
            style={{
              background: "transparent",
              color: "var(--teal-light)",
              border: "1px solid rgba(13,148,136,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(13,148,136,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            View Our Work
          </button>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-8 sm:gap-12 mt-16 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
              >
                {s.value}
              </div>
              <div className="text-xs tracking-wider uppercase mt-1" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--muted)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "10px" }}>
          Scroll
        </span>
        <ChevronDown
          size={20}
          style={{
            animation: "fade-in 1s ease-in-out infinite alternate",
            color: "var(--teal-light)",
          }}
        />
      </button>
    </section>
  );
}
