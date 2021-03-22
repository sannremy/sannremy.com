const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
