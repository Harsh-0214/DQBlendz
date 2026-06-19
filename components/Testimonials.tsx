"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    role: "Regular Client",
    stars: 5,
    text: "DQ is simply the best barber I've ever had. His attention to detail on my fade is unmatched. I've been coming here for 3 years and wouldn't go anywhere else.",
    avatar: "MT",
  },
  {
    name: "Jordan K.",
    role: "New Client",
    stars: 5,
    text: "First time here and I was blown away. Clean shop, professional vibe, and DQ actually listened to exactly what I wanted. Came out looking fresh.",
    avatar: "JK",
  },
  {
    name: "Andre S.",
    role: "Regular Client",
    stars: 5,
    text: "The beard trim and lineup combo is everything. DQ has the steadiest hand in the game. My lineup is always razor sharp. 10/10 every visit.",
    avatar: "AS",
  },
  {
    name: "Chris M.",
    role: "Regular Client",
    stars: 5,
    text: "Great atmosphere, great conversation, and even better cuts. DQBlendz is the only spot in the city where I trust someone with my hair.",
    avatar: "CM",
  },
  {
    name: "Darnell P.",
    role: "VIP Client",
    stars: 5,
    text: "I've been to barbershops all over and DQBlendz is on another level. Clean, precise, and consistent every single time. Highly recommend.",
    avatar: "DP",
  },
  {
    name: "Tyler B.",
    role: "New Client",
    stars: 5,
    text: "Brought my son here for his first real haircut. DQ was patient and made him feel comfortable. We're definitely coming back. Amazing experience.",
    avatar: "TB",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="var(--teal-light)"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function useInView(threshold = 0.1) {
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

export default function Testimonials() {
  const { ref, visible } = useInView();

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--background)" }}
      />

      <div
        className="glow-orb absolute"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(13,148,136,0.07) 0%, transparent 70%)",
          bottom: "0",
          right: "-10%",
          animationDelay: "2s",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--teal-primary)" }}
          >
            Client Love
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            What They&apos;re <span className="gradient-text">Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`relative glass rounded-2xl p-6 card-hover transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4">
                <Quote
                  size={28}
                  style={{ color: "rgba(13,148,136,0.35)" }}
                />
              </div>

              <div className="mb-3">
                <StarRating count={r.stars} />
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--muted)" }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "rgba(13,148,136,0.15)",
                    border: "1px solid rgba(13,148,136,0.3)",
                    color: "var(--teal-light)",
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    {r.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>
                    {r.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-5"
          >
            <div className="flex flex-col items-center">
              <StarRating count={5} />
              <span className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                Google Reviews
              </span>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "var(--border)" }}
            />
            <div>
              <div
                className="text-2xl font-bold"
                style={{ color: "var(--teal-light)", fontFamily: "var(--font-playfair)" }}
              >
                4.9 / 5
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                Based on 100+ reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
