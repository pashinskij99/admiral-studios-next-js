import { RunWords } from '../../../../components'

import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={styles['about-us']}>
      <div className={`${styles['about-us-title']} title-1 text-weight-extra_bold text-color-black`}>
        <RunWords
          words={['Stay tuned for the latest news. Stay tuned for the latest news.', 'Stay tuned for the latest news. Stay tuned for the latest news.']}
          speedAnimation={20}
          wordPadding={0}
        />
      </div>
      <div className='container'>
        <div className={styles['about-us-content']}>
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 691.36 15.98' enableBackground='new 0 0 691.36 15.98' xmlSpace='preserve'>
            <path fill='none' stroke='#151C26' strokeWidth='1.25' d='M 0.27 7 c 3.5 1.606 8.73 0 17.73 0 c 7.73 0 18 0 31 0 c 13 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 h 0.09 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 27 0'/>
          </svg>
          <div className={styles['about-us-content-head']}>
            <p className='text-3 text-weight-extra_bold text-color-black'>We are Admiral Studios</p>
            <p className='text-3 text-weight-extra_bold text-color-black'>09.01.2022</p>
          </div>
          <div className={styles['about-us-content-text']}>
            <p className='text-1 text-weight-extra_bold text-color-black'>We are a team that can do any job related to Your website! Design, development, hosting, SEO, after-completion maintenance and so much more! Make sure to tell us what You need!</p>
            <p className='text-1 text-weight-extra_bold text-color-black'>If You want Your personal website to be made - You are at the right place. Everything from design and front-end to complicated structure of back-end. We designed and released every type of website You can think of - eCommerce, Business, Blog, Entertainment, Nonprofit, Brochure, Media and Educational.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs