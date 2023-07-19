import Image from 'next/image'
import styles from './MainPost.module.scss'
import mainPostImg from '../../../../images/landing/our-sirvices/main-post.webp'

const MainPost = (src = '') => {
  return (
    <div className={styles['mainPost']}>
      <div className={styles['mainPost-heading']}>
        <p className={styles['mainPost-heading-name']}>NEWS</p>
        <p className={styles['mainPost-heading-date']}>28.01.2021</p>
      </div>
      <Image src={mainPostImg} alt='News Post' />
      <p className={styles['mainPost-body-text']}>
        Whether you’re in New York, Los Angeles, Syngapore, Berlin, London or
        Beijing, we’ve got a process.
      </p>
    </div>
  )
}

export default MainPost
