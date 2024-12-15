/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FAC16A',
        premium: '#1E3432',
        greyish: '#afafaf',
    },
    },
  },
  plugins: [],
}