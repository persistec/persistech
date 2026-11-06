import type { Config } from "tailwindcss";

/**
 * Tailwind v4 reads the design tokens from `src/app/globals.css` (@theme).
 * This config mirrors the Persistech Aurum system for tooling that still
 * reads a classic Tailwind config.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F4EC",
        paper: "#FFFFFF",
        sand: "#FBF8F1",
        parchment: "#F1ECE0",
        stone: "#E7DFCE",
        hairline: "#DCD4C2",
        ink: "#14120C",
        graphite: "#4A4436",
        muted: "#726B5C",
        executive: {
          DEFAULT: "#0E0E0D",
          surface: "#171715",
        },
        ivory: "#F5F1E6",
        "on-executive-muted": "#B9B1A0",
        gold: {
          DEFAULT: "#B8952A",
          deep: "#A8811F",
          bright: "#D4AF37",
          pale: "#F0D060",
        },
        success: "#2E6B45",
        warning: "#9A6410",
        error: "#A3362B",
        info: "#315C7A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "6px",
        lg: "10px",
        xl: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
