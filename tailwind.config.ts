import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0a0a0a",
          secondary: "#0d0d0d",
          card: "#111111",
          elevated: "#161616",
        },
        accent: {
          primary: "#b8952a",
          hover: "#d4af37",
          glow: "rgba(212, 175, 55, 0.18)",
          light: "#f0d060",
          neon: "#fdf3c0",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#475569",
        },
        border: {
          default: "#1a1a1a",
          accent: "rgba(212, 175, 55, 0.25)",
        },
      },
      boxShadow: {
        "glow-gold": "0 0 40px rgba(212, 175, 55, 0.2)",
        "glow-strong": "0 0 60px rgba(212, 175, 55, 0.35)",
        card: "0 4px 32px rgba(0, 0, 0, 0.5)",
        neon: "0 0 20px rgba(253, 243, 192, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
