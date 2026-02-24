/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  '#fdf5f5',
          100: '#f9e8e8',
          200: '#f2d1d1',
          300: '#e9b5b5',
          400: '#e39c9c',
          500: '#d48080',
          600: '#bf6868',
          700: '#a05252',
          800: '#854545',
          900: '#6f3c3c',
          950: '#3c1e1e',
        },
      },
    },
  },
  plugins: [],
}