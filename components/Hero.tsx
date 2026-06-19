"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Calendar, ArrowUpRight } from "lucide-react";
import { business } from "@/app/config";

function useCounter(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, trigger]);
  return count;
}

const ease = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const reviews = useCounter(business.reviewCount, 1600, visible);
  const years = useCounter(business.yearsExperience, 1200, visible);

  const stats = [
    { value: `${reviews}`, label: "5-Star Reviews" },
    { value: `${years}+`, label: "Years Behind the Chair" },
    { value: "Pro", label: "Athlete Trusted" },
  ];

  return (
    <section className="relative min-h-dvh flex items-end overflow-hidden grain">
      {/* Full-bleed photography */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=85"
          alt="DQ Blendz barber at work"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,11,9,0.55) 0%, rgba(12,11,9,0.35) 35%, rgba(12,11,9,0.85) 78%, var(--bg) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,11,9,0.8) 0%, transparent 55%)",
          }}
        />
      </div>

      <div
        className="glow"
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(200,164,92,0.16) 0%, transparent 70%)",
          bottom: "12%",
          left: "-8%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pb-20 md:pb-28">
        <motion.p
          className="eyebrow mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          Master Barber · Vaughan, ON
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.95] tracking-tight text-[3.25rem] sm:text-7xl lg:text-[5.75rem] max-w-4xl">
          {["The art of a", "perfect cut."].map((line, i) => (
            <motion.span
              key={line}
              className="block"
              style={{ color: i === 1 ? undefined : "var(--ivory)" }}
              initial={{ opacity: 0, y: 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.12 + i * 0.12 }}
            >
              {i === 1 ? <span className="gold-text">perfect cut.</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
        >
          DQ Blendz is Vaughan&apos;s underground barber — trusted by pro
          athletes for fresh fades, sharp lineups, and flawless blends. Quiet
          craft, sharp results.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col sm:flex-row gap-3.5"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.52 }}
        >
          <a
            href={business.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold px-8 py-4 text-sm uppercase tracking-wider"
          >
            <Calendar size={17} />
            Book on Booksy
          </a>
          <button
            onClick={() =>
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn btn-ghost px-8 py-4 text-sm uppercase tracking-wider"
          >
            View the Work
            <ArrowUpRight size={17} />
          </button>
        </motion.div>

        {/* Stat row */}
        <motion.div
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.64 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-x-10">
              {i > 0 && (
                <span className="h-9 w-px" style={{ background: "var(--border)" }} />
              )}
              <div>
                <div
                  className="font-display text-3xl"
                  style={{ color: "var(--brass-light)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[0.68rem] uppercase tracking-[0.18em] mt-1"
                  style={{ color: "var(--muted)" }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 z-10"
        style={{ color: "var(--muted)" }}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-float" style={{ color: "var(--brass)" }} />
      </motion.button>
    </section>
  );
}
