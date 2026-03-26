import { useEffect, useRef } from "react";
import { Code2, Zap, Globe, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    desc: "End-to-end product development — from database schema design to pixel-perfect UIs.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Hands-on experience building AI-powered pipelines using Google Gemini for real-world applications.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    desc: "Architecting live, event-driven applications with Socket.io, Firebase, and push notifications.",
  },
  {
    icon: Globe,
    title: "Production Deployments",
    desc: "Shipping apps to Render and Vercel with CI/CD pipelines, Docker, and cloud infrastructure.",
  },
];

export default function About() {
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
    <section id="about" className="py-28 relative">
      {/* Subtle divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-animate">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-4">
            <span style={{ color: "#C8A96E", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
              01 /
            </span>
            <span style={{ color: "rgba(245,243,238,0.5)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem" }}>
              about
            </span>
          </div>

          <h2
            className="font-display mb-16"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F3EE" }}
          >
            Who I Am
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245,243,238,0.7)" }}>
                I'm a Full-Stack Developer from Pune, India, currently pursuing my Master's in Computer Science. My journey into software started with a curiosity about how complex systems work — and that curiosity quickly evolved into building them.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245,243,238,0.7)" }}>
                Over the past year, I've built AI-integrated platforms, real-time communication systems, and multi-cloud architectures — not just as side projects, but as production applications that solve real problems. I care deeply about code quality, system reliability, and user experience.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(245,243,238,0.7)" }}>
                I'm actively looking for a junior to mid-level Full-Stack Developer role where I can contribute meaningfully, grow fast, and work on products that matter.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Open to Work", "Remote / Onsite", "Full-time"].map((badge) => (
                  <span key={badge} className="tag">{badge}</span>
                ))}
              </div>
            </div>

            {/* Right: Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-xl p-6 card-hover cursor-pointer"
                  style={{ border: "1px solid rgba(200,169,110,0.12)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(200,169,110,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "#C8A96E" }} />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "#F5F3EE" }}>
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(245,243,238,0.55)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
