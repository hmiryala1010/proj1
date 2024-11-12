/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sour Gummy', 'sans-serif'], // Set Roboto as the default sans font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

