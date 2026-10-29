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
        alabaster: {
          50: "#FCFBF9",
          100: "#FAF8F5",
          200: "#F3EFEA",
          300: "#E7DFD5",
          400: "#D3C6B6",
          500: "#B8A38E",
        },
        charcoal: {
          50: "#F4F4F5",
          100: "#E4E4E7",
          200: "#D4D4D8",
          300: "#A1A1AA",
          400: "#71717A",
          500: "#52525B",
          600: "#3F3F46",
          700: "#27272A",
          800: "#18181B",
          900: "#0F0F11",
          950: "#09090B",
        },
        bronze: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#F59E0B",
          500: "#D97706",
          600: "#B45309",
          700: "#92400E",
          800: "#78350F",
          900: "#451A03",
        },
        sage: {
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#65A30D",
          600: "#4D7C0F",
          700: "#3F6212",
          800: "#365314",
          900: "#1A2E05",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -10px rgba(24, 24, 27, 0.08)",
        floating: "0 20px 40px -15px rgba(24, 24, 27, 0.12)",
      },
      backgroundImage: {
        "desert-gradient": "linear-gradient(to bottom right, #FAF8F5, #F3EFEA)",
        "bronze-gradient": "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
