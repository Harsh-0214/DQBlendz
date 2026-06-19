"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Star, Scissors } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const highlights = [
  {
    icon: Trophy,
    title: "Trusted by Pro Athletes",
    desc: "Keeps players from Toronto FC and the Toronto Argonauts sharp on and off the field.",
  },
  {
    icon: Star,
    title: `${business.reviewCount} Five-Star Reviews`,
    desc: `A flawless ${business.rating} rating on Booksy — clients leave the chair fresh and confident.`,
  },
  {
    icon: Scissors,
    title: `${business.yearsExperience}+ Years of Craft`,
    desc: "Old-school precision meets modern technique, honed one cut at a time.",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function About() {
  const { ref, visible } = useInView(0.12);

  return (
    <section id="about" className="section relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div
        className="glow"
        style={{
          width: 560,
          height: 560,
          background: "radial-gradient(circle, rgba(200,164,92,0.1) 0%, transparent 70%)",
          top: "0",
          left: "-18%",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24 items-center" ref={ref}>
        {/* Portrait with offset brass frame */}
        <motion.div
          className="relative max-w-sm mx-auto lg:max-w-none w-full"
          initial={{ opacity: 0, x: -28 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div
            className="absolute -inset-3 sm:-inset-4 rounded-sm pointer-events-none"
            style={{ border: "1px solid var(--brass)", opacity: 0.4, transform: "translate(14px, 14px)" }}
          />
          <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=85"
              alt="DQ Blendz barber at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(12,11,9,0.5) 0%, transparent 55%)" }}
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-2 sm:right-6 panel rounded-sm px-6 py-5 text-center"
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={visible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <div className="font-display text-3xl" style={{ color: "var(--brass-light)" }}>
              {business.yearsExperience}+
            </div>
            <div className="text-[0.62rem] uppercase tracking-[0.22em] mt-1" style={{ color: "var(--muted)" }}>
              Years Cutting
            </div>
          </motion.div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          <p className="eyebrow mb-4">The Barber</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6" style={{ color: "var(--ivory)" }}>
            Vaughan&apos;s best-<span className="gold-text">kept secret</span>
          </h2>

          <div className="space-y-4 text-sm sm:text-[0.95rem] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              DQ Blendz is the underground barber the city keeps quiet about.
              Founded by DQ — a barber with over {business.yearsExperience} years
              behind the chair — the shop blends old-school tradition with modern
              technique, one cut at a time.
            </p>
            <p>
              From skin fades and classic tapers to beard sculpting and sharp
              lineups, every client gets the same care that&apos;s earned the
              trust of pro athletes from Toronto FC and the Toronto Argonauts. No
              rush, no shortcuts — just great cuts.
            </p>
          </div>

          <div className="mt-9 space-y-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: 16 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.08 }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: "1px solid var(--border)", background: "var(--surface-2)" }}
                  >
                    <Icon size={17} style={{ color: "var(--brass)" }} />
                  </div>
                  <div>
                    <div className="font-display text-base mb-0.5" style={{ color: "var(--ivory)" }}>
                      {h.title}
                    </div>
                    <div className="text-[0.85rem] leading-relaxed" style={{ color: "var(--muted)" }}>
                      {h.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
