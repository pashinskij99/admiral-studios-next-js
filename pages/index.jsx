import { LandingPage } from '../scenes/landing-page'
// import { Header, Wrapper } from '../components'
import DonateBanner from '../components/donate-banner/DonateBanner'
// import Head from 'next/head'
// import HotjarScript from '../utils/hotjarScript'

export default function Home() {
  return (
    <>
      {/* <Head>
        <HotjarScript />
      </Head> */}
      {/* <Wrapper
        isHeaderWhite={false}
        title={'SEO, Website Design and Development Services | Admiral Studios'}
        canonical='https://admiral-studios.com/'
        CustomHeader={Header}
        description={
          'Admiral Studios delivers innovative, creative, and professional SEO, website design and development services to help You achieve Your online goals.'
        }
        bgColor='blue'
      > */}
      <LandingPage />
      {/* </Wrapper> */}
      <DonateBanner />
    </>
  )
}
