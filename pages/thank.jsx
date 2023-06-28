import dynamic from 'next/dynamic'
import { Wrapper } from '../components'
const CheckSubmitProvider = dynamic(import('../providers/CheckSubmitProvider'), { ssr: false })
import { ThankYouPage } from '../scenes/thank-you-page'

export default function Home() {
  return (
    <CheckSubmitProvider>
      <Wrapper
        title={'Thank you | Admiral Studios'}
        isShowFooter={false}
        isShowContactUs={false}
        description={'Admiral Studios delivers innovative, creative, and professional SEO, website design and development services to help You achieve Your online goals.'}
        canonical='https://admiral-studios.com/thank/'>
        <ThankYouPage />
      </Wrapper>
    </CheckSubmitProvider>
  )
}
