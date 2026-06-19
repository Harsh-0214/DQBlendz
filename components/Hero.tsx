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
      {/* Ambient drifting light (right-weighted, brighter) */}
      <div
        className="glow drift-a"
        style={{
          width: 640,
          height: 640,
          background: "radial-gradient(circle, rgba(191,139,60,0.30) 0%, transparent 70%)",
          top: "2%",
          right: "6%",
        }}
      />
      <div
        className="glow drift-b"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(224,182,103,0.18) 0%, transparent 70%)",
          bottom: "4%",
          right: "26%",
        }}
      />

      {/* Soft diagonal light beam */}
      <div
        className="absolute inset-y-0 right-0 w-[55%] pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(224,182,103,0.06) 45%, rgba(191,139,60,0.10) 60%, transparent 78%)",
        }}
      />

      {/* Dot-grid texture behind the text */}
      <div
        className="dot-grid absolute inset-y-0 left-0 w-[62%] pointer-events-none"
        style={{
          opacity: 0.14,
          WebkitMaskImage: "radial-gradient(75% 80% at 28% 45%, #000 0%, transparent 78%)",
          maskImage: "radial-gradient(75% 80% at 28% 45%, #000 0%, transparent 78%)",
        }}
      />

      {/* Floating embers */}
      <Embers />

      {/* Faint pinstripe texture */}
      <div className="pinstripe absolute inset-0 pointer-events-none" />

      {/* Soft vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(130% 100% at 22% 45%, transparent 48%, rgba(0,0,0,0.55) 100%)" }}
      />

      {/* Center stage — aligned to the navbar container so it sits under the logo */}
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <h1 className="display lg:max-w-[60%]" style={{ fontSize: "clamp(3.25rem, 12vw, 11rem)", lineHeight: 0.84 }}>
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
            className="block"
            style={{ color: "var(--accent)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.22 }}
          >
            Blendz
          </motion.span>
        </h1>

        <div className="mt-9 grid sm:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-end lg:max-w-[62%]">
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
            className="flex flex-col xs:flex-row sm:flex-col gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
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

        {/* Stat block */}
        <motion.div
          className="mt-12 flex items-stretch gap-7 sm:gap-10"
          initial={{ opacity: 0, y: 14 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.62 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-stretch gap-7 sm:gap-10">
              {i > 0 && <span className="w-px self-stretch" style={{ background: "var(--line-dark)" }} />}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="display" style={{ color: "var(--accent-soft)", fontSize: "clamp(2.4rem, 5vw, 3.2rem)", lineHeight: 1 }}>
                    {s.value}
                  </span>
                  <span className="display" style={{ color: "var(--on-dark)", fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", lineHeight: 1 }}>
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
