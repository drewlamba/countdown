/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lubre: "'Libre Franklin', sans-serif",
        // glitch: "'Hind Siliguri', sans-serif;",
        // body: " 'Rubik Microbe', cursive"
      }
    },
  }, 
  plugins: [],
}