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
        "persistec-gold": "#C49A45",
        "persistec-charcoal": "#2D2D2D",
        "persistec-light": "#F8F9FA",
      },
    },
  },
  plugins: [],
};

export default config;
