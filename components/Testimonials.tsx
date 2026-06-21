"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const reviews = [
  { name: "Rahul M.", role: "", text: "Best barber I've ever had. The detail on my fade is unmatched — three years deep and I'm not going anywhere else." },
  { name: "Jordan K.", role: "New Client", text: "Blown away first visit. Clean shop, real professional, and DQ nailed exactly what I asked for." },
  { name: "Andre S.", role: "Regular", text: "Steadiest hand in the game. My lineup is always razor sharp. 10 out of 10 every single time." },
  { name: "Chris M.", role: "Regular", text: "Great vibe, even better cuts. DQ Blendz is the only spot in the city I trust with my hair." },
  { name: "Darnell P.", role: "VIP", text: "Been to shops all over and this is another level. Clean, precise, consistent. Every time." },
  { name: "Tyler B.", role: "New Client", text: "Brought my son for his first real cut. Patient, kind, and sharp. We're regulars now." },
];

const ease = [0.23, 1, 0.32, 1] as const;

function Stars({ light = false }: { light?: boolean }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={light ? "var(--accent-soft)" : "var(--accent)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div
      className="flex-shrink-0 w-[300px] p-6 mr-4"
      style={{ border: "1px solid var(--line-dark)", borderRadius: "var(--radius)", background: "var(--ink-2)" }}
    >
      <Stars />
      <p className="text-sm leading-relaxed my-4" style={{ color: "var(--on-dark)" }}>
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--line-dark)" }}>
        <span className="kicker" style={{ color: "var(--on-dark)" }}>{r.name}</span>
        <span className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.6rem" }}>{r.role}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useInView(0.08);
  const featured = reviews[0];
  const loop = [...reviews.slice(1), ...reviews.slice(1)];

  return (
    <section id="testimonials" className="sec sec-dark grain overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>04</span>
          <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>Word of Mouth</span>
          <span className="rule" style={{ background: "var(--line-dark)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center mb-16">
          {/* Featured pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <Stars light />
            <p
              className="display mt-5"
              style={{ color: "var(--on-dark)", fontSize: "clamp(2rem, 4.5vw, 3.6rem)", lineHeight: 1 }}
            >
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="kicker mt-6" style={{ color: "var(--accent-soft)" }}>
              {featured.role ? `${featured.name} — ${featured.role}` : featured.name}
            </footer>
          </motion.blockquote>

          {/* Rating ticket */}
          <motion.div
            className="flex lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.22 }}
          >
            <div
              className="w-full max-w-xs p-8 text-center"
              style={{ border: "1px solid var(--line-dark)", borderRadius: "var(--radius)" }}
            >
              <span className="display block" style={{ color: "var(--accent)", fontSize: "clamp(4rem, 10vw, 6rem)", lineHeight: 0.9 }}>
                {business.rating}
              </span>
              <div className="flex justify-center my-3">
                <Stars light />
              </div>
              <span className="kicker block" style={{ color: "var(--on-dark-muted)" }}>
                {business.reviewsDisplay} Five-Star Reviews
              </span>
              <span className="kicker block mt-1" style={{ color: "var(--on-dark-faint)", fontSize: "0.6rem" }}>
                on Booksy
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee of remaining reviews */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10" style={{ background: "linear-gradient(90deg, var(--ink), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10" style={{ background: "linear-gradient(-90deg, var(--ink), transparent)" }} />
        <div className="overflow-hidden">
          <div className="marquee-track">
            {loop.map((r, i) => (
              <Card key={i} r={r} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
