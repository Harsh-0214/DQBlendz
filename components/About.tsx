"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Heart, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Certified Master Barber",
    desc: "Trained with industry-leading barbers and certified with top grooming credentials.",
  },
  {
    icon: Heart,
    title: "Passion-Driven Craft",
    desc: "Every client leaves the chair with more than a haircut — they leave with confidence.",
  },
  {
    icon: Users,
    title: "Community Focused",
    desc: "DQBlendz is more than a barbershop — it's a place where the community connects.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--surface)" }}
      />

      <div
        className="glow-orb absolute"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(13,148,136,0.09) 0%, transparent 70%)",
          top: "0",
          left: "-20%",
          animationDelay: "1.5s",
        }}
      />

      <div className="teal-divider absolute top-0 left-0 right-0" />

      <div
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        ref={ref}
      >
        <div
          className={`relative transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none"
            style={{ border: "1px solid rgba(13,148,136,0.2)" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&q=80"
              alt="DQBlendz barber at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, rgba(5,13,11,0.6) 0%, transparent 60%)",
              }}
            />
          </div>

          <div
            className="absolute bottom-6 left-6 glass rounded-xl px-5 py-4"
            style={{ maxWidth: "180px" }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
            >
              8+ Years
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
              Cutting & Crafting
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--teal-primary)" }}
          >
            Our Story
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            More Than a <span className="gradient-text">Haircut</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              DQBlendz was born from a simple belief: every person deserves to
              walk out of the chair feeling their absolute best. Founded by DQ,
              a master barber with over 8 years of hands-on experience, our
              studio blends old-school barbering tradition with modern technique.
            </p>
            <p>
              From skin fades and classic taper cuts to beard sculpting and hot
              towel shaves — we approach every client with precision, respect,
              and genuine care. No rush, no shortcuts. Just great cuts.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className={`flex gap-4 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(13,148,136,0.12)",
                      border: "1px solid rgba(13,148,136,0.25)",
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--teal-light)" }} />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      {h.title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {h.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="teal-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
