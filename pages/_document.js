import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      // :O
      <Html lang={this.props.__NEXT_DATA__.props.pageProps.locale}>
        {/* 🙏 https://simpleicons.org/ for social media icons */}
        {/* 🙏 https://heroicons.dev/ for icons */}
        <Head />
        <body className="font-sans bg-white dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
