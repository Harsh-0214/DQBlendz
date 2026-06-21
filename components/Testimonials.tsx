"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { business } from "@/app/config";

const featured = {
  name: "Rahul M.",
  text: "Best barber I've ever had. The detail on my fade is unmatched — three years deep and I'm not going anywhere else.",
};

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

/** Loads the Elfsight platform script once, when a widget id is configured. */
function useElfsight(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const src = "https://static.elfsight.com/platform/platform.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.body.appendChild(s);
  }, [enabled]);
}

export default function Testimonials() {
  const { ref, visible } = useInView(0.08);
  const widgetId = business.elfsightWidgetId;
  const hasWidget = widgetId.length > 0;
  useElfsight(hasWidget);

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
              {featured.name}
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

      {/* Live reviews: real Booksy reviews via Elfsight when configured,
          otherwise a clean call-to-action to read them on Booksy. */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 0.32 }}
      >
        {hasWidget ? (
          <div className={widgetId} data-elfsight-app-lazy />
        ) : (
          <div
            className="flex flex-col items-center gap-5 text-center px-6 py-12"
            style={{ border: "1px solid var(--line-dark)", borderRadius: "var(--radius)" }}
          >
            <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>
              Read every verified review
            </span>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: "var(--on-dark-muted)" }}>
              All {business.reviewsDisplay} five-star reviews are on DQ&apos;s
              Booksy profile, straight from real clients.
            </p>
            <a
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent px-7 py-4"
            >
              See Reviews on Booksy
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
}
