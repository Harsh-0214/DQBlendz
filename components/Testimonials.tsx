"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

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
    text: "Great atmosphere, great conversation, and even better cuts. DQ Blendz is the only spot in the city where I trust someone with my hair.",
    avatar: "CM",
  },
  {
    name: "Darnell P.",
    role: "VIP Client",
    stars: 5,
    text: "I've been to barbershops all over and DQ Blendz is on another level. Clean, precise, and consistent every single time. Highly recommend.",
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

const row1 = [...reviews, ...reviews];
const row2 = [...[...reviews].reverse(), ...[...reviews].reverse()];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--red-light)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r }: { r: (typeof reviews)[0] }) {
  return (
    <div
      className="glass rounded-2xl p-5 flex-shrink-0 w-80"
      style={{ border: "1px solid rgba(214,40,57,0.15)" }}
    >
      <div className="mb-3">
        <Quote size={20} style={{ color: "rgba(214,40,57,0.4)" }} />
      </div>
      <StarRow count={r.stars} />
      <p
        className="text-sm leading-relaxed my-3 line-clamp-3"
        style={{ color: "var(--muted)" }}
      >
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(214,40,57,0.1)" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{
            background: "rgba(214,40,57,0.15)",
            border: "1px solid rgba(214,40,57,0.3)",
            color: "var(--red-light)",
          }}
        >
          {r.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
            {r.name}
          </div>
          <div className="text-xs" style={{ color: "var(--muted)" }}>
            {r.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--background)" }} />
      <div
        className="glow-orb absolute"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(214,40,57,0.07) 0%, transparent 70%)",
          bottom: "0",
          right: "-10%",
          animationDelay: "2s",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="section-heading-label">Client Love</p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            What They&apos;re <span className="gradient-text">Saying</span>
          </h2>
          <p
            className="mt-4 max-w-md mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Don&apos;t take our word for it. Here&apos;s what our clients have to say.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative overflow-hidden"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10"
          style={{
            background: "linear-gradient(90deg, var(--background), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10"
          style={{
            background: "linear-gradient(-90deg, var(--background), transparent)",
          }}
        />

        <div className="mb-4 overflow-hidden">
          <div className="animate-marquee-left px-4">
            {row1.map((r, i) => (
              <Card key={`r1-${i}`} r={r} />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="animate-marquee-right px-4">
            {row2.map((r, i) => (
              <Card key={`r2-${i}`} r={r} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.45 }}
        >
          <div className="inline-flex items-center gap-5 glass rounded-2xl px-8 py-5">
            <div className="flex flex-col items-center gap-1.5">
              <StarRow count={5} />
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                Booksy Reviews
              </span>
            </div>
            <div className="w-px h-10" style={{ background: "var(--border)" }} />
            <div>
              <div
                className="text-2xl font-bold"
                style={{
                  color: "var(--red-light)",
                  fontFamily: "var(--font-playfair)",
                }}
              >
                {business.rating} / 5
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                Perfect rating
              </div>
            </div>
            <div className="w-px h-10" style={{ background: "var(--border)" }} />
            <div>
              <div
                className="text-2xl font-bold"
                style={{
                  color: "var(--red-light)",
                  fontFamily: "var(--font-playfair)",
                }}
              >
                {business.reviewCount}
              </div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                5-star reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
