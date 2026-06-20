"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Instagram } from "./icons";
import { business } from "@/app/config";

const cuts = [
  { name: "Skin Fade", desc: "Bald-to-blend gradient, razor finish at the skin." },
  { name: "Taper Fade", desc: "Subtle drop around the ears and neckline." },
  { name: "Classic Cut", desc: "Scissor-led, timeless, built for any room." },
  { name: "Beard Sculpt", desc: "Defined cheek lines and a clean, even shape." },
  { name: "Line-Up / Edge", desc: "Crisp hairline and corners, sharp as it gets." },
  { name: "The Blend", desc: "Seamless transitions — the house signature." },
];

const ease = [0.23, 1, 0.32, 1] as const;
const wipe = [0.77, 0, 0.175, 1] as const;

export default function Cuts() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="cuts" className="sec sec-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>03</span>
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>Signature Cuts</span>
          <span className="rule" style={{ background: "var(--line-light)" }} />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2
            className="display overflow-hidden"
            style={{ color: "var(--on-light)", fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 0.95 }}
          >
            <motion.span
              className="inline-block"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: "0.12em" }}
              animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: wipe, delay: 0.12 }}
            >
              What DQ&nbsp;
            </motion.span>
            <motion.span
              className="inline-block gold-shimmer"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0, y: "0.12em" }}
              animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: wipe, delay: 0.34 }}
            >
              does best
            </motion.span>
          </h2>
          <motion.p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--on-light-muted)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
          >
            The house specialties. Not sure what you want? Walk in with a
            reference — DQ will tell you what works.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {cuts.map((c, i) => (
            <motion.div
              key={c.name}
              className="cut-card p-7 sm:p-8 flex flex-col min-h-[200px] sm:min-h-[230px]"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.05 + i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              {/* sweeping gold shine on hover */}
              <span className="cut-shine" aria-hidden />
              {/* animated corner brackets */}
              <span className="cut-corner cut-corner-tl" aria-hidden />
              <span className="cut-corner cut-corner-br" aria-hidden />

              <span className="cut-num index relative z-10" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="cut-name display mt-auto relative z-10"
                style={{ color: "var(--on-light)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
              >
                {c.name}
              </h3>
              <p className="cut-desc mt-2 text-[0.85rem] leading-relaxed relative z-10" style={{ color: "var(--on-light-muted)" }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo lookbook teaser (images intentionally not added yet) */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>
            Full photo lookbook dropping soon
          </span>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light px-6 py-3">
            <Instagram size={15} />
            {business.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
