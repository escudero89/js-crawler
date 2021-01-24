import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { ReactElement } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} /> // eslint-disable-line react/jsx-props-no-spreading
}

export default MyApp
