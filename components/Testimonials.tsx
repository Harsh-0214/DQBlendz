"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const reviews = [
  { name: "Marcus T.", role: "Regular", text: "DQ is simply the best barber I've ever had. The attention to detail on my fade is unmatched. Three years deep and I won't go anywhere else.", avatar: "MT" },
  { name: "Jordan K.", role: "New Client", text: "First time here and I was blown away. Clean shop, professional vibe, and DQ actually listened to exactly what I wanted. Came out fresh.", avatar: "JK" },
  { name: "Andre S.", role: "Regular", text: "The beard trim and lineup combo is everything. Steadiest hand in the game — my lineup is always razor sharp. 10/10 every visit.", avatar: "AS" },
  { name: "Chris M.", role: "Regular", text: "Great atmosphere, great conversation, and even better cuts. DQ Blendz is the only spot in the city I trust with my hair.", avatar: "CM" },
  { name: "Darnell P.", role: "VIP", text: "Been to barbershops all over and DQ Blendz is on another level. Clean, precise, and consistent every single time.", avatar: "DP" },
  { name: "Tyler B.", role: "New Client", text: "Brought my son here for his first real haircut. DQ was patient and made him comfortable. We're definitely coming back.", avatar: "TB" },
];

const row1 = [...reviews, ...reviews];
const row2 = [...[...reviews].reverse(), ...[...reviews].reverse()];

const ease = [0.23, 1, 0.32, 1] as const;

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--brass)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="panel rounded-sm p-6 flex-shrink-0 w-[320px]">
      <Quote size={22} style={{ color: "var(--brass-deep)" }} />
      <p className="text-sm leading-relaxed my-4" style={{ color: "var(--foreground)" }}>
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border-soft)" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
          style={{ background: "var(--surface-3)", border: "1px solid var(--border)", color: "var(--brass-light)" }}
        >
          {r.avatar}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium" style={{ color: "var(--ivory)" }}>
            {r.name}
          </div>
          <div className="text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            {r.role}
          </div>
        </div>
        <Stars />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="testimonials" className="section relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="hairline absolute top-0 left-0" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <p className="eyebrow centered justify-center mb-4">Word of Mouth</p>
          <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "var(--ivory)" }}>
            What Clients <span className="gold-text">Say</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        className="relative -mx-4"
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10"
          style={{ background: "linear-gradient(90deg, var(--surface), transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10"
          style={{ background: "linear-gradient(-90deg, var(--surface), transparent)" }}
        />

        <div className="overflow-hidden mb-4">
          <div className="marquee px-4">
            {row1.map((r, i) => (
              <Card key={`r1-${i}`} r={r} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-rev px-4">
            {row2.map((r, i) => (
              <Card key={`r2-${i}`} r={r} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-7 panel rounded-sm px-9 py-5">
            <div className="flex flex-col items-center gap-2">
              <Stars />
              <span className="text-[0.65rem] uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                Booksy
              </span>
            </div>
            <span className="h-10 w-px" style={{ background: "var(--border)" }} />
            <div className="text-center">
              <div className="font-display text-2xl" style={{ color: "var(--brass-light)" }}>
                {business.rating}
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                Rating
              </div>
            </div>
            <span className="h-10 w-px" style={{ background: "var(--border)" }} />
            <div className="text-center">
              <div className="font-display text-2xl" style={{ color: "var(--brass-light)" }}>
                {business.reviewCount}
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                5★ Reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
