"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowDown } from "lucide-react";
import Marquee from "./Marquee";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { value: business.reviewCount, label: "5★ Reviews" },
  { value: `${business.yearsExperience} Yrs`, label: "Behind the Chair" },
  { value: "Pro", label: "Athlete Trusted" },
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
        className="glow"
        style={{
          width: 620,
          height: 620,
          background: "radial-gradient(circle, rgba(191,139,60,0.16) 0%, transparent 70%)",
          top: "8%",
          right: "-12%",
        }}
      />

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
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          className="flex items-center gap-3 mb-7"
          initial={{ opacity: 0, y: 14 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="diamond" />
          <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>
            Est. Vaughan, ON · Master Barber
          </span>
        </motion.div>

        <h1 className="display" style={{ fontSize: "clamp(4.5rem, 19vw, 17rem)", lineHeight: 0.82 }}>
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

        <div className="mt-9 grid sm:grid-cols-[1fr_auto] gap-8 sm:gap-12 items-end">
          <motion.p
            className="max-w-md text-[0.95rem] sm:text-base leading-relaxed"
            style={{ color: "var(--on-dark-muted)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            Sharp fades, clean lineups, and flawless blends — quiet craft trusted
            by pro athletes. Book your chair and find out why the city keeps DQ a
            secret.
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

        {/* Stat ticket */}
        <motion.div
          className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3"
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.62 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-x-7">
              {i > 0 && <span className="diamond" style={{ opacity: 0.6 }} />}
              <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>
                <span style={{ color: "var(--accent-soft)" }}>{s.value}</span> — {s.label}
              </span>
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
