import React from 'react'
import Head from 'next/head'
import { withTranslation } from 'react-i18next'

const Index = ({
  i18n,
}) => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta httpEquiv="refresh" content={`0;url=/${i18n.language}/`} />
    </Head>
  )
}

export default withTranslation()(Index)
