import '../styles/globals.css'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
        <title>Duo Design Lab</title>
        <meta property="og:type" content="website" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="/assets/og-image.jpg" property="og:image" />
        <link href="/assets/favicon-small.svg" rel="shortcut icon" type="image/x-icon" />
        <link href="/assets/favicon-large.svg" rel="apple-touch-icon" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
