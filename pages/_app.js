import '@fontsource/muli'
import 'animate.css'
import Head from 'next/head'

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
    <>
      <Head>
        {/* Favicons */}
        <link rel="icon" type="image/png" href="/favicon-196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16.png" sizes="16x16" />

        {/* Apple devices */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon-167.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57.png" />

        {/* Android devices */}
        <link rel="manifest" href="/manifest.json" />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon-144.png" />

        <link rel="sitemap" href="/sitemap.xml" />

        <script
          async
          defer
          data-website-id={process.env.umami.id}
          data-do-not-track="true"
          src={process.env.umami.js}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
