/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 20px -15px rgba(0, 0, 0, 0.07)',
      }
    },
  },
  plugins: [],
}