"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #050d0b 0%, #071a14 50%, #030a09 100%)" }}
      />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 70%)", top: "0%", left: "-15%" }} />
      <div className="glow-orb" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)", bottom: "0%", right: "-10%", animationDelay: "3s" }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(45,212,191,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto w-full">

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-6 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ background: "rgba(13,148,136,0.1)", border: "1px solid rgba(13,148,136,0.3)", color: "var(--teal-accent)", transitionDuration: "600ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--teal-light)" }} />
          Premium Barber Studio
        </div>

        {/* Heading */}
        <h1
          className={`font-bold leading-[1.05] mb-5 transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            transitionDuration: "700ms",
            transitionDelay: "80ms",
          }}
        >
          <span style={{ color: "var(--foreground)" }}>Precision. </span>
          <span className="gradient-text">Style.</span>
          <br className="hidden sm:block" />
          <span style={{ color: "var(--foreground)" }}> Craft.</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-md mx-auto mb-8 leading-relaxed transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ color: "var(--muted)", fontSize: "clamp(0.9rem, 2vw, 1.05rem)", transitionDuration: "700ms", transitionDelay: "160ms" }}
        >
          Where every cut tells a story. Your destination for fresh fades,
          sharp lineups, and flawless blends — done right, every time.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-3 justify-center mb-14 transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDuration: "700ms", transitionDelay: "240ms" }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-7 py-3.5 rounded-xl font-semibold tracking-wide"
            style={{ background: "var(--teal-primary)", color: "white", fontSize: "0.95rem", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}
          >
            Book an Appointment
          </button>
          <button
            onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-7 py-3.5 rounded-xl font-semibold tracking-wide"
            style={{ background: "transparent", color: "var(--teal-light)", border: "1px solid rgba(13,148,136,0.4)", fontSize: "0.95rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(13,148,136,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-10 sm:gap-16 pt-8 transition-all ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ borderTop: "1px solid rgba(13,148,136,0.15)", transitionDuration: "700ms", transitionDelay: "320ms" }}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
            { value: "4.9★", label: "Avg Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-bold mb-0.5" style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
                {s.value}
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--muted)" }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: "9px", letterSpacing: "0.35em" }} className="uppercase">Scroll</span>
        <ChevronDown size={18} style={{ color: "var(--teal-light)", animation: "fade-in 1.2s ease-in-out infinite alternate" }} />
      </button>
    </section>
  );
}
