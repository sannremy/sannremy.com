import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.UA}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []
              function gtag() {
                dataLayer.push(arguments)
              }
            `
          }} />
        </body>
      </Html>
    )
  }
}

export default AppDocument
