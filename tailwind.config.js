// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      customBlue:'#1F336C', // bg custom blue
      ...colors
    },
    fontFamily: {
      sans : ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
