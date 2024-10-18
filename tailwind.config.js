/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['Nexa', 'Arial', 'sans-serif'],
        evers: ['Evers', 'Arial', 'sans-serif'],
      },
      colors: {
        'light-color': '#c9cdd0',
        'light-color2': '#bbbbbb',
        'gray-custom1': '#7D7D7D',
        'gray-custom2': '#363636',
        'gray-custom3': '#0D0F11',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #7D7D7D 0%, #363636 50%, #0D0F11 100%)',
      },
    },
  },
  plugins: [],
}

