module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: false,
  theme: {
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
    }
  },
  variants: {
    backgroundColor: ['hover', 'dark'],
    textColor: ['hover', 'dark'],
    borderColor: ['hover', 'dark', 'dark-hover'],
    opacity: ['hover', 'dark'],
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
