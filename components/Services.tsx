"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const services = [
  {
    title: "Classic Haircut",
    description: "A timeless cut tailored to your face shape, finished with a wash and style.",
    price: "$30",
    duration: "45 min",
    popular: false,
  },
  {
    title: "Skin Fade",
    description: "Precision fade from skin to your desired length — crisp, clean, flawlessly blended.",
    price: "$40",
    duration: "50 min",
    popular: true,
  },
  {
    title: "Beard Trim & Shape",
    description: "Expert shaping to keep your beard sharp, symmetrical, and defined.",
    price: "$20",
    duration: "25 min",
    popular: false,
  },
  {
    title: "Cut + Beard Combo",
    description: "A full haircut paired with beard grooming for a complete fresh look.",
    price: "$55",
    duration: "70 min",
    popular: false,
  },
  {
    title: "Kid's Cut",
    description: "Patient, precise cuts — every kid leaves looking and feeling great.",
    price: "$22",
    duration: "35 min",
    popular: false,
  },
  {
    title: "Hot Towel Shave",
    description: "A luxurious straight-razor shave with a hot towel for the smoothest finish.",
    price: "$35",
    duration: "40 min",
    popular: false,
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Services() {
  const { ref, visible } = useInView(0.12);

  return (
    <section id="services" className="section relative" style={{ background: "var(--bg)" }}>
      <div className="hairline absolute top-0 left-0" />

      <div className="relative max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow centered justify-center mb-4">The Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "var(--ivory)" }}>
            Services &amp; <span className="gold-text">Pricing</span>
          </h2>
          <p className="mt-5 max-w-md mx-auto text-sm sm:text-[0.95rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            Honest pricing, no surprises. Final rates are confirmed when you book
            on Booksy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-5 py-6"
              style={{ borderBottom: "1px solid var(--border-soft)" }}
              initial={{ opacity: 0, y: 18 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
            >
              <span
                className="font-display text-sm pt-1 tabular-nums"
                style={{ color: "var(--brass-deep)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3
                    className="font-display text-xl sm:text-2xl transition-colors duration-200 group-hover:text-[var(--brass-light)]"
                    style={{ color: "var(--ivory)" }}
                  >
                    {s.title}
                  </h3>
                  {s.popular && (
                    <span
                      className="text-[0.6rem] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full"
                      style={{
                        color: "var(--brass-light)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      Most Booked
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.description}
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="font-display text-xl" style={{ color: "var(--brass-light)" }}>
                  {s.price}
                </div>
                <div className="text-[0.68rem] uppercase tracking-wider mt-1" style={{ color: "var(--muted-dark)" }}>
                  {s.duration}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <a
            href={business.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold px-8 py-4 text-sm uppercase tracking-wider"
          >
            <Calendar size={16} />
            Book Your Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}
