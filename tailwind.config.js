/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'helvetica-black': ['HelveticaNeueBlack', 'HelveticaNeue', 'Arial', 'sans-serif'],
        'helvetica-neue': ['HelveticaNeue', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

