module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        facebook: {
          100: "#EBEEF5",
          200: "#CED6E5",
          300: "#B1BDD6",
          400: "#768BB7",
          500: "#3B5998",
          600: "#355089",
          700: "#23355B",
          800: "#1B2844",
          900: "#121B2E",
        },
        twitter: {
          100: "#E6F7FD",
          200: "#BFEAFB",
          300: "#99DEF8",
          400: "#4DC5F2",
          500: "#00ACED",
          600: "#009BD5",
          700: "#00678E",
          800: "#004D6B",
          900: "#003447",
        },
        blue: {
          100: "#ECF3F9",
          200: "#D0E1F1",
          300: "#B4CEE8",
          400: "#7BAAD6",
          500: "#4385C5",
          600: "#3C78B1",
          700: "#285076",
          800: "#1E3C59",
          900: "#14283B",
        },
      },
    },
  },
  plugins: [require("tailwindcss-padding-safe")],
};
