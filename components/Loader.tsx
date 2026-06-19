"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    const t2 = setTimeout(() => setHidden(true), 2100);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  const letters = "DQ BLENDZ".split("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center grain"
          style={{ background: "var(--bg)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 50% 50%, rgba(200,164,92,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-7">
            <motion.svg
              width="72"
              height="72"
              viewBox="0 0 44 44"
              fill="none"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.circle
                cx="22"
                cy="22"
                r="20.5"
                stroke="var(--brass)"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              />
              <motion.text
                x="22"
                y="22"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="var(--font-playfair), Georgia, serif"
                fontSize="15"
                fontWeight="700"
                fill="var(--brass-light)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                DQ
              </motion.text>
            </motion.svg>

            <div className="flex flex-col items-center gap-2">
              <div className="flex">
                {letters.map((l, i) => (
                  <motion.span
                    key={i}
                    className="font-display"
                    style={{
                      color: "var(--ivory)",
                      fontSize: "1.4rem",
                      letterSpacing: "0.3em",
                      fontWeight: 600,
                      whiteSpace: "pre",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 + i * 0.04 }}
                  >
                    {l}
                  </motion.span>
                ))}
              </div>
              <motion.span
                className="uppercase"
                style={{ color: "var(--brass)", fontSize: "0.6rem", letterSpacing: "0.45em" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Vaughan · Est. Barber
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
