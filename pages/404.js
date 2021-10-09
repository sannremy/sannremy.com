import Head from 'next/head'
import Link from 'next/link'
import { withTranslation } from 'react-i18next'

const Custom404 = ({
  t,
}) => {
  return (
    <div className="mx-auto container h-screen flex flex-col items-center justify-center">
      <Head>
        <title>404.</title>
      </Head>
      Hmm, looks like a 404.
      <Link href="/en/">
        <a className="text-gray-500 underline hover:no-underline">sannremy.com</a>
      </Link>
    </div>
  )
}

export default withTranslation()(Custom404)
