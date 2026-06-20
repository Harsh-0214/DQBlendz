"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const ease = [0.23, 1, 0.32, 1] as const;
const wipe = [0.77, 0, 0.175, 1] as const;

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
          {/* Portrait */}
          <motion.div
            className="lg:col-span-5 order-1 lg:order-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div
                className="absolute -inset-3 sm:-inset-4 pointer-events-none"
                style={{ border: "1px solid var(--accent)", opacity: 0.45, transform: "translate(14px, 14px)" }}
              />
              <div className="relative overflow-hidden aspect-[4/5]" style={{ borderRadius: "var(--radius)" }}>
                <Image
                  src="/images/about/David.jpg"
                  alt="DQ — master barber at DQ Blendz, Vaughan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectFit: "cover", objectPosition: "center 25%" }}
                />
              </div>

              {/* years stat tab */}
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

          {/* Story */}
          <div className="lg:col-span-7">
            <h2 className="display" style={{ color: "var(--on-light)", fontSize: "clamp(2.5rem, 6.5vw, 5rem)", lineHeight: 0.95 }}>
              <motion.span
                className="block"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: wipe, delay: 0.15 }}
              >
                Precision cuts.
              </motion.span>
              <motion.span
                className="block gold-shimmer"
                initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: wipe, delay: 0.38 }}
              >
                Built on trust.
              </motion.span>
            </h2>

            <motion.div
              className="mt-7 space-y-4 max-w-xl text-[0.95rem] leading-relaxed"
              style={{ color: "var(--on-light-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <p>
                With over {business.yearsExperience} years behind the chair, DQ
                Blendz brings a combination of modern techniques and classic
                barbering fundamentals to every appointment. From sharp fades and
                clean tapers to detailed beard work and personalized styles,
                every cut is crafted with precision and attention to detail.
              </p>
              <p>
                Whether it&apos;s your first visit or your regular appointment, DQ
                delivers a consistent experience where quality, comfort, and
                confidence come first.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.7 }}
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
        </div>
      </div>
    </section>
  );
}
