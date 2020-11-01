import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body className="font-sans bg-white dark:bg-gray-900">
          <Main />
          <script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.UA}`} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
