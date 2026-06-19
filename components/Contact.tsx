"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle, AtSign } from "lucide-react";

const hours = [
  { day: "Monday", time: "9 AM – 7 PM" },
  { day: "Tuesday", time: "9 AM – 7 PM" },
  { day: "Wednesday", time: "9 AM – 7 PM" },
  { day: "Thursday", time: "9 AM – 8 PM" },
  { day: "Friday", time: "9 AM – 8 PM" },
  { day: "Saturday", time: "8 AM – 6 PM" },
  { day: "Sunday", time: "10 AM – 4 PM" },
];

type FormState = "idle" | "sending" | "sent" | "error";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Contact() {
  const { ref, visible } = useInView();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
    }, 1500);
  };

  const inputStyle = {
    background: "rgba(10,26,22,0.6)",
    border: "1px solid rgba(13,148,136,0.25)",
    color: "var(--foreground)",
    borderRadius: "10px",
    padding: "12px 14px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 200ms ease",
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--surface)" }}
      />
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
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--teal-primary)" }}
          >
            Get In Touch
          </p>
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
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              {formState === "sent" ? (
                <div className="text-center py-12">
                  <CheckCircle
                    size={48}
                    className="mx-auto mb-4"
                    style={{ color: "var(--teal-light)" }}
                  />
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Request Received!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    We&apos;ll reach out to confirm your appointment soon.
                  </p>
                  <button
                    className="mt-6 text-sm underline"
                    style={{ color: "var(--teal-light)" }}
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", phone: "", service: "", message: "" });
                    }}
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--muted)" }}
                        htmlFor="name"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "rgba(13,148,136,0.6)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "rgba(13,148,136,0.25)")
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-medium mb-1.5 tracking-wide"
                        style={{ color: "var(--muted)" }}
                        htmlFor="phone"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        style={inputStyle}
                        autoComplete="tel"
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = "rgba(13,148,136,0.6)")
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor = "rgba(13,148,136,0.25)")
                        }
                      />
                    </div>
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
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(13,148,136,0.6)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(13,148,136,0.25)")
                      }
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
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(13,148,136,0.6)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(13,148,136,0.25)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2"
                    style={{
                      background: "var(--teal-primary)",
                      color: "white",
                      opacity: formState === "sending" ? 0.75 : 1,
                    }}
                  >
                    {formState === "sending" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Booking Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
              },
              {
                icon: AtSign,
                title: "Follow Us",
                content: ["@dqblendz on Instagram"],
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="flex gap-4 items-start glass rounded-xl p-5">
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
                  <div
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {title}
                  </div>
                  {content.map((c) => (
                    <div
                      key={c}
                      className="text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-5">
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
                <div
                  className="font-semibold text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  Hours of Operation
                </div>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center text-xs"
                    style={{
                      color: h.day === today ? "var(--teal-light)" : "var(--muted)",
                      fontWeight: h.day === today ? "600" : "400",
                    }}
                  >
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
