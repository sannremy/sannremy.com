import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const ua = 'UA-179582578-1'

    const initUid = () => Math.random().toString(36).substr(2, 9)
    let uid = null

    if (typeof window !== 'undefined' && window.localStorage) {
      uid = window.localStorage.getItem('uid')

      if (!uid) {
        uid = initUid()
        window.localStorage.setItem('uid', uid)
      }
    }

    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${ua}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  dataLayer.push(arguments);
                }
                gtag('js', new Date());

                gtag('config', '${ua}', {
                  'anonymize_ip': true,
                  'client_storage': 'none',
                  'client_id': '${uid ? uid : initUid()}',
                  'allow_google_signals': false,
                  'allow_ad_personalization_signals': false,
                });
              }
            `,
          }} />
        </body>
      </Html>
    )
  }
}

export default AppDocument
