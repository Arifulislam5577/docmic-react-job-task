/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2D89FF",
        secondary: "#642DFF",
        dark: "#1E1E1E",
        darkLight: "#575757",
        gradientOneFrom: "#2d89ff91",
        gradientOneTo: "#2d89ff00",
        gradientTwoFrom: "#2D89FF4D",
        gradientTwoTo: "#2D89FF00",
        iconbgOne: "#E8F3FD",
        iconbgTwo: "#FDE7E8",
        lightBlue: "#E9EEF7",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
