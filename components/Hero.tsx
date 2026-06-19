"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowDown } from "lucide-react";
import Marquee from "./Marquee";
import Seal from "./Seal";
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
      <div
        className="glow glow-pulse"
        style={{
          width: 680,
          height: 680,
          background: "radial-gradient(circle, rgba(191,139,60,0.18) 0%, transparent 70%)",
          top: "14%",
          right: "4%",
        }}
      />

      {/* Rotating brand seal — fills the right side */}
      <motion.div
        className="hidden lg:flex absolute z-10 items-center justify-center pointer-events-none"
        style={{ right: "5%", top: "50%", translate: "0 -50%", width: "min(34vw, 480px)", aspectRatio: "1" }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={show ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, ease, delay: 0.5 }}
      >
        <Seal className="w-full h-full animate-float" />
      </motion.div>

      {/* Vertical edge label */}
      <motion.div
        className="hidden lg:block absolute left-7 top-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span
          className="kicker"
          style={{
            color: "var(--on-dark-faint)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            letterSpacing: "0.4em",
          }}
        >
          Vaughan&apos;s Underground Barber
        </span>
      </motion.div>

      {/* Center stage */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1500px] w-full mx-auto px-8 sm:px-14 lg:px-24">
        <h1 className="display lg:max-w-[58%]" style={{ fontSize: "clamp(4rem, 15vw, 13rem)", lineHeight: 0.82 }}>
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
