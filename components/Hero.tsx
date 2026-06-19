"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  onClick,
  className,
  style,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
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
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY, ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={(e) => {
        reset();
        rest.onMouseLeave?.(e);
      }}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.96 }}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </motion.button>
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
            "linear-gradient(160deg, #050d0b 0%, #071a14 40%, #030a09 100%)",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(13,148,136,0.13) 0%, transparent 70%)",
          top: "5%",
          left: "-15%",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)",
          bottom: "5%",
          right: "-5%",
          animationDelay: "3s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--teal-light) 1px, transparent 1px), linear-gradient(90deg, var(--teal-light) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
          style={{
            background: "rgba(13,148,136,0.1)",
            border: "1px solid rgba(13,148,136,0.3)",
            color: "var(--teal-accent)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--teal-light)" }}
          />
          Premium Barber Studio
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
          className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.42 }}
        >
          Where every cut tells a story. Experience the art of grooming at
          DQBlendz — your destination for fresh fades, sharp lineups, and
          flawless blends.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.54 }}
        >
          <MagneticButton
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl font-semibold text-base tracking-wide text-white"
            style={{
              background: "var(--teal-primary)",
              boxShadow: "0 4px 24px rgba(13,148,136,0.35)",
            }}
          >
            Book an Appointment
          </MagneticButton>
          <MagneticButton
            onClick={() =>
              document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-colors duration-200"
            style={{
              background: "transparent",
              color: "var(--teal-light)",
              border: "1px solid rgba(13,148,136,0.4)",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(13,148,136,0.08)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            View Our Work
          </MagneticButton>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 sm:gap-14 mt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.66 }}
        >
          <div className="text-center">
            <div
              className="text-3xl font-bold tabular-nums"
              style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
            >
              {clients}+
            </div>
            <div
              className="text-xs tracking-wider uppercase mt-1"
              style={{ color: "var(--muted)" }}
            >
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold tabular-nums"
              style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
            >
              {years}+
            </div>
            <div
              className="text-xs tracking-wider uppercase mt-1"
              style={{ color: "var(--muted)" }}
            >
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-bold tabular-nums"
              style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
            >
              {(rating / 10).toFixed(1)}★
            </div>
            <div
              className="text-xs tracking-wider uppercase mt-1"
              style={{ color: "var(--muted)" }}
            >
              Avg Rating
            </div>
          </div>
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
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontSize: "10px" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="animate-float"
          style={{ color: "var(--teal-light)" }}
        />
      </motion.button>
    </section>
  );
}
