import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#0F172A",
          light: "#CBD5E1",
        },
        secondary: {
          DEFAULT: "#616161",
        },
      },
      gap: {
        "1.25": "0.313rem",
      },
      animation: {
        form: "0.25s forwards swipe-right ease-out",
      },
      keyframes: {
        "swipe-left": {
          "0%": { transform: "translateX(-24px)", opacity: ".5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "swipe-right": {
          "0%": { transform: "translateX(24px)", opacity: ".5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
