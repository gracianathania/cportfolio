/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#3E4F25',
          dark: '#2B3719',
          light: '#536A32',
          soft: '#EAF0E1',
        },
        lavender: {
          DEFAULT: '#D6C7E8',
          dark: '#B9A1D3',
          light: '#ECE4F5',
          soft: '#F6F1FA',
        },
        cream: {
          50: '#FAF7EE',
          100: '#F4EFE0',
          200: '#E8DFC9',
          card: '#FFFFFF',
        },
        sky: {
          scallop: '#BDE0F7',
          light: '#EBF5FC',
        },
        lime: {
          highlight: '#E2F86B',
          DEFAULT: '#D4F34A',
        },
        maroon: {
          DEFAULT: '#8A2D2A',
          light: '#A83B37',
        },
        charcoal: {
          DEFAULT: '#1D2416',
          light: '#3C4533',
        }
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Playfair Display', 'Prata', 'serif'],
        display: ['Italiana', 'DM Serif Display', 'Playfair Display', 'serif'],
        script: ['Caveat', 'Reenie Beanie', 'cursive'],
        handwriting: ['Reenie Beanie', 'Caveat', 'cursive'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
