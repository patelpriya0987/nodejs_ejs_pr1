/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html','./dist/page/*'],
  theme: {
    fontFamily: {
      'sans': ['"Monda"'],
      'serif': ['ui-serif', 'Cookie'],
      'mono': ['ui-monospace', 'Mea Culpa'],
      'body': [' font-family: "Monda", sans-serif'],
   },
    extend: {},
  },
  plugins: [],
}