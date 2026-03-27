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
          primary: "#1a7fd4",
          hover: "#4da6e8",
          glow: "rgba(26, 127, 212, 0.18)",
          light: "#7dd3fc",
          neon: "#e0f2fe",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#94a3b8",
          muted: "#475569",
        },
        border: {
          default: "#1a1a1a",
          accent: "rgba(26, 127, 212, 0.25)",
        },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(26, 127, 212, 0.2)",
        "glow-strong": "0 0 60px rgba(26, 127, 212, 0.35)",
        card: "0 4px 32px rgba(0, 0, 0, 0.5)",
        neon: "0 0 20px rgba(224, 242, 254, 0.15)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
