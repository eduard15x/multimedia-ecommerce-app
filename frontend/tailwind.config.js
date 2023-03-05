/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '990px',
        '2xl': '1450px',
        '3xl': '1700px'
      },
    },
  },
  plugins: [],
}
