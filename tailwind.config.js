/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-green': 'hsl(75, 94%, 57%)',
        'neo-white': 'hsl(0, 0%, 100%)',
        'neo-grey': 'hsl(0, 0%, 20%)',
        'neo-dark-grey': 'hsl(0, 0%, 12%)',
        'neo-off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        'inter': 'Inter',
      },
      screens: {
        'sDt': '1024px',
      }
    },
  },
  plugins: [],
}