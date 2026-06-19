"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    const t2 = setTimeout(() => setHidden(true), 2000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center grain"
          style={{ background: "var(--ink)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              className="kicker mb-4"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Est. Vaughan
            </motion.span>

            {/* Wordmark wipes in via clip-path */}
            <motion.span
              className="display"
              style={{ color: "var(--on-dark)", fontSize: "clamp(3rem, 11vw, 6rem)", lineHeight: 0.9 }}
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1], delay: 0.15 }}
            >
              DQ Blendz
            </motion.span>

            {/* Accent rule sweeps under */}
            <motion.span
              className="block mt-4 h-px"
              style={{ background: "var(--accent)", transformOrigin: "left" }}
              initial={{ scaleX: 0, width: "min(60vw, 320px)" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
            />
            <motion.span
              className="kicker mt-4"
              style={{ color: "var(--on-dark-muted)", fontSize: "0.6rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Master Barber Studio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
