import 'animate.css'
import '../styles/globals.css'

import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  if (typeof window !== 'undefined') {
    // Dark mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }

    // Init GA
    if (process.env.GA_ID) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`
      script.onload = function () {
        window.dataLayer = window.dataLayer || []

        function gtag() {
          dataLayer.push(arguments)
        }

        gtag('js', new Date())
        gtag('config', process.env.GA_ID)
      }

      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }

  return (
    <Component {...pageProps} />
  )
}

export default appWithTranslation(App)
