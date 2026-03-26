/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: "#0A0A0F",
        paper: "#F5F3EE",
        accent: "#C8A96E",
        "accent-light": "#E8D5A3",
        muted: "#6B7280",
        surface: "#13131A",
        border: "#1E1E2E",
      },
    },
  },
  plugins: [],
};
