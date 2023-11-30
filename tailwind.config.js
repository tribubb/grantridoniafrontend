// IMPDEV: Major utilisation of Tailwind, some elements especially on marketplace untouched
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        'p': '1.25rem',
        'h4t': '1.5rem',
        'h3t': '1.75rem',
        'h2t': '2rem',
        'h1t': '3rem',
      },
      borderColor: {
        'trida': '#006554',
      },
    },
  },
  plugins: [],
}

