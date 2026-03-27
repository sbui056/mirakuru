/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FFF8F0', dark: '#F5EDE3' },
        yellow: { DEFAULT: '#FFD84D', dark: '#E6C244', light: '#FFF0B3' },
        charcoal: '#2D2A26',
        'warm-gray': '#6B6560',
        'light-gray': '#E8E2DA',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
