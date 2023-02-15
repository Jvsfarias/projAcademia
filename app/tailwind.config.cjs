/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeProject: "#db7119",
        grayText: "#575A5E;",
        colorTextsCards: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
