import Image from 'next/image'
import styles from './SiteItem.module.scss'

const SiteItem = ({
  img,
  imgMobile,
  imgAlt,
  title,
  description,
  link,
  color,
  position,
  linkTitle,
  rel,
}) => {
  return (
    <div
      className={`${styles['site-item']} ${styles[`site-item-${position}`]}`}
    >
      <div
        className={styles['site-item-img']}
        style={{ backgroundColor: color }}
      >
        <picture className={styles['picture']}>
          <source media='(min-width:600px)' srcSet={img.src} />
          <Image src={imgMobile} alt={imgAlt} />
        </picture>
      </div>
      <div className={styles['site-item-content']}>
        <h6 className='caption-1 text-weight-bold text-color-black'>{title}</h6>
        <p className='headline-2 text-weight-bold text-color-black'>
          {description}
        </p>
        <a
          className='text-3 text-weight-bold text-color-black link-arrow'
          href={link}
          rel={rel ? 'noreferrer' : undefined}
          target='_blank'
        >
          {linkTitle}
        </a>
      </div>
    </div>
  )
}

export default SiteItem
