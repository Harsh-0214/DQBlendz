"use client";

import { Calendar } from "lucide-react";
import { Instagram } from "./icons";
import { business } from "@/app/config";

const links = [
  { label: "Barber", href: "#about" },
  { label: "Cut List", href: "#services" },
  { label: "Cuts", href: "#cuts" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sec-dark grain relative pt-20 pb-10 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-8 pb-14">
          <div>
            <span className="kicker" style={{ color: "var(--accent)" }}>Est. Vaughan, ON</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "var(--on-dark-muted)" }}>
              Vaughan&apos;s underground barber. Sharp fades, clean lineups, and
              blends trusted by pros.
            </p>
            <a href={business.booksyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent px-6 py-3.5 mt-6">
              <Calendar size={15} />
              Book on Booksy
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="kicker mb-1" style={{ color: "var(--on-dark-faint)" }}>Explore</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="kicker transition-colors duration-200"
                style={{ color: "var(--on-dark-muted)", letterSpacing: "0.16em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--on-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-dark-muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="kicker mb-1" style={{ color: "var(--on-dark-faint)" }}>Connect</span>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 kicker transition-colors duration-200"
              style={{ color: "var(--on-dark-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-soft)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-dark-muted)")}
            >
              <Instagram size={15} />
              {business.instagramHandle}
            </a>
            <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>
              {business.address.line1}
            </span>
            <span className="kicker" style={{ color: "var(--on-dark-muted)" }}>
              {business.address.line2}
            </span>
          </div>
        </div>

        {/* Giant outlined wordmark */}
        <div className="select-none" aria-hidden="true">
          <span className="display outline block leading-none" style={{ fontSize: "clamp(3.5rem, 16vw, 15rem)" }}>
            DQ Blendz
          </span>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid var(--line-dark)" }}
        >
          <span className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.62rem" }}>
            © {year} {business.name} — All rights reserved
          </span>
          <span className="kicker" style={{ color: "var(--on-dark-faint)", fontSize: "0.62rem" }}>
            Sharp cuts · Quiet craft
          </span>
        </div>
      </div>
    </footer>
  );
}
