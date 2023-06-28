import { Wrapper } from '../components'
import { ErrorPage } from '../scenes/error-404'

const Error404Page = () => {
  return (
    <Wrapper
      title={'404 | Admiral Studios'}
      isShowFooter={false}
      description={'Admiral Studios delivers innovative, creative, and professional SEO, website design and development services to help You achieve Your online goals.'}
      canonical='https://admiral-studios.com/404/' bgColor='white'>
      <ErrorPage />
    </Wrapper>
  )
}

export default Error404Page
