/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Landing Page — Invita-Ya brand
        invita: {
          text: '#111111',
          rosa: '#D98C7A',
          heart: '#D6527F',
          cream: '#F3EFEA',
          dark: '#1C1C1C',
          gray: '#8A8A8A',
        },
        // Boda — Verde salvia / sage
        boda: {
          primary: '#5D7C6F',
          accent: '#8FAE8B',
          light: '#EAF0E8',
          cream: '#F4F7F2',
          dark: '#2C4A3E',
          text: '#1C2B23',
          gray: '#6E7F72',
        },
        // XV Años — Lila / Lavanda
        xv: {
          primary: '#9B7DB8',
          accent: '#C4A8D8',
          light: '#F3EDF8',
          cream: '#F9F5FC',
          dark: '#3D2B52',
          text: '#2A1F35',
          gray: '#8A7F94',
        },
        // Bautizo — Azul cielo
        bautizo: {
          primary: '#5B8BA0',
          accent: '#8BB8CC',
          light: '#E8F2F7',
          cream: '#F2F8FB',
          dark: '#1E3A4F',
          text: '#1A2D3D',
          gray: '#6E8490',
        },
      },
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        vibes: ["'Great Vibes'", 'cursive'],
        serif: ["'Georgia'", "'Times New Roman'", 'serif'],
      },
    },
  },
  plugins: [],
}