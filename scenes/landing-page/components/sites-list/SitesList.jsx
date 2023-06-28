/** @format */

import { SiteItem } from './components'
import { colors } from '../../../../styles/variables'

import styles from './SitesList.module.scss'

import macbookPro16 from '../../../../images/landing/sites-list/macbook-pro-16.webp'
import ipadPro2020 from '../../../../images/landing/sites-list/ipad-pro-2020.webp'
import ipad2020 from '../../../../images/landing/sites-list/ipad-2020.webp'
import ipadMini from '../../../../images/landing/sites-list/ipad-mini.webp'
import yellowLine from '../../../../images/landing/sites-list/sites-yellow-line.svg'
import Image from 'next/image'

const sitesListData = [
  {
    img: ipad2020,
    imgAlt: 'Game UA: Компʼютерні ігри, новини, огляди та дати виходу',
    title: 'PRODUCT DEV',
    description: 'Game UA Website',
    link: 'https://gameua.com.ua/',
    color: colors.blue,
    position: 'right',
    linkTitle: 'Game UA Website',
    rel: false
  },
  {
    img: macbookPro16,
    imgAlt: 'Mitsubishi Motors Ukraine Website on Macbook Pro 16 frame',
    title: 'WEB DEV',
    description: 'Mitsubishi Motors Ukraine Website',
    link: 'https://mitsubishi-motors.com.ua/',
    color: colors.black,
    position: 'left',
    linkTitle: 'Visit Website',
    rel: true
  },
  {
    img: ipadMini,
    imgAlt: 'Vector 8 Website on Ipad Mini frame',
    title: 'WEB DEV',
    description: 'Vector8 Website',
    link: 'https://vector8.net/',
    color: colors.yellow,
    position: 'right',
    linkTitle: 'Visit Website',
    rel: true
  },
  {
    img: ipadPro2020,
    imgAlt: 'Action Urgent Care Website on Ipad Pro 2020 frame',
    title: 'WEB DEV',
    description: 'Action Urgent Care and Kyla Websites',
    link: 'https://actionurgentcare.com/',
    color: colors.blue,
    position: 'left',
    linkTitle: 'Visit Website',
    rel: true
  }
]

const SitesList = () => {
  return (
    <div className={styles['sites-list']}>
      <Image
        className={styles['sites-list__yellow-line']}
        src={yellowLine}
        alt='Yellow decoration line'
      />
      <div className='container'>
        {sitesListData.map((item, index) => (
          <SiteItem
            key={index}
            img={item.img}
            imgAlt={item.imgAlt}
            title={item.title}
            description={item.description}
            link={item.link}
            color={item.color}
            position={item.position}
            linkTitle={item.linkTitle}
            rel={item.rel}
          />
        ))}
      </div>
    </div>
  )
}

export default SitesList
