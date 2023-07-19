import Image from 'next/image'
import styles from './BlogPage.module.scss'
import webDevImg from '../../images/landing/our-blogs/top5-blog-image.webp'
import wormImg from '../../images/landing/our-blogs/worm-shape.png'
import Criteria from './components/criteria/Criteria'

const BlogPage = () => {
  return (
    <div className={styles['blog-page']}>
      <div className={styles['blog-page-heading']}>
        <Image
          className={styles['blog-page-heading-info-img']}
          src={webDevImg}
          alt='5 Top Web Development Trends to Watch in 2023'
        />
        <div className={styles['blog-page-heading-info']}>
          <div className={styles['blog-page-heading-info-main']}>
            <div className={styles['blog-page-heading-info-main-worm']}>
              <Image src={wormImg} alt='Worm Shape' />
              <p>STUDIO NEWS</p>
            </div>
            <h1>5 Top Web Development Trends to Watch in 2023</h1>
            <p className={styles['blog-page-heading-info-main-text']}>
              The digital landscape is rapidly evolving, and web development is
              no exception. As technologies advance and user preferences shift,
              it's vital for businesses and developers to stay updated with the
              latest trends. In this post, we'll explore the top five web
              development trends we predict will dominate in 2023.
            </p>
          </div>
          <div className={styles['blog-page-heading-info-data']}>
            <div className={styles['blog-page-heading-info-data-wrapper']}>
              <p>22.01.2021</p>
              <span
                className={styles['blog-page-heading-info-data-wrapper-slash']}
              >
                /
              </span>
              <p>2 min. read</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['blog-page-body']}>
        <Criteria />
      </div>
    </div>
  )
}

export default BlogPage
