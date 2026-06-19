"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import Logo from "./Logo";
import { business } from "@/app/config";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "The Barber", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 nav-base ${scrolled ? "nav-scrolled" : ""}`}
        style={{ background: scrolled ? undefined : "transparent" }}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 1.7 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] md:h-20">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Logo size={34} />
            </a>

            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="nav-link text-[0.82rem] tracking-wide uppercase"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            <a
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-gold px-5 py-2.5 text-[0.8rem] uppercase tracking-wider"
            >
              <Calendar size={15} />
              Book Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm"
              style={{ border: "1px solid var(--border)", color: "var(--ivory)" }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: "flex" }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(12,11,9,0.7)", backdropFilter: "blur(6px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed right-0 top-0 h-full w-[78%] max-w-xs z-50 md:hidden flex flex-col pt-24 px-7 pb-9"
              style={{ background: "var(--surface)", borderLeft: "1px solid var(--border)" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              <nav className="flex flex-col flex-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="text-left py-4 font-display text-2xl"
                    style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border-soft)" }}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </nav>
              <a
                href={business.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-gold w-full py-3.5 uppercase tracking-wider text-sm"
              >
                <Calendar size={16} />
                Book on Booksy
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
