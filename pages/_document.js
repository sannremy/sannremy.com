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
          <script data-goatcounter="https://src-onl.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
        </body>
      </Html>
    )
  }
}

export default AppDocument
