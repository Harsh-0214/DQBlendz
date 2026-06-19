"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { business } from "@/app/config";

const links = [
  { label: "Barber", href: "#about" },
  { label: "Services & Pricing", href: "#services" },
  { label: "Gallery", href: "#cuts" },
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
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 1.6 }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px] md:h-[84px]">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Logo size={44} tone="dark" />
            </a>

            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {links.map((l) => (
                <button key={l.href} onClick={() => go(l.href)} className="nav-link">
                  {l.label}
                </button>
              ))}
            </nav>

            <a
              href={business.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-accent px-5 py-3"
            >
              Book Now
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              style={{ border: "1px solid var(--line-dark)", color: "var(--on-dark)", borderRadius: "var(--radius)" }}
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
              style={{ background: "rgba(14,13,11,0.7)", backdropFilter: "blur(6px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed right-0 top-0 h-full w-[80%] max-w-xs z-50 md:hidden flex flex-col pt-24 px-7 pb-9"
              style={{ background: "var(--ink-2)", borderLeft: "1px solid var(--line-dark)" }}
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
                    className="display text-left text-4xl py-3.5"
                    style={{ color: "var(--on-dark)", borderBottom: "1px solid var(--line-dark)" }}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.35, ease: "easeOut" }}
                  >
                    <span className="mono mr-3 align-middle" style={{ fontSize: "0.7rem", color: "var(--accent)" }}>
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.button>
                ))}
              </nav>
              <a
                href={business.booksyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-accent w-full py-4"
              >
                Book on Booksy
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
