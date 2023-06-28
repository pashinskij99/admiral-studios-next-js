import styles from './DonateBanner.module.scss'

const DonateBanner = () => {
  return (
    <div className={styles['donation__banner']}>
      <div className={styles['donation__container']}>
        <div className={styles['donation__body']}>
          <p>DONATE TO UKRAINE&apos;S DEFENDERS</p>
        </div>
        <div className={styles['donation__link']}>
          <div className={styles['donation__button']}>
            <a href='https://war.ukraine.ua/donate/' target='_blank' rel='noreferrer'>
              MAKE A DONATION
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateBanner
