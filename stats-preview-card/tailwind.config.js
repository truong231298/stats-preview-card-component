/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Verydarkblue': 'hsl(233, 47%, 7%)',
        'Darkdesaturatedblue': 'hsl(244, 38%, 16%)',
        'Softviolet': 'hsl(277, 64%, 61%)',

        'White': 'hsl(0, 0%, 100%)',
        'Slightlytransparentwhite': 'hsla(0, 0%, 100%, 0.75)',
        'Slightlytransparentwhite': 'hsla(0, 0%, 100%, 0.6)'

      }
    },
  },
  plugins: [],
}