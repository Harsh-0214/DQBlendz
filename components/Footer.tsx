"use client";

import { Scissors } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Now", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(13,148,136,0.15)",
                  border: "1px solid rgba(13,148,136,0.35)",
                }}
              >
                <Scissors size={16} style={{ color: "var(--teal-light)" }} />
              </div>
              <span
                className="text-base font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--foreground)",
                }}
              >
                DQBlendz
              </span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Premium barber studio committed to precision, craft, and making
              every client feel their best.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-wide transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--teal-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: "rgba(13,148,136,0.1)",
                border: "1px solid rgba(13,148,136,0.2)",
                color: "var(--muted)",
              }}
              aria-label="Instagram"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--teal-light)";
                e.currentTarget.style.borderColor = "rgba(13,148,136,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)";
              }}
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
            </a>
            <a
              href="tel:5551234567"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
              style={{
                background: "rgba(13,148,136,0.1)",
                border: "1px solid rgba(13,148,136,0.2)",
                color: "var(--muted)",
              }}
              aria-label="Phone"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--teal-light)";
                e.currentTarget.style.borderColor = "rgba(13,148,136,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)";
              }}
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(13,148,136,0.1)",
            color: "var(--muted)",
          }}
        >
          <span>© {year} DQBlendz. All rights reserved.</span>
          <span style={{ opacity: 0.6 }}>Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
