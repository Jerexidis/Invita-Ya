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
        // Primera Comunión — Dorado / Marfil / Azul marino
        comunion: {
          primary: '#8B6914',
          accent: '#C9A84C',
          light: '#FBF5E6',
          cream: '#FDFAF3',
          dark: '#1A2140',
          text: '#2C2C2C',
          gray: '#7A7A8A',
          white: '#FFFFFF',
          gold: '#D4AF37',
          softgold: '#F0D98E',
        },
        // Baby Shower / Revelación — Rosa / Azul / Neutro
        babyshower: {
          pink: '#E8B4B8',
          blue: '#AECBEB',
          primary: '#CFA781', // Warm neutral beige
          accent: '#E6D3B3',
          light: '#FDFBF7',
          cream: '#FCFAF6',
          dark: '#4A4238',
          text: '#332E27',
          gray: '#8C857E',
        },
        // Fiesta Infantil — Colores vivos y divertidos
        infantil: {
          primary: '#FF9F1C', // Bright orange
          accent: '#2EC4B6', // Bright teal
          light: '#FDFFFC', // White
          cream: '#FFF9EB', // Light yellow
          dark: '#011627', // Dark navy
          text: '#2D3142',
          gray: '#9095A5',
          fun: '#E71D36', // Bright red
        },
      },
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        vibes: ["'Great Vibes'", 'cursive'],
        playfair: ["'Playfair Display'", 'serif'],
        serif: ["'Georgia'", "'Times New Roman'", 'serif'],
      },
    },
  },
  plugins: [],
}