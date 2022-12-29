/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        vazir: ['Vazir'],
        vazirNum: ['VazirNum'],
        badr: ['Badr'],
        yekan: ['Yekan'],
      },
    },
  },
  plugins: [],
};
