"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 95);
      setProgress(p);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => setHidden(true), 600);
        }, 200);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  if (hidden) return null;

  const letters = "DQBlendz".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center noise-overlay"
          style={{ background: "var(--background)" }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(13,148,136,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-10 z-10">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.1 }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(13,148,136,0.08)",
                  border: "1px solid rgba(13,148,136,0.3)",
                }}
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8C8 8 14 14 18 18M18 18C22 14 28 8 28 8M18 18L8 28M18 18L28 28"
                    stroke="var(--teal-light)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="8" cy="8" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
                  <circle cx="28" cy="8" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
                  <circle cx="8" cy="28" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
                  <circle cx="28" cy="28" r="3" stroke="var(--teal-light)" strokeWidth="1.5" />
                </svg>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: "2px solid transparent",
                  borderTopColor: "var(--teal-primary)",
                  borderRightColor: "rgba(13,148,136,0.3)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              />
            </motion.div>

            <div className="text-center">
              <div
                className="flex items-center justify-center gap-0 overflow-hidden"
                aria-label="DQBlendz"
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.25 + i * 0.055,
                    }}
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: "var(--teal-light)",
                      letterSpacing: "0.18em",
                      display: "inline-block",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="text-xs tracking-[0.4em] uppercase mt-1.5"
                style={{ color: "var(--muted)" }}
              >
                Premium Barber Studio
              </motion.p>
            </div>

            <motion.div
              className="w-48 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div
                className="w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: "rgba(13,148,136,0.12)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, var(--teal-primary), var(--teal-light))",
                    transition: "width 80ms linear",
                    boxShadow: "0 0 12px rgba(45, 212, 191, 0.7)",
                  }}
                />
              </div>
              <span className="text-xs tabular-nums" style={{ color: "var(--muted)" }}>
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
