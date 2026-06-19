"use client";

import { Scissors, Zap, Star, Clock } from "lucide-react";
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
    icon: Zap,
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
    icon: Scissors,
    title: "Cut + Beard Combo",
    description:
      "Full haircut combined with beard grooming for a complete fresh look from head to chin.",
    price: "From $55",
    duration: "70 min",
    popular: false,
  },
  {
    icon: Zap,
    title: "Kid's Cut",
    description:
      "Patient, precise cuts for kids. We make sure every child leaves looking and feeling great.",
    price: "From $22",
    duration: "35 min",
    popular: false,
  },
  {
    icon: Star,
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
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--surface)" }}
      />
      <div className="teal-divider absolute top-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--teal-primary)" }}
          >
            What We Offer
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Every service is delivered with care, attention to detail, and
            expert technique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`relative glass rounded-2xl p-6 card-hover flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {s.popular && (
                  <span
                    className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(13,148,136,0.2)",
                      color: "var(--teal-accent)",
                      border: "1px solid rgba(13,148,136,0.35)",
                    }}
                  >
                    Most Popular
                  </span>
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
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--muted)" }}>
                  {s.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-lg font-bold"
                    style={{ color: "var(--teal-light)" }}
                  >
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
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide"
            style={{ background: "var(--teal-primary)", color: "white" }}
          >
            Book Your Service
            <Scissors size={16} />
          </button>
        </div>
      </div>

      <div className="teal-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
