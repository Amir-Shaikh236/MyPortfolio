import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,169,110,0.1)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <img
            src="/favicon.png"
            alt="MA Logo"
            className="w-9 h-9 rounded-full border border-[#C8A96E]/40 shadow-[0_0_10px_rgba(200,169,110,0.4)]"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            <span style={{ color: "#C8A96E" }} className="p-1 text-xl">Amir</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === link ? "#C8A96E" : "rgba(245,243,238,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#C8A96E")}
                onMouseLeave={(e) =>
                (e.target.style.color =
                  active === link ? "#C8A96E" : "rgba(245,243,238,0.7)")
                }
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:skamir2410@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-md transition-all duration-200"
          style={{
            border: "1px solid rgba(200,169,110,0.5)",
            color: "#C8A96E",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(200,169,110,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#C8A96E" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid rgba(200,169,110,0.1)" }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left py-2 text-sm font-medium"
              style={{ color: "rgba(245,243,238,0.8)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {link}
            </button>
          ))}
          <a
            href="mailto:skamir2410@gmail.com"
            className="btn-secondary mt-2 justify-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
