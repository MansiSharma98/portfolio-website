/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        violet: 'rgb(var(--color-violet) / <alpha-value>)',  // #58355E — primary
        tgreen: 'rgb(var(--color-tgreen) / <alpha-value>)',  // #C4D6B0 — accent
      },
    },
  },
  plugins: [],
}
