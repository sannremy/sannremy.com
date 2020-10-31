import '../styles.css'

import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import enMessages from '../locales/en.json'
import frMessages from '../locales/fr.json'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  // Init GA
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.gtag = () => {
      dataLayer.push(arguments)
    }

    const initUid = () => Math.random().toString(36).substr(2, 9)
    let uid = null

    if (window.localStorage) {
      uid = window.localStorage.getItem('uid')

      if (!uid) {
        uid = initUid()
        window.localStorage.setItem('uid', uid)
      }
    } else {
      uid = initUid()
    }

    // GA
    window.gtag('js', new Date())

    window.gtag('config', process.env.UA, {
      'anonymize_ip': true,
      'client_storage': 'none',
      'client_id': uid,
      'allow_google_signals': false,
      'allow_ad_personalization_signals': false,
    })
    // End of GA
  }

  const {
    locale,
    defaultLocale,
  } = useRouter()

  const messages = locale === 'fr' ? frMessages : enMessages

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
