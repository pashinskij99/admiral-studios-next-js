import '../styles/globals.scss'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const MyApp =  ({ Component, pageProps }) => {

  return <Component {...pageProps} />
}

export default MyApp