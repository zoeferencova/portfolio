import React from 'react';
import { Layout } from '../components'
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color='#232c34' height={3} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
