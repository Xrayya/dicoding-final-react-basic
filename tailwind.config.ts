import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#90c46c",
        secondary: "#488dcf",
        light: "#f8fafc",
        lightVariant: "#e2e8f0",
        gray: "#94a3b8",
        grayVariant: "#64748b",
        dark: "#020617",
        darkVariant: "#0f172a",
        error: "#dc2626",
        warning: "#fde047",
        info: "#3b82f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
