"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleLink = (href: string) => {
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 2.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="flex items-center gap-2.5"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
                  className="relative text-sm tracking-wide transition-colors duration-200 group"
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
              <motion.button
                onClick={() => handleLink("#contact")}
                className="px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide text-white"
                style={{
                  background: "var(--teal-primary)",
                  boxShadow: "0 2px 12px rgba(13,148,136,0.3)",
                }}
                whileHover={{ y: -2, boxShadow: "0 6px 24px rgba(13,148,136,0.45)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                Book Now
              </motion.button>
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
              style={{ background: "rgba(5,13,11,0.6)", backdropFilter: "blur(6px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="drawer"
              className="fixed right-0 top-0 h-full w-72 z-50 md:hidden flex flex-col pt-20 px-6 pb-8"
              style={{
                background: "var(--surface)",
                borderLeft: "1px solid var(--border)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-1 flex-1">
                {links.map((l, i) => (
                  <motion.button
                    key={l.href}
                    onClick={() => handleLink(l.href)}
                    className="text-left py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200"
                    style={{ color: "var(--muted)" }}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 200, damping: 22 }}
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
                  </motion.button>
                ))}
              </nav>
              <motion.button
                onClick={() => handleLink("#contact")}
                className="w-full py-3 rounded-lg font-semibold tracking-wide text-center text-white"
                style={{ background: "var(--teal-primary)" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Now
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
