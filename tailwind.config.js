module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6fffb",
        primary: {
          base: "#009640",
          dark: "#008530",
        },
        grey: {
          300: "#717070",
          400: "#595959",
          600: "#263238",
          800: "#000E29",
        },
      },
      fontFamily: {
        sans: ["Monserrat", "sans-serif"],
        serif: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
