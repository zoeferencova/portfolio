import React from 'react';
import Head from 'next/head'
import { Layout } from '../components'

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zoe Ferencova</title>
        <meta name="description" content="Portfolio for Zoe Ferencova" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
