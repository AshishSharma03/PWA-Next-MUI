import React from 'react'
import Meta from '../core/Meta'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <React.Fragment>
  <Meta/>
  <Component {...pageProps} />
  </React.Fragment>
  )
}

export default MyApp
