const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      gray: colors.slate,
      blue: colors.blue,
    },
    fontFamily: {
      'sans': [
        'Muli',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  variants: {
    extend: {
      opacity: ['dark'],
      scale: ['active'],
    },
  },
  plugins: [],
}
