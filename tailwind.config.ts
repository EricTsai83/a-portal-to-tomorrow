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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wobble: {
          to: {
            filter: "hue-rotate(360deg)", // Rotate color hues
            transform: "translate(var(--x), var(--y)) rotate(360deg)", // Rotate and translate element
          },
        },
      },
      animation: {
        wobble: "wobble calc(var(--speed, 150ms) * var(--t)) linear infinite", // Use `--speed` and `--t` for dynamic control
      },
      boxShadow: {
        "custom-inset": "0 0 0.5em 0.2em #000 inset, 0 0 0.15em 0 #fff", // Custom inset shadow
      },
      filter: {
        "hue-rotate-0": "hue-rotate(0deg)", // No hue rotation
        "hue-rotate-360": "hue-rotate(360deg)", // Full hue rotation
      },
    },
  },
  plugins: [],
};

export default config;
