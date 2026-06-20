"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const services = [
  {
    title: "Men's Haircut",
    desc: "Starts with a consultation on your hair and style preference to determine the most suitable cut. Includes fade or taper, trim, and style.",
    price: "$45",
    duration: "45 min",
    tag: "",
  },
  {
    title: "Men's Haircut + Beard",
    desc: "A thorough client consultation followed by a full haircut and style, plus a beard grooming and styling service finished with a hot towel.",
    price: "$55",
    duration: "60 min",
    tag: "",
  },
  {
    title: "Regal Premium Texturizing Powder",
    desc: "A lightweight styling product that adds volume, texture, and a clean matte finish for a natural, effortless look.",
    price: "$15",
    duration: "",
    tag: "Product",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Services() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="services" className="sec sec-dark grain" ref={ref}>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>02</span>
          <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>The Cut List</span>
          <span className="rule" style={{ background: "var(--line-dark)" }} />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.h2
            className="display"
            style={{ color: "var(--on-dark)", fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
          >
            Services &amp; <span style={{ color: "var(--accent)" }}>Pricing</span>
          </motion.h2>
          <motion.p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--on-dark-muted)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
          >
            Honest pricing, no surprises. Final rates confirmed when you book on
            Booksy.
          </motion.p>
        </div>

        <div className="border-t" style={{ borderColor: "var(--line-dark)" }}>
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] items-center gap-4 sm:gap-8 py-6 sm:py-7 border-b"
              style={{ borderColor: "var(--line-dark)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.06 }}
            >
              <span className="index hidden sm:block" style={{ color: "var(--on-dark-faint)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3
                    className="display transition-colors duration-200 group-hover:text-[var(--accent-soft)]"
                    style={{ color: "var(--on-dark)", fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
                  >
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span
                      className="kicker px-2 py-1"
                      style={{ color: "var(--accent-soft)", border: "1px solid var(--line-dark)", borderRadius: "var(--radius)", fontSize: "0.6rem" }}
                    >
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 max-w-xl text-[0.82rem] leading-relaxed" style={{ color: "var(--on-dark-muted)" }}>
                  {s.desc}
                </p>
              </div>

              <span className="mono hidden sm:block text-xs" style={{ color: "var(--on-dark-faint)" }}>
                {s.duration}
              </span>
              {s.price ? (
                <span className="display text-right" style={{ color: "var(--accent-soft)", fontSize: "1.6rem" }}>
                  {s.price}
                </span>
              ) : (
                <span className="kicker text-right" style={{ color: "var(--on-dark-faint)", fontSize: "0.6rem" }}>
                  On Booksy
                </span>
              )}
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <a href={business.booksyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent px-8 py-4">
            <Calendar size={16} />
            Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
