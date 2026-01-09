/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#0A7676",
        secondary: "#0A767640",
        accent: "#EFF0F1",
        neutral: "#7E8792",
        "base-100": "#ffffff",
      },
      fontFamily: {
        clash: ["var(--clash-display)"],
        style: ["var(--style-display)"],
      },
    },
  },
  plugins: [],
};