import { useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const featured = project.featured;

  return (
    <div
      className="glass rounded-2xl overflow-hidden card-hover"
      style={{
        border: "1px solid rgba(200,169,110,0.1)",
        gridColumn: featured ? "1 / -1" : "auto",
      }}
    >
      {featured ? (
        <div className="grid lg:grid-cols-2 gap-0 cursor-pointer">
          {/* Left: Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="tag">Featured Project</span>
                <span className="tag" style={{ background: "rgba(78,205,78,0.08)", color: "#4ade80", borderColor: "rgba(78,205,78,0.2)" }}>
                  Live
                </span>
                <span style={{ color: "rgba(245,243,238,0.35)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}>
                  {project.year}
                </span>
              </div>

              <h3
                className="font-display mb-2"
                style={{ fontSize: "1.8rem", fontWeight: 700, color: "#F5F3EE" }}
              >
                {project.title}
              </h3>
              <p className="mb-4 text-sm font-medium" style={{ color: "#C8A96E" }}>
                {project.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,243,238,0.65)" }}>
                {project.description}
              </p>

              <ul className="space-y-2 mb-8">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,243,238,0.6)" }}>
                    <span style={{ color: "#C8A96E", marginTop: 2, flexShrink: 0 }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View Live <ArrowUpRight size={16} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="relative overflow-hidden order-1 lg:order-2"
            style={{
              minHeight: 280,
              background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.color}20, transparent 70%)`,
              }}
            >

              <div className="relative">
                <div
                  style={{
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    border: `1px solid ${project.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "float 6s ease-in-out infinite",
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      border: `1px solid ${project.color}50`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: `${project.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                      }}
                    >
                      🌐
                    </div>
                  </div>
                </div>

                {/* Orbit dots */}
                {["AI", "RT", "Cloud"].map((label, i) => (
                  <div
                    key={label}
                    style={{
                      position: "absolute",
                      top: `${[10, 70, 40][i]}%`,
                      left: `${[80, 85, -15][i]}%`,
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}40`,
                      borderRadius: 6,
                      padding: "4px 8px",
                      fontSize: "0.65rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: project.color,
                    }}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Regular layout */
        <div className="p-7 flex flex-col h-full cursor-pointer">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="tag">{project.year}</span>
                {project.live && (
                  <span className="tag" style={{ background: "rgba(78,205,78,0.08)", color: "#4ade80", borderColor: "rgba(78,205,78,0.2)" }}>
                    Live
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-semibold" style={{ color: "#F5F3EE" }}>
                {project.title}
              </h3>
              <p className="text-xs mt-1" style={{ color: "#C8A96E" }}>{project.subtitle}</p>
            </div>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "rgba(245,243,238,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A96E")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,243,238,0.4)")}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(245,243,238,0.6)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="flex items-center gap-4 mb-4">
            <span style={{ color: "#C8A96E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>03 /</span>
            <span style={{ color: "rgba(245,243,238,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>projects</span>
          </div>

          <div className="flex items-end justify-between mb-14">
            <div>
              <h2
                className="font-display mb-3"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F3EE" }}
              >
                What I've Built
              </h2>
              <p style={{ color: "rgba(245,243,238,0.55)", fontSize: "0.95rem", maxWidth: 420 }}>
                Production applications solving real problems — from disaster alerts to gym management.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
