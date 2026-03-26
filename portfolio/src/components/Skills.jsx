import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";

const categoryColors = {
  "Core Languages": "#C8A96E",
  "Frontend": "#8B9FE8",
  "Backend": "#6EBF8B",
  "Databases": "#E8836E",
  "Cloud & DevOps": "#6EC4E8",
  "APIs & Integrations": "#C86EBF",
  "Tools": "#E8C46E",
};

export default function Skills() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      {/* Marquee */}
      <div className="overflow-hidden mb-20 py-4" style={{ borderTop: "1px solid rgba(200,169,110,0.08)", borderBottom: "1px solid rgba(200,169,110,0.08)" }}>
        <div className="animate-marquee flex gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span
              key={i}
              className="text-sm font-medium"
              style={{
                color: i % 3 === 0 ? "#C8A96E" : "rgba(245,243,238,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {skill} <span style={{ color: "rgba(200,169,110,0.3)", marginLeft: 16 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          <div className="flex items-center gap-4 mb-4">
            <span style={{ color: "#C8A96E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>02 /</span>
            <span style={{ color: "rgba(245,243,238,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>skills</span>
          </div>

          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F3EE" }}
          >
            Technical Arsenal
          </h2>
          <p className="mb-14 text-base" style={{ color: "rgba(245,243,238,0.55)", maxWidth: 480 }}>
            A curated stack of technologies I use to build, scale, and ship production-ready applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => {
              const color = categoryColors[category] || "#C8A96E";
              return (
                <div
                  key={category}
                  className="glass rounded-2xl p-6 card-hover  cursor-pointer"
                  style={{ border: "1px solid rgba(200,169,110,0.1)" }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      style={{
                        width: 4,
                        height: 20,
                        borderRadius: 2,
                        background: color,
                      }}
                    />
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: "#F5F3EE", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-200"
                        style={{
                          background: `${color}12`,
                          color: color,
                          border: `1px solid ${color}25`,
                          fontFamily: "'JetBrains Mono', monospace",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${color}22`;
                          e.currentTarget.style.borderColor = `${color}55`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${color}12`;
                          e.currentTarget.style.borderColor = `${color}25`;
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
