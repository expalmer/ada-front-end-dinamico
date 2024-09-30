/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ada-primary": "rgb(166, 247, 80)",
      },
    },
  },
  plugins: [],
};
