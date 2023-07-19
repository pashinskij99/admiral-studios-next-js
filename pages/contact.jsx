import { Wrapper } from '../components'
import { ContactPage } from '../scenes/contact-page'
// import Head from 'next/head'
// import HotjarScript from '../utils/hotjarScript'

export default function Home() {
  return (
    <>
      {/* <Head>
        <HotjarScript />
      </Head> */}
      <Wrapper
        title={'Contact | Admiral Studios'}
        isShowFooter={false}
        isShowContactUs={false}
        canonical='https://admiral-studios.com/contact/'
        description={
          'Admiral Studios delivers innovative, creative, and professional SEO, website design and development services to help You achieve Your online goals.'
        }
        bgColor='white'
      >
        <ContactPage />
      </Wrapper>
    </>
  )
}
