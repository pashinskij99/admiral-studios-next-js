import dynamic from 'next/dynamic'
// import { RunWords } from '../../../../components'

import styles from './AboutUs.module.scss'

const DynamicRunWords = dynamic(
  () =>
    import('../../../../components/run-words/RunWords').then(
      (data) => data.default
    ),
  {
    ssr: false,
  }
)

const AboutUs = () => {
  return (
    <div className={styles['about-us']}>
      <div
        className={`${styles['about-us-title']} title-1 text-weight-extra_bold text-color-black`}
      >
        <DynamicRunWords
          words={[
            'Stay tuned for the latest news. Stay tuned for the latest news.',
            'Stay tuned for the latest news. Stay tuned for the latest news.',
          ]}
          speedAnimation={20}
          wordPadding={0}
        />
      </div>
      <div className='container'>
        <div className={styles['about-us-content']}>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            viewBox='0 0 691.36 15.98'
            enableBackground='new 0 0 691.36 15.98'
            xmlSpace='preserve'
          >
            <path
              fill='none'
              stroke='#151C26'
              strokeWidth='1.25'
              d='M 0.27 7 c 3.5 1.606 8.73 0 17.73 0 c 7.73 0 18 0 31 0 c 13 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 h 0.09 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 27 0'
            />
          </svg>
          <div className={styles['about-us-content-head']}>
            <p className='text-3 text-weight-extra_bold text-color-black'>
              We are Admiral Studios
            </p>
            <p className='text-3 text-weight-extra_bold text-color-black'>
              09.01.2022
            </p>
          </div>
          <div className={styles['about-us-content-text']}>
            <p className='text-1 text-weight-extra_bold text-color-black'>
              At Admiral Studios, we go beyond the ordinary to provide
              comprehensive solutions for your website. Our custom website
              development services are carefully crafted to align with your
              unique goals and vision. Our cutting-edge web design ensures an
              engaging and seamless user experience that leaves a lasting
              impression. In a world where standing out is vital, we boost your
              website&apos;s visibility with meticulously planned SEO
              strategies. We also offer reliable hosting to ensure that your
              site is secure and performs at its peak, along with dedicated
              maintenance services to keep it running smoothly.
            </p>
            <p className='text-1 text-weight-extra_bold text-color-black'>
              Whether you&apos;re creating a personal website or diving into a
              complex business platform, Admiral Studios has a proven track
              record in designing and releasing a diverse range of websites,
              including eCommerce, business, blogs, entertainment, nonprofits,
              brochure, media, and educational platforms. Embrace the excellence
              and innovation of Admiral Studios to give your online presence the
              edge it deserves.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
