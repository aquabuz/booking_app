module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "at-light-blue": "#146ebe",
        "at-blue": "#183153",
        "light-grey": "#f0f1f3",
      },
    },
    fontFamily: {},
    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
