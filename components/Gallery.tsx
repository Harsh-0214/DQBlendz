"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Skin fade haircut",
    label: "Skin Fade",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Classic barbershop cut",
    label: "Classic Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Beard trim and shape",
    label: "Beard Shape",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "High fade with texture",
    label: "High Fade",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Barber at work precision cut",
    label: "Precision Cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&q=80",
    alt: "Fresh line up and edge",
    label: "Line Up",
    span: "",
  },
];

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

export default function Gallery() {
  const { ref, visible } = useInView();

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
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
          top: "20%",
          right: "-15%",
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
            Our Portfolio
          </p>
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
            Every cut is a canvas. Browse our latest work and see what precision
            and passion look like.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[260px]">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`gallery-item rounded-xl sm:rounded-2xl cursor-pointer ${photo.span} transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                border: "1px solid rgba(13,148,136,0.15)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="gallery-img"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-overlay">
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "var(--teal-accent)" }}
                >
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
            Follow us on Instagram for daily inspiration
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide"
            style={{
              background: "transparent",
              color: "var(--teal-light)",
              border: "1px solid rgba(13,148,136,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(13,148,136,0.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
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
            @dqblendz
          </a>
        </div>
      </div>
    </section>
  );
}
