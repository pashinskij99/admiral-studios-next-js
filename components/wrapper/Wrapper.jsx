import dynamic from 'next/dynamic'
import {
  MetaTags,
  Toast,
  // Header
} from '../index'

const DynamicFooter = dynamic(
  () => import('../index').then((data) => data.Footer),
  {
    ssr: false,
  }
)

const DynamicHeader = dynamic(() =>
  import('../index').then((data) => data.Header)
)

const Wrapper = ({
  title,
  children,
  isShowFooter = true,
  isHeaderWhite = true,
  isFooterWhite = false,
  bgColor = '#5615E1',
  textColor = '#fff',
  isShowContactUs = true,
  isShowBlog = true,
  canonical,
  description,
}) => {
  return (
    <>
      <MetaTags
        title={title}
        canonical={canonical}
        description={description}
        keywords='web design, web development, seo, hosting, testing, website development, order website, front-end, back-end, project management'
      />
      <Toast />
      <DynamicHeader
        isWhite={isHeaderWhite}
        bgColor={bgColor}
        textColor={textColor}
        isShowContactUs={isShowContactUs}
        isShowBlog={isShowBlog}
      />
      {/* <Header
        isWhite={isHeaderWhite}
        bgColor={bgColor}
        textColor={textColor}
        isShowContactUs={isShowContactUs}
        isShowBlog={isShowBlog}
      /> */}
      <main>
        <div>{children}</div>
      </main>
      {isShowFooter && <DynamicFooter isWhite={isFooterWhite} />}
    </>
  )
}

export default Wrapper
