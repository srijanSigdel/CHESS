/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#121212',
      'gray': '#4b5563',
      'green': '#769656',
      'creamwhite': '#eeeed2'
    },
  },
  plugins: [],
}