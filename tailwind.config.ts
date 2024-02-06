import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        "1": "1px",
      },
      colors: {
        primary: "#90c46c",
        secondary: "#488dcf",
        error: "#dc2626",
        warning: "#f59e0b",
        info: "#3b82f6",
      },
      gridTemplateColumns: {
        "auto-fill-288": "repeat(auto-fill, minmax(288px, 1fr))",
      },
    },
  },
  plugins: [],
} satisfies Config;
