/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'primary': '#F65D4E',
      'primary_hover': '#f4402f',
      'gray-L': '#444444',
      'white':'white',
      'accent': '#000000',
      'lighter': '#999999',
      'border': '#E6E6E6',
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
