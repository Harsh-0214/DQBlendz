"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Instagram } from "./icons";
import { business } from "@/app/config";

const galleryImages = [
  { src: "/images/gallery/1.JPG", alt: "DQ Blendz signature cut" },
  { src: "/images/gallery/2.jpg", alt: "DQ Blendz signature cut" },
  { src: "/images/gallery/3.jpg", alt: "DQ Blendz signature cut" },
  { src: "/images/gallery/4.jpg", alt: "DQ Blendz signature cut" },
  { src: "/images/gallery/5.jpg", alt: "DQ Blendz signature cut" },
  { src: "/images/gallery/6.jpg", alt: "DQ Blendz signature cut" },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function Cuts() {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="cuts" className="sec sec-light" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="sec-head mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <span className="index" style={{ color: "var(--accent)" }}>03</span>
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>Signature Cuts</span>
          <span className="rule" style={{ background: "var(--line-light)" }} />
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.h2
            className="display"
            style={{ color: "var(--on-light)", fontSize: "clamp(2.75rem, 7vw, 6rem)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
          >
            What DQ <span style={{ color: "var(--accent)" }}>does best</span>
          </motion.h2>
          <motion.p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--on-light-muted)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.18 }}
          >
            The house specialties. Not sure what you want? Walk in with a
            reference — DQ will tell you what works.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="p-2 sm:p-2.5"
              style={{
                border: "1px solid rgba(191,139,60,0.55)",
                borderRadius: "var(--radius)",
              }}
              initial={{ opacity: 0, y: 22 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.05 + i * 0.07 }}
            >
              <div
                className="relative overflow-hidden aspect-[3/4]"
                style={{ borderRadius: "1px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          <span className="kicker" style={{ color: "var(--on-light-muted)" }}>
            See more on Instagram
          </span>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light px-6 py-3">
            <Instagram size={15} />
            {business.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
