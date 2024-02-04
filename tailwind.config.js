/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      colors:{
        "color-primary" : "#01051e",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#ff7d3b",
        "color-gray" : "#333",
        "color-white" : "#fff",
        "color-blob" : "#A427DF",
      }
    },
  },
  plugins: [],
}

