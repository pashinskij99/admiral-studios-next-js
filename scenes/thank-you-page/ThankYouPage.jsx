/** @format */

import Link from 'next/link'
import { useEffect } from 'react'

import { Button } from '../../components'
import Wave from '../../components/wave/Wave'

import styles from './Thank.module.scss'

const ThankYouPage = () => {
  useEffect(
    () => () => {
      window.isFormSubmitting = false
    },
    []
  )
  return (
    <div className={styles['thank']}>
      <div className={styles['thank-wave']}>
        <Wave fill='#006CFF' paused={false} height={30} amplitude={30} speed={0.15} points={3} />
      </div>
      <div className={styles['thank-main']}>
        <div className={`${styles['thank-main__container']} container`}>
          <h1 className={`${styles['thank-main__text']} title-1 text-color-white text-weight-bold`}>Thank you! We will contact soon.</h1>
          <Link href='/'>
            <Button>Go to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
