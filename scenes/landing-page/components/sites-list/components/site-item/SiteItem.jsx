import Image from 'next/image'
import styles from './SiteItem.module.scss'

const SiteItem = ({
  img,
  imgAlt,
  title,
  description,
  link,
  color,
  position,
  linkTitle,
  rel
}) => {
  return (
    <div
      className={`${styles['site-item']} ${styles[`site-item-${position}`]}`}
    >
      <div
        className={styles['site-item-img']}
        style={{ backgroundColor: color }}
      >
        <Image src={img} alt={imgAlt} />
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
