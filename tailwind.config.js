/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.{liquid,json}",
    "./templates/**/*.{liquid,json}",
    "./sections/**/*.{liquid,json}",
    "./snippets/**/*.{liquid,json}",
    "./assets/**/*.{liquid,json,js,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
