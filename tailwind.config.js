/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      sans: ['Roboto','sans-serif'],

    },
    fontSize:{
      base: '18px'
    },
    extend: {
      colors:{
        'orange': '#FEB302',
        'orange-500': 'rgba(254, 179, 2, 0.45)',
        'orange-600': ' rgba(254, 179, 2, 0.75)',
        'grey': 'rgba(0, 0, 0, 0.35)',
        'grey-800': '#444444',
        'grey-600': '#606060'
      }
    },
  },
  plugins: [],
}
