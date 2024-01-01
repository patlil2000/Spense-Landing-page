/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '98': '26rem',
        '100': '30rem',
        '104':'50rem'
      },
    },
  },
  plugins: [],
}

