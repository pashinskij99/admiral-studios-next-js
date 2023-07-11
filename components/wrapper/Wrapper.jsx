import React from 'react'
import { MetaTags, Footer, Toast, Header } from '../index'

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
      <Header
        isWhite={isHeaderWhite}
        bgColor={bgColor}
        textColor={textColor}
        isShowContactUs={isShowContactUs}
        isShowBlog={isShowBlog}
      />
      <main>
        <div>{children}</div>
      </main>
      {isShowFooter && <Footer isWhite={isFooterWhite} />}
    </>
  )
}

export default Wrapper
