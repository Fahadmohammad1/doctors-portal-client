module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "rgba(15, 207, 236, 1)",
          secondary: "rgba(25, 211, 174, 1)",
          accent: "rgba(48, 56, 76, 1)",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
