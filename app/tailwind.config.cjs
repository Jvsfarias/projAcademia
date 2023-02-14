/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeProject: "#db7119",
        grayText: "#575A5E;",
      },
    },
  },
  plugins: [],
};
