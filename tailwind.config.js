module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      background: {
        "black-100": "#dddddd",
        "black-50": "#eff0f4",
        "skin-color": "#1fc586",
      },
      colors: {
        "black-700": "#555555",
        "black-600": "#666666",
        "black-300": "#bbbbbb",
        "skin-color": "#1fc586",
      },
      boxShadow: {
        outer: "3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8",
        inner: "inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        "semi-bold": "600",
      },
    },
  },
  plugins: [],
};
