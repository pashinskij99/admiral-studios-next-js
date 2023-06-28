import Image from 'next/image'

import shipImage from '../../images/404/ship.svg'
import lighthouseImage from '../../images/404/lighthouse.svg'

import styles from './ErrorPage.module.scss'
import Wave from '../../components/wave/Wave'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className={styles['error404']}>
      <div className={`${styles['error404__text']} container`}>
        <h1 className='text-weight-regular text-color-black-blue'>404</h1>
        <p className='headline-3 text-weight-bold '>Page not found,<br/> but You can always find more info on <Link href='/' className='link-underline link-underline-blue text-color-blue'>Admiral Studios</Link></p>
      </div>
      <div className={styles['error404__wave']}>
        <Image src={shipImage} alt='Ship image' className={styles['error404__ship']} />
        <Image
          src={lighthouseImage}
          alt='Lighthouse image'
          className={styles['error404__lighthouse']}
        />
        <Wave fill='#006CFF' paused={false} height={30} amplitude={20} speed={0.15} points={3} />
      </div>
    </div>
  )
}

export default ErrorPage
