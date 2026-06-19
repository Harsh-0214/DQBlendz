"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowDown } from "lucide-react";
import Marquee from "./Marquee";
import Embers from "./Embers";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { value: `${business.yearsExperience}+`, unit: "Yrs", label: "Experience" },
  { value: `${business.reviewCount}`, unit: "★", label: "5-Star Reviews" },
];

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="sec-dark relative min-h-dvh flex flex-col overflow-hidden grain pt-[72px] md:pt-[84px]">
      {/* Coherent warm wash — symmetric, no seams */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(125% 95% at 50% 28%, rgba(191,139,60,0.20) 0%, rgba(191,139,60,0.07) 38%, transparent 66%)",
        }}
      />

      {/* Two large balanced drifting glows for subtle life */}
      <div
        className="glow drift-a"
        style={{
          width: 780,
          height: 780,
          background: "radial-gradient(circle, rgba(224,182,103,0.13) 0%, transparent 70%)",
          top: "-8%",
          left: "8%",
        }}
      />
      <div
        className="glow drift-b"
        style={{
          width: 780,
          height: 780,
          background: "radial-gradient(circle, rgba(191,139,60,0.15) 0%, transparent 70%)",
          top: "0%",
          right: "8%",
        }}
      />

      {/* Full-width dot-grid, softly faded toward the edges (symmetric) */}
      <div
        className="dot-grid absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.1,
          WebkitMaskImage: "radial-gradient(110% 100% at 50% 40%, #000 0%, transparent 82%)",
          maskImage: "radial-gradient(110% 100% at 50% 40%, #000 0%, transparent 82%)",
        }}
      />

      {/* Floating embers */}
      <Embers />

      {/* Soft, symmetric vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(135% 115% at 50% 38%, transparent 56%, rgba(0,0,0,0.5) 100%)" }}
      />

      {/* Center stage — aligned to the navbar container so it sits under the logo */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <h1 className="display lg:max-w-[72%]" style={{ fontSize: "clamp(3.25rem, 12vw, 11rem)", lineHeight: 0.84 }}>
          <motion.span
            className="block"
            style={{ color: "var(--on-dark)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
          >
            DQ
          </motion.span>
          <motion.span
            className="block gold-shimmer"
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
          >
            Blendz
          </motion.span>
        </h1>

        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          {/* Left: description + stats */}
          <div>
            <motion.p
              className="max-w-md text-[0.95rem] sm:text-base leading-relaxed"
              style={{ color: "var(--on-dark-muted)" }}
              initial={{ opacity: 0, y: 18 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
            >
              Precision fades, clean lineups, and seamless blends — crafted with
              patience and a sharp eye for detail. Master barbering in Vaughan.
            </motion.p>

            <motion.div
              className="mt-9 flex items-stretch gap-7 sm:gap-10"
              initial={{ opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.5 }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-stretch gap-7 sm:gap-10">
                  {i > 0 && <span className="w-px self-stretch" style={{ background: "var(--line-dark)" }} />}
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="display" style={{ color: "var(--accent-soft)", fontSize: "clamp(2.2rem, 4.5vw, 3rem)", lineHeight: 1 }}>
                        {s.value}
                      </span>
                      <span className="display" style={{ color: "var(--on-dark)", fontSize: "clamp(1.05rem, 2vw, 1.4rem)", lineHeight: 1 }}>
                        {s.unit}
                      </span>
                    </div>
                    <span className="kicker block mt-2" style={{ color: "var(--on-dark-muted)" }}>
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: statement + CTAs, grouped together */}
          <div className="flex flex-col lg:items-end lg:text-right">
            <motion.span
              className="kicker mb-4"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Sharp · Clean · Precise
            </motion.span>

            {["Sharp cuts.", "Clean fades.", "No compromise."].map((line, i) => (
              <motion.span
                key={line}
                className={`display ${i === 2 ? "gold-shimmer" : ""}`}
                style={{
                  fontSize: "clamp(1.9rem, 3vw, 3rem)",
                  lineHeight: 1.05,
                  color: i === 2 ? undefined : "var(--on-dark)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: 0.55 + i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}

            <motion.div
              className="mt-7 flex flex-col xs:flex-row lg:flex-row gap-3 w-full xs:w-auto lg:justify-end"
              initial={{ opacity: 0, y: 18 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
            >
              <a
                href={business.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent px-7 py-4"
              >
                <Calendar size={16} />
                Book on Booksy
              </a>
              <button
                onClick={() => document.querySelector("#cuts")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-outline-dark px-7 py-4"
              >
                See the Cuts
                <ArrowDown size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom marquee band */}
      <motion.div
        className="relative z-10 py-5"
        style={{ borderTop: "1px solid var(--line-dark)", borderBottom: "1px solid var(--line-dark)" }}
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Marquee
          items={["Skin Fades", "Lineups", "Beard Sculpts", "Hot Towel Shaves", "Kids Cuts", "Blends"]}
          style={{ color: "var(--on-dark)" }}
        />
      </motion.div>
    </section>
  );
}
