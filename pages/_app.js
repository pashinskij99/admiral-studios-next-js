import '../styles/globals.scss'
// import { useEffect } from 'react'
// import TagManager from 'react-gtm-module'
// import fonts from '@next/font/google'

// const manrope = fonts.Manrope({
//   weight: ['700'],
//   display: 'swap',
//   subsets: ['latin'],
// })

const MyApp = ({ Component, pageProps }) => {
  // console.log(manrope)
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
