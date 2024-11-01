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
        'light-green': '#b0ebb2',
        'medium-green': '#04ff0e',
        'dark-green': 'rgba(28,101,22,1)',
        'gray-custom1': '#7D7D7D',
        'gray-custom2': '#363636',
        'gray-custom3': '#0D0F11',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #7D7D7D 0%, #363636 50%, #0D0F11 100%)',
        'gradient-custom2': 'linear-gradient(90deg, rgba(28,101,22,1) 0%, rgba(25,195,33,1) 61%, rgba(37,255,46,1) 100%)',
      },
    },
  },
  plugins: [],
}

