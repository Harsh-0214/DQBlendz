"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Logo from "./Logo";
import { business } from "@/app/config";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-14 px-4 sm:px-6 lg:px-8"
      style={{
        background: "var(--surface-2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-3">
              <Logo size={30} />
            </div>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Master barber studio committed to precision, craft, and making
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
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center md:items-end gap-4">
            <motion.a
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-white"
              style={{ background: "var(--red)", boxShadow: "0 2px 12px rgba(214,40,57,0.32)" }}
              whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(214,40,57,0.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Calendar size={15} />
              Book on Booksy
            </motion.a>

            <div className="flex gap-3">
              <motion.a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(214,40,57,0.1)",
                  border: "1px solid rgba(214,40,57,0.22)",
                  color: "var(--muted)",
                }}
                aria-label="Instagram"
                whileHover={{ color: "var(--red-light)", borderColor: "rgba(214,40,57,0.55)", y: -2 }}
                whileTap={{ scale: 0.93 }}
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
              </motion.a>
              <motion.a
                href={business.phoneHref}
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(214,40,57,0.1)",
                  border: "1px solid rgba(214,40,57,0.22)",
                  color: "var(--muted)",
                }}
                aria-label="Phone"
                whileHover={{ color: "var(--red-light)", borderColor: "rgba(214,40,57,0.55)", y: -2 }}
                whileTap={{ scale: 0.93 }}
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid var(--border-soft)",
            color: "var(--muted)",
          }}
        >
          <span>
            © {year} {business.name}. All rights reserved.
          </span>
          <span style={{ opacity: 0.6 }}>Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
