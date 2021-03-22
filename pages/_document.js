import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  componentDidMount() {
    if (process.env.GA_ID) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_ID}`

      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', process.env.GA_ID);
    }
  }

  render() {
    return (
      <Html lang={this.props.locale}>
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
