import '../styles/globals.scss'
// import { useEffect } from 'react'
// import TagManager from 'react-gtm-module'
// import { Manrope } from 'next/font/google'

// const manrope = Manrope({
//   weight: ['700'],
//   display: 'swap',
//   subsets: ['latin'],
// })

const MyApp = ({ Component, pageProps }) => {
  return (
    // <>
    //   <style jsx global>{`
    //     html {
    //       font-family: ${manrope.style.fontFamily};
    //     }
    //   `}</style>
    // </>
    <Component {...pageProps} />
  )
}

export default MyApp
