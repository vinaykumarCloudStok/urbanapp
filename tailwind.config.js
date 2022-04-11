module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true
    },

    fontFamily: {
      sans: 'Poppins',
    },
    extend: {
      colors:
      {
        'bgDark': '#191919',
        'bgBlue': '#f4f7fc',
        'gradientBlueOne': '#4bd3f4',
        'gradientBlueTwo': '#62a0fa',
        'ctaBlue': '#2171a3',
        'titleBlue': '#6795fb'
      }
    },
  },
  plugins: [],
}
