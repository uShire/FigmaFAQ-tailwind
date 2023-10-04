/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#2b2b2b",
        light: "#ffffff",
      },
      fontFamily: {
        monsterrat: ["Monsterrat", "sans-serif"],
      },
      listStyleType: {
        circle: "circle",
      },
    },
  },
  plugins: [],
};
