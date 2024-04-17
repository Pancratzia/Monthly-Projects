/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: false,
    extend: {
      fontFamily:{
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
}
