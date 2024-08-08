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
      container: {
        screens: {
          sm: "540px",
          md: "720px",
          lg: "1024px",
          xl: "1180px",
          "2xl": "1536px",
          default: "100%",
        },
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
        "transition-left": "0.2s forwards swipe-left ease",
        "transition-right": "0.2s forwards swipe-right ease",
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
