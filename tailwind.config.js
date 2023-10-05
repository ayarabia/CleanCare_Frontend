/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        Primary: "#ED5B2C",
        Secondary: "#FFCF6D",
        bgYellow: " rgba(255, 207, 109, 0.92);",
      },
      container: {
        padding: {
          DEFAULT: "30px",
          lg: "1.5rem",
        },
      },
    },
    plugins: [],
  },
};
