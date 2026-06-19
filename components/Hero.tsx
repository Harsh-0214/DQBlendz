"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import BarberPole from "./BarberPole";
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

function MagneticButton({
  children,
  className,
  style,
  href,
  onClick,
  target,
  rel,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      style={{ x: springX, y: springY, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

const headline = ["Precision.", "Style.", "Craft."];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 350);
    return () => clearTimeout(t);
  }, []);

  const clients = useCounter(500, 1800, visible);
  const years = useCounter(8, 1200, visible);
  const rating = useCounter(49, 1400, visible);

  const scrollDown = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden noise-overlay">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0d0c0e 0%, #1a1116 45%, #0a0a12 100%)",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(214,40,57,0.14) 0%, transparent 70%)",
          top: "5%",
          left: "-15%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(42,76,173,0.12) 0%, transparent 70%)",
          bottom: "5%",
          right: "-5%",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating barber pole — desktop only, the signature motif */}
      <motion.div
        className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.6 }}
      >
        <div className="animate-float">
          <BarberPole height={320} />
        </div>
      </motion.div>

      <div className="relative z-10 text-center lg:text-left px-4 sm:px-6 max-w-5xl mx-auto lg:mx-0 lg:ml-[8%] lg:max-w-2xl">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
          style={{
            background: "rgba(214,40,57,0.1)",
            border: "1px solid rgba(214,40,57,0.3)",
            color: "var(--cream)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--red-light)" }}
          />
          DQ Blendz · Master Barber
        </motion.div>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-none mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {headline.map((word, i) => (
            <motion.span
              key={word}
              className={`block ${i === 1 ? "gradient-text" : ""}`}
              style={i !== 1 ? { color: "var(--foreground)" } : undefined}
              initial={{ opacity: 0, y: 28 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                delay: 0.08 + i * 0.14,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.42 }}
        >
          Where every cut tells a story. Step into DQ Blendz for fresh fades,
          sharp lineups, and flawless blends — then book your chair in seconds
          on Booksy.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.54 }}
        >
          <MagneticButton
            href={business.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base tracking-wide text-white"
            style={{
              background: "var(--red)",
              boxShadow: "0 4px 24px rgba(214,40,57,0.4)",
            }}
          >
            <Calendar size={18} />
            Book on Booksy
          </MagneticButton>
          <MagneticButton
            onClick={() =>
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-colors duration-200 cursor-pointer"
            style={{
              background: "transparent",
              color: "var(--cream)",
              border: "1px solid rgba(244,237,224,0.3)",
            }}
          >
            View the Portfolio
          </MagneticButton>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-14 mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.66 }}
        >
          {[
            { value: `${clients}+`, label: "Happy Clients" },
            { value: `${years}+`, label: "Years Experience" },
            { value: `${(rating / 10).toFixed(1)}★`, label: "Avg Rating" },
          ].map((stat) => (
            <div className="text-center lg:text-left" key={stat.label}>
              <div
                className="text-3xl font-bold tabular-nums"
                style={{ color: "var(--cream)", fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-wider uppercase mt-1"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--muted)" }}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "10px" }}>
          Scroll
        </span>
        <ChevronDown size={20} className="animate-float" style={{ color: "var(--red-light)" }} />
      </motion.button>
    </section>
  );
}
