import '@fontsource/muli'
import 'animate.css'

import '../styles/globals.css'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enLocale from '../locales/en.json'
import frLocale from '../locales/fr.json'

function App({ Component, pageProps }) {
  // i18n

  // Check locale in URL
  let {
    locale,
  } = pageProps

  if (locale === undefined) {
    // Check locale from browser config
    if (typeof window !== 'undefined') {
      navigator.languages.forEach(language => {
        const [
          browserLocale,
        ] = language.split('-')

        if (process.env.locales.includes(browserLocale.toLowerCase())) {
          locale = browserLocale.toLowerCase()
          return
        }
      })
    }

    // Set default if locale is still unknown
    if (locale === undefined) {
      locale = process.env.defaultLocale
    }
  }

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: {
          translation: enLocale
        },
        fr: {
          translation: frLocale
        },
      },
      lng: locale,
      fallbackLng: process.env.defaultLocale,

      interpolation: {
        escapeValue: false,
      },
    });

  if (typeof window !== 'undefined') {
    // Dark mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
  }

  return (
    <Component {...pageProps} />
  )
}

export default App
