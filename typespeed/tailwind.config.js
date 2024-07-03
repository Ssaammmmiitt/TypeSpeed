/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow,
        2: "#2D4258",
        1: "#1E293B",
      },
    },
  },
  plugins: [],
};
