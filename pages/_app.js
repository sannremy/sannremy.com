import '../styles.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  // Init GA
  if (typeof window !== 'undefined') {
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

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
