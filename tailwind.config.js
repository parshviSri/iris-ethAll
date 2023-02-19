const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        84: "21rem",
      },
      colors: {
        b: {
          100: "#FFCCD5",
          200: "#FFB3C1",
          300: "#FF8FA3",
          400: "#FF758F",
          500: "#A4133C",
          600: "#590D22",
        },
        bt: {
          100: "#F5F6FF",
          200: "#EDEFFF",
          300: "#E1E4FF",
        },
        g: {
          100: "#61E979",
        },
        l: {
          100: "#B7EFC5",
          200: "#6EDE8A",
          300: "#4AD66D",
          400: "#208B3A",
          500: "#155D27",
          600: "#10451D",
        },
        n: {
          100: "#c2c6d2",
          200: "#989ca7",
          300: "#70747e",
          400: "#4a4e57",
          500: "#272b34",
          600: "#010613",
        },
        p: {
          100: "#FFFAE5",
          200: "#FFF2B2",
          300: "#FFE566",
          400: "#FFE14C",
          500: "#FFD819",
          600: "#FFD400",
        },
        y: {
          100: "#f5e33e",
          200: "#c7b902",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["Inconsolata", ...fontFamily.mono],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "20px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
