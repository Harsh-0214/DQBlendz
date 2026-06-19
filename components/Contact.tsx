"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle, AtSign } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const hours = [
  { day: "Monday", time: "9 AM – 7 PM" },
  { day: "Tuesday", time: "9 AM – 7 PM" },
  { day: "Wednesday", time: "9 AM – 7 PM" },
  { day: "Thursday", time: "9 AM – 8 PM" },
  { day: "Friday", time: "9 AM – 8 PM" },
  { day: "Saturday", time: "8 AM – 6 PM" },
  { day: "Sunday", time: "10 AM – 4 PM" },
];

type FormState = "idle" | "sending" | "sent";

const inputBase: React.CSSProperties = {
  background: "rgba(10,26,22,0.6)",
  border: "1px solid rgba(13,148,136,0.22)",
  color: "var(--foreground)",
  borderRadius: "10px",
  padding: "12px 14px",
  width: "100%",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 200ms ease, box-shadow 200ms ease",
};

const focusStyle: React.CSSProperties = {
  borderColor: "rgba(13,148,136,0.6)",
  boxShadow: "0 0 0 3px rgba(13,148,136,0.08)",
};

const blurStyle: React.CSSProperties = {
  borderColor: "rgba(13,148,136,0.22)",
  boxShadow: "none",
};

function InputField({
  id,
  name,
  type = "text",
  label,
  placeholder,
  required,
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        className="block text-xs font-medium mb-1.5 tracking-wide"
        style={{ color: "var(--muted)" }}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputBase}
        autoComplete={autoComplete}
        onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
        onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
      />
    </div>
  );
}

export default function Contact() {
  const { ref, visible } = useInView(0.1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--surface)" }} />
      <div className="teal-divider absolute top-0 left-0 right-0" />
      <div
        className="glow-orb absolute"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
          top: "0",
          right: "-20%",
          animationDelay: "0.5s",
        }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          <p className="section-heading-label">Get In Touch</p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--foreground)" }}
          >
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Ready for a fresh cut? Fill out the form below and we&apos;ll
            confirm your booking within a few hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-8" style={{ minHeight: "420px" }}>
              <AnimatePresence mode="wait">
                {formState === "sent" ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.1 }}
                    >
                      <CheckCircle size={52} style={{ color: "var(--teal-light)" }} />
                    </motion.div>
                    <h3
                      className="text-xl font-semibold mt-5 mb-2"
                      style={{ color: "var(--foreground)" }}
                    >
                      Request Received!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      We&apos;ll reach out to confirm your appointment soon.
                    </p>
                    <button
                      className="mt-6 text-sm underline underline-offset-2 transition-opacity hover:opacity-70"
                      style={{ color: "var(--teal-light)" }}
                      onClick={() => {
                        setFormState("idle");
                        setForm({ name: "", phone: "", service: "", message: "" });
                      }}
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <InputField
                        id="name"
                        name="name"
                        label="Full Name *"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                      <InputField
                        id="phone"
                        name="phone"
                        type="tel"
                        label="Phone Number *"
                        placeholder="(555) 000-0000"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--muted)" }}
                        htmlFor="service"
                      >
                        Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputBase, cursor: "pointer" }}
                        onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                      >
                        <option value="" style={{ background: "var(--surface)" }}>
                          Select a service
                        </option>
                        <option value="classic" style={{ background: "var(--surface)" }}>Classic Haircut</option>
                        <option value="fade" style={{ background: "var(--surface)" }}>Skin Fade</option>
                        <option value="beard" style={{ background: "var(--surface)" }}>Beard Trim &amp; Shape</option>
                        <option value="combo" style={{ background: "var(--surface)" }}>Cut + Beard Combo</option>
                        <option value="kids" style={{ background: "var(--surface)" }}>Kid&apos;s Cut</option>
                        <option value="shave" style={{ background: "var(--surface)" }}>Hot Towel Shave</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--muted)" }}
                        htmlFor="message"
                      >
                        Message / Preferred Time
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Any special requests or preferred appointment time..."
                        style={{ ...inputBase, resize: "none" }}
                        onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formState === "sending"}
                      className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 text-white"
                      style={{
                        background: "var(--teal-primary)",
                        opacity: formState === "sending" ? 0.75 : 1,
                        boxShadow: "0 4px 20px rgba(13,148,136,0.28)",
                      }}
                      whileHover={formState !== "sending" ? { y: -2, boxShadow: "0 8px 28px rgba(13,148,136,0.45)" } : {}}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {formState === "sending" ? (
                        <>
                          <motion.svg
                            className="animate-spin"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </motion.svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Booking Request
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.22 }}
          >
            {[
              {
                icon: MapPin,
                title: "Find Us",
                content: ["123 Main Street", "Your City, Province A1B 2C3"],
              },
              {
                icon: Phone,
                title: "Call or Text",
                content: ["(555) 123-4567"],
                href: "tel:5551234567",
              },
              {
                icon: AtSign,
                title: "Follow Us",
                content: ["@dqblendz on Instagram"],
                href: "https://instagram.com/dqblendz",
              },
            ].map(({ icon: Icon, title, content, href }) => (
              <div
                key={title}
                className="flex gap-4 items-start glass rounded-xl p-5 transition-colors duration-200"
                style={{ border: "1px solid rgba(13,148,136,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(13,148,136,0.12)",
                    border: "1px solid rgba(13,148,136,0.25)",
                  }}
                >
                  <Icon size={18} style={{ color: "var(--teal-light)" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                    {title}
                  </div>
                  {content.map((c) =>
                    href ? (
                      <a
                        key={c}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200 hover:underline"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal-light)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                      >
                        {c}
                      </a>
                    ) : (
                      <div key={c} className="text-sm" style={{ color: "var(--muted)" }}>
                        {c}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}

            <div
              className="glass rounded-xl p-5"
              style={{ border: "1px solid rgba(13,148,136,0.12)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(13,148,136,0.12)",
                    border: "1px solid rgba(13,148,136,0.25)",
                  }}
                >
                  <Clock size={18} style={{ color: "var(--teal-light)" }} />
                </div>
                <div className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                  Hours of Operation
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center text-xs rounded-md px-2 py-1 transition-colors duration-150"
                    style={{
                      color: h.day === today ? "var(--teal-light)" : "var(--muted)",
                      fontWeight: h.day === today ? "600" : "400",
                      background: h.day === today ? "rgba(13,148,136,0.08)" : "transparent",
                    }}
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
