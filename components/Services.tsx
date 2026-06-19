"use client";

import { motion } from "framer-motion";
import { Scissors, Wand2, Star, Layers, Smile, Flame, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description:
      "A timeless cut tailored to your face shape and personal style. Includes wash and style.",
    price: "From $30",
    duration: "45 min",
    popular: false,
  },
  {
    icon: Wand2,
    title: "Skin Fade",
    description:
      "Precision fade from skin to your desired length — crisp, clean, and flawlessly blended.",
    price: "From $40",
    duration: "50 min",
    popular: true,
  },
  {
    icon: Star,
    title: "Beard Trim & Shape",
    description:
      "Expert shaping and trimming to keep your beard sharp, symmetrical, and defined.",
    price: "From $20",
    duration: "25 min",
    popular: false,
  },
  {
    icon: Layers,
    title: "Cut + Beard Combo",
    description:
      "Full haircut combined with beard grooming for a complete fresh look from head to chin.",
    price: "From $55",
    duration: "70 min",
    popular: false,
  },
  {
    icon: Smile,
    title: "Kid's Cut",
    description:
      "Patient, precise cuts for kids. We make sure every child leaves looking and feeling great.",
    price: "From $22",
    duration: "35 min",
    popular: false,
  },
  {
    icon: Flame,
    title: "Hot Towel Shave",
    description:
      "A luxurious straight-razor shave with hot towel treatment for the smoothest finish.",
    price: "From $35",
    duration: "40 min",
    popular: false,
  },
];

export default function Services() {
  const { ref, visible } = useInView();

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0" style={{ background: "var(--surface)" }} />
      <div className="teal-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="section-heading-label">What We Offer</p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Every service is delivered with care, attention to detail, and
            expert technique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="relative glass rounded-2xl p-6 cursor-default"
                style={{ border: "1px solid rgba(13,148,136,0.15)" }}
                initial={{ opacity: 0, y: 28 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                  delay: i * 0.08,
                }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(13,148,136,0.45)",
                  boxShadow: "0 20px 40px rgba(13,148,136,0.12)",
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
              >
                {s.popular && (
                  <motion.span
                    className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(13,148,136,0.18)",
                      color: "var(--teal-accent)",
                      border: "1px solid rgba(13,148,136,0.35)",
                    }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Most Popular
                  </motion.span>
                )}

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(13,148,136,0.12)",
                    border: "1px solid rgba(13,148,136,0.25)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--teal-light)" }} />
                </div>

                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--muted)" }}
                >
                  {s.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: "var(--teal-light)" }}>
                    {s.price}
                  </span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    <Clock size={12} />
                    {s.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.55 }}
        >
          <motion.button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white"
            style={{ background: "var(--teal-primary)", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}
            whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(13,148,136,0.45)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Book Your Service
            <Scissors size={16} />
          </motion.button>
        </motion.div>
      </div>

      <div className="teal-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
