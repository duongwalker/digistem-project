/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/background_banner.svg')",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        "helvetica-black": [
          "HelveticaNeueBlack",
          "HelveticaNeue",
          "Arial",
          "sans-serif",
        ],
        helvetica_neue: ["HelveticaNeue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
