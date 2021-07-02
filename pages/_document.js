import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale}>
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
