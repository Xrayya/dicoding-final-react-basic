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
        warning: "#fde047",
        info: "#3b82f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
