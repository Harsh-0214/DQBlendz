"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=85",
    alt: "Skin fade haircut",
    label: "Skin Fade",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=85",
    alt: "Classic barbershop cut",
    label: "Classic Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=85",
    alt: "Beard trim and shape",
    label: "Beard Shape",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=85",
    alt: "High fade with texture",
    label: "High Fade",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=85",
    alt: "Barber at work precision cut",
    label: "Precision Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=700&q=85",
    alt: "Fresh line up and edge",
    label: "Line Up",
    span: "",
  },
];

export default function Gallery() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--background)" }} />
      <div
        className="glow-orb absolute"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(42,76,173,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "-15%",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="section-heading-label">The Portfolio</p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            Fresh <span className="gradient-text">Cuts Gallery</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Every cut is a canvas. Browse DQ&apos;s latest work and see what
            precision and passion look like.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[260px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`gallery-item rounded-xl sm:rounded-2xl cursor-pointer ${photo.span}`}
              style={{ border: "1px solid rgba(214,40,57,0.16)" }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                delay: i * 0.08,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="gallery-img"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-overlay">
                <div>
                  <span
                    className="text-sm font-semibold tracking-wide block"
                    style={{ color: "var(--cream)" }}
                  >
                    {photo.label}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(244,237,224,0.55)" }}>
                    DQ Blendz Studio
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
        >
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            Follow us on Instagram for daily inspiration
          </p>
          <motion.a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide"
            style={{
              background: "transparent",
              color: "var(--cream)",
              border: "1px solid rgba(214,40,57,0.4)",
            }}
            whileHover={{
              background: "rgba(214,40,57,0.08)",
              borderColor: "rgba(214,40,57,0.6)",
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {business.instagramHandle}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
