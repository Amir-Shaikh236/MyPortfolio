import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Contact() {
  const ref = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Top Border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)",
        }}
      />

      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          maxWidth: "800px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div ref={ref} className="section-animate">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                color: "#C8A96E",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
              }}
            >
              05 /
            </span>
            <span
              style={{
                color: "rgba(245,243,238,0.5)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.8rem",
              }}
            >
              contact
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* LEFT */}
            <div>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  fontWeight: 700,
                  color: "#F5F3EE",
                  lineHeight: 1.2,
                }}
              >
                Let's Build
                <br />
                <span className="text-gradient">Something Great</span>
              </h2>

              <p
                className="text-base leading-relaxed mb-10"
                style={{
                  color: "rgba(245,243,238,0.65)",
                  maxWidth: "100%",
                }}
              >
                I'm currently open to junior and mid-level Full-Stack opportunities.
                Whether you have a project in mind, a role to fill, or just want to
                connect — I'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: Mail, label: "Email", value: personal.email, action: copyEmail },
                  { icon: Phone, label: "Phone", value: personal.phone, action: null },
                  { icon: MapPin, label: "Location", value: personal.location, action: null },
                ].map(({ icon: Icon, label, value, action }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 group"
                    onClick={action || undefined}
                    style={{ cursor: action ? "pointer" : "default" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        background: "rgba(200,169,110,0.1)",
                        border: "1px solid rgba(200,169,110,0.2)",
                      }}
                    >
                      <Icon size={16} style={{ color: "#C8A96E" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        style={{
                          color: "rgba(245,243,238,0.4)",
                          fontSize: "0.72rem",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm font-medium truncate"
                        style={{
                          color: action ? "#C8A96E" : "#F5F3EE",
                        }}
                      >
                        {label === "Email" && copied ? "Copied!" : value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: Github, href: personal.github, label: "GitHub" },
                  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
                  { icon: ExternalLink, href: personal.portfolio, label: "Portfolio" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(200,169,110,0.08)",
                      border: "1px solid rgba(200,169,110,0.15)",
                      color: "rgba(245,243,238,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(200,169,110,0.15)";
                      e.currentTarget.style.color = "#C8A96E";
                      e.currentTarget.style.borderColor = "rgba(200,169,110,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(200,169,110,0.08)";
                      e.currentTarget.style.color = "rgba(245,243,238,0.5)";
                      e.currentTarget.style.borderColor = "rgba(200,169,110,0.15)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT - CTA CARD */}
            <div>
              <div
                className="rounded-2xl p-6 md:p-8 card-hover cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,169,110,0.06), rgba(200,169,110,0.02))",
                  border: "1px solid rgba(200,169,110,0.2)",
                }}
              >
                <h3
                  className="font-display text-xl md:text-2xl font-semibold mb-3"
                  style={{ color: "#F5F3EE" }}
                >
                  Ready to collaborate?
                </h3>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "rgba(245,243,238,0.6)" }}
                >
                  Drop me an email and I'll respond within 24 hours. I'm always
                  excited to discuss new projects, creative ideas, or opportunities
                  to be part of something meaningful.
                </p>

                <a
                  href={`mailto:${personal.email}?subject=Opportunity for Mohammed Amer&body=Hi Mohammed, I'd like to connect with you regarding...`}
                  className="btn-primary w-full justify-center text-center flex gap-2"
                >
                  <Send size={16} />
                  Send Me an Email
                </a>

                <div
                  className="mt-6 pt-6 flex items-center justify-between"
                  style={{
                    borderTop: "1px solid rgba(200,169,110,0.1)",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(245,243,238,0.4)",
                      fontSize: "0.8rem",
                    }}
                  >
                    Typically responds in
                  </span>
                  <span
                    style={{
                      color: "#C8A96E",
                      fontSize: "0.8rem",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    &lt; 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="mt-12 md:mt-20 pt-6 md:pt-8 text-center"
        style={{
          borderTop: "1px solid rgba(200,169,110,0.08)",
        }}
      >
        <p
          style={{
            color: "rgba(245,243,238,0.3)",
            fontSize: "0.8rem",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Designed & Built by{" "}
          <span style={{ color: "#C8A96E" }}>Mohammed Amer</span> —{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}