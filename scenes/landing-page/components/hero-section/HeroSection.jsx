/** @format */

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../../../../components'
import Wave from '../../../../components/wave/Wave'

import heroBack from '../../../../images/landing/hero/hero-back-new.webp'
import heroBackMobile from '../../../../images/landing/hero/hero-back-mobile.webp'

import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className='container'>
        <div className={styles['hero-container']}>
          <h1
            className={`${styles['hero-title']} title-3 text-color-white text-weight-bold`}
          >
            Let us build You a website that stands out from the competition.
            Contact us today!
          </h1>
          <Link href='/contact'>
            <Button>Contact Us</Button>
          </Link>
          <picture className={styles.picture}>
            <source media='(min-width:600px)' srcSet={heroBack.src} />
            <Image src={heroBackMobile} alt='Hero section background image' />
          </picture>
        </div>
      </div>
      <div className={styles['hero-wave']}>
        {/* <Wave
          fill='#ffffff'
          paused={false}
          height={30}
          amplitude={30}
          speed={0.15}
          points={3}
        /> */}
      </div>
    </div>
  )
}

export default HeroSection
