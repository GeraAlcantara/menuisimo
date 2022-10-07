/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_primary: "#e0dace",
      },
      fontFamily: {
        serif: ["DM Serif Display", ...defaultTheme.fontFamily.sans],
        sans: ["DM Sans", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
