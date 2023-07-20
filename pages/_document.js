/* eslint-disable @next/next/inline-script-id */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class WebDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <Script
            strategy='worker'
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NQ5D97C');`,
            }}
          ></Script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ5D97C"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Main />
          <NextScript />
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
            integrity='sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          ></script>
        </body>
      </Html>
    )
  }
}
export default WebDocument
