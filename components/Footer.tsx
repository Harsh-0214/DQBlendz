"use client";

import { Calendar } from "lucide-react";
import { Instagram } from "./icons";
import Logo from "./Logo";
import { business } from "@/app/config";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "The Barber", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-5 sm:px-6 lg:px-10" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="max-w-xs">
            <Logo size={32} />
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Vaughan&apos;s underground barber. Precision cuts, quiet
              confidence — every client leaves their best.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-[0.65rem] uppercase tracking-[0.22em] mb-1" style={{ color: "var(--brass)" }}>
              Explore
            </span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ivory)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-5">
            <a
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold px-6 py-3 text-sm uppercase tracking-wider"
            >
              <Calendar size={15} />
              Book on Booksy
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brass-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <Instagram size={16} />
              {business.instagramHandle}
            </a>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "var(--muted-dark)" }}>
          <span>© {year} {business.name}. All rights reserved.</span>
          <span>{business.address.line1} · {business.address.line2}</span>
        </div>
      </div>
    </footer>
  );
}
