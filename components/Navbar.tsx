"use client";

import { useEffect, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 nav-base ${scrolled ? "nav-scrolled" : ""}`}
        style={{
          background: scrolled ? undefined : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="flex items-center gap-2.5"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(13,148,136,0.15)",
                  border: "1px solid rgba(13,148,136,0.35)",
                }}
              >
                <Scissors size={18} style={{ color: "var(--teal-light)" }} />
              </div>
              <span
                className="text-lg font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--foreground)",
                }}
              >
                DQBlendz
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleLink(l.href)}
                  className="text-sm tracking-wide transition-colors duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--teal-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted)")
                  }
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <button
                onClick={() => handleLink("#contact")}
                className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide"
                style={{
                  background: "var(--teal-primary)",
                  color: "white",
                }}
              >
                Book Now
              </button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg"
              style={{
                background: "rgba(13,148,136,0.1)",
                border: "1px solid rgba(13,148,136,0.2)",
                color: "var(--foreground)",
              }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(5,13,11,0.7)",
            opacity: open ? 1 : 0,
            transition: "opacity 250ms ease-out",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setOpen(false)}
        />

        <div
          className="absolute right-0 top-0 h-full w-72 flex flex-col pt-20 px-6 pb-8"
          style={{
            background: "var(--surface)",
            borderLeft: "1px solid var(--border)",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <nav className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="text-left py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--teal-light)";
                  e.currentTarget.style.background = "rgba(13,148,136,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => handleLink("#contact")}
            className="btn-primary w-full py-3 rounded-lg font-semibold tracking-wide text-center"
            style={{ background: "var(--teal-primary)", color: "white" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
