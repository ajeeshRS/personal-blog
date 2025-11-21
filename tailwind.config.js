/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Text", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
