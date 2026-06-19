"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;

export default function About() {
  const { ref, visible } = useInView(0.12);

  return (
    <section id="about" className="sec sec-light overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>01</span>
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>The Barber</span>
          <span className="rule" style={{ background: "var(--line-light)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story */}
          <div className="lg:col-span-7">
            <motion.h2
              className="display"
              style={{ color: "var(--on-light)", fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
            >
              The man behind
              <br />
              the <span style={{ color: "var(--accent)" }}>fade</span>
            </motion.h2>

            <motion.div
              className="mt-7 space-y-4 max-w-xl text-[0.95rem] leading-relaxed"
              style={{ color: "var(--on-light-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
            >
              <p>
                DQ Blendz is the underground barber Vaughan keeps quiet about.
                With over {business.yearsExperience} years behind the chair, DQ
                blends old-school discipline with modern technique — skin fades,
                classic tapers, beard sculpts, and lineups done with a steady
                hand and zero shortcuts.
              </p>
              <p>
                That same precision has earned the trust of pro athletes who
                can&apos;t afford a bad cut on camera. No rush, no ego — just a
                chair, a mirror, and a result you&apos;ll want to show off.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.32 }}
            >
              <span className="kicker" style={{ color: "var(--on-light-muted)" }}>Trusted by</span>
              {["Toronto FC", "Toronto Argonauts"].map((t) => (
                <span
                  key={t}
                  className="kicker px-3 py-2"
                  style={{ color: "var(--on-light)", border: "1px solid var(--line-light)", borderRadius: "var(--radius)" }}
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Crest (no photo) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
          >
            <div
              className="relative aspect-square w-full max-w-sm mx-auto grain"
              style={{ background: "var(--ink)", borderRadius: "var(--radius)" }}
            >
              <div className="absolute inset-4 sm:inset-5" style={{ border: "1px solid var(--accent)", opacity: 0.5 }} />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>Est. — Vaughan</span>
                <span
                  className="display my-3"
                  style={{ color: "var(--accent)", fontSize: "clamp(5rem, 13vw, 8rem)", lineHeight: 0.8 }}
                >
                  DQ
                </span>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="diamond" />
                  <span className="diamond" style={{ opacity: 0.6 }} />
                  <span className="diamond" />
                </div>
                <span className="kicker" style={{ color: "var(--on-dark)" }}>Master Barber</span>
              </div>

              {/* big years stat tab */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2.5 flex items-baseline gap-2"
                style={{ background: "var(--accent)", borderRadius: "var(--radius)" }}
              >
                <span className="display" style={{ color: "#160f04", fontSize: "1.6rem" }}>
                  {business.yearsExperience}+
                </span>
                <span className="kicker" style={{ color: "#2a1d07" }}>Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
