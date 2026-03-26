import { useEffect, useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experience, education } from "../data/portfolio";

export default function Experience() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="flex items-center gap-4 mb-4">
            <span style={{ color: "#C8A96E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>04 /</span>
            <span style={{ color: "rgba(245,243,238,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>experience</span>
          </div>

          <h2
            className="font-display mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F3EE" }}
          >
            Journey So Far
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience — takes 2 cols */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={18} style={{ color: "#C8A96E" }} />
                <h3 className="text-lg font-semibold" style={{ color: "#F5F3EE" }}>Work Experience</h3>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: 1,
                    background: "linear-gradient(to bottom, #C8A96E, rgba(200,169,110,0.1))",
                    left: 20,
                  }}
                />

                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-14 mb-12">
                    {/* Dot */}
                    <div
                      className="absolute"
                      style={{
                        left: 12,
                        top: 4,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "#0A0A0F",
                        border: "2px solid #C8A96E",
                        boxShadow: "0 0 12px rgba(200,169,110,0.4)",
                      }}
                    />

                    <div
                      className="glass rounded-2xl p-7 card-hover cursor-pointer"
                      style={{ border: "1px solid rgba(200,169,110,0.12)" }}
                    >
                      {/* Header */}
                      <div className="mb-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="tag">Internship</span>
                          <span className="tag" style={{ background: "rgba(78,205,78,0.08)", color: "#4ade80", borderColor: "rgba(78,205,78,0.2)" }}>
                            Completed
                          </span>
                        </div>
                        <h4 className="font-semibold text-lg" style={{ color: "#F5F3EE" }}>
                          {exp.role}
                        </h4>
                        <div className="flex flex-wrap gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-sm" style={{ color: "#C8A96E" }}>
                            <Briefcase size={13} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(245,243,238,0.45)" }}>
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm" style={{ color: "rgba(245,243,238,0.45)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>
                            <Calendar size={13} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-5 mt-4" style={{ color: "rgba(245,243,238,0.65)" }}>
                        {exp.description}
                      </p>

                      <ul className="space-y-3">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,243,238,0.6)" }}>
                            <span style={{ color: "#C8A96E", marginTop: 2, flexShrink: 0 }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={18} style={{ color: "#C8A96E" }} />
                <h3 className="text-lg font-semibold" style={{ color: "#F5F3EE" }}>Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 card-hover cursor-pointer"
                    style={{ border: "1px solid rgba(200,169,110,0.12)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="tag"
                        style={
                          edu.status === "In Progress"
                            ? { background: "rgba(200,169,110,0.1)", color: "#C8A96E", borderColor: "rgba(200,169,110,0.2)" }
                            : { background: "rgba(78,205,78,0.08)", color: "#4ade80", borderColor: "rgba(78,205,78,0.2)" }
                        }
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1" style={{ color: "#F5F3EE", fontSize: "0.95rem" }}>
                      {edu.degree}
                    </h4>
                    <p className="text-sm mb-2" style={{ color: "rgba(245,243,238,0.55)" }}>
                      {edu.institution}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(245,243,238,0.35)", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {edu.period}
                    </p>
                  </div>
                ))}

                {/* Skills summary card */}
                <div
                  className="rounded-2xl p-6 mt-6 card-hover cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,169,110,0.08), rgba(200,169,110,0.03))",
                    border: "1px solid rgba(200,169,110,0.2)",
                  }}
                >
                  <p className="text-sm font-semibold mb-3" style={{ color: "#C8A96E" }}>
                    Currently Learning
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["System Design", "AWS", "GraphQL", "Next.js"].map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
