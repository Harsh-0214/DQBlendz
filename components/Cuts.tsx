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
const wipe = [0.77, 0, 0.175, 1] as const;

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
          <h2
            className="display overflow-hidden"
            style={{ color: "var(--on-light)", fontSize: "clamp(2.75rem, 7vw, 6rem)", lineHeight: 0.95 }}
          >
            <motion.span
              className="inline-block"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: wipe, delay: 0.1 }}
            >
              What DQ&nbsp;
            </motion.span>
            <motion.span
              className="inline-block gold-shimmer"
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={visible ? { clipPath: "inset(0 0% 0 0)", opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: wipe, delay: 0.34 }}
            >
              does best
            </motion.span>
          </h2>

          <motion.p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--on-light-muted)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          >
            The house specialties. Not sure what you want? Walk in with a
            reference — DQ will tell you what works.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="gallery-card p-2 sm:p-2.5"
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 + i * 0.09 }}
            >
              <div
                className="gallery-img-wrap relative overflow-hidden aspect-[3/4]"
                style={{ borderRadius: "1px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  className="gallery-img"
                />
                {/* brass overlay on hover */}
                <span className="gallery-overlay" aria-hidden />
                {/* diagonal shine sweep */}
                <span className="gallery-shine" aria-hidden />
                {/* corner brackets */}
                <span className="gallery-corner gallery-corner-tl" aria-hidden />
                <span className="gallery-corner gallery-corner-br" aria-hidden />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.7 }}
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
