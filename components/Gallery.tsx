"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "./icons";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=85",
    alt: "Skin fade haircut",
    label: "Skin Fade",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=85",
    alt: "Classic barbershop cut",
    label: "Classic Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=85",
    alt: "Beard trim and shape",
    label: "Beard Shape",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=85",
    alt: "Precision cut in progress",
    label: "Precision Cut",
    span: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&q=85",
    alt: "Fresh line up and edge",
    label: "Line Up",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=85",
    alt: "High fade with texture",
    label: "High Fade",
    span: "",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Gallery() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="gallery" className="section relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="hairline absolute top-0 left-0" />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 22 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <div>
            <p className="eyebrow mb-4">The Portfolio</p>
            <h2 className="font-display text-4xl sm:text-5xl" style={{ color: "var(--ivory)" }}>
              Fresh <span className="gold-text">Off the Chair</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            Every cut is a canvas. A look at DQ&apos;s recent work — fades,
            lineups, and blends done right.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px]">
          {photos.map((p, i) => (
            <motion.a
              key={p.src}
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`shot rounded-sm ${p.span}`}
              style={{ border: "1px solid var(--border-soft)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: i * 0.07 }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="shot-overlay">
                <div>
                  <span className="block font-display text-lg" style={{ color: "var(--ivory)" }}>
                    {p.label}
                  </span>
                  <span className="text-[0.7rem] uppercase tracking-[0.18em]" style={{ color: "var(--brass)" }}>
                    DQ Blendz
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            See the latest cuts daily on Instagram
          </p>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-6 py-3 text-sm uppercase tracking-wider"
          >
            <Instagram size={16} />
            {business.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
