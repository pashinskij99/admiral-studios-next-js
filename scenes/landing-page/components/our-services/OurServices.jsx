/** @format */

import { useRef, useState } from 'react'
import Image from 'next/image'

import styles from './OurServices.module.scss'

import designScreen from '../../../../images/landing/our-sirvices/design-screen.webp'
import devScreen from '../../../../images/landing/our-sirvices/dev-screen.webp'
import seoScreen from '../../../../images/landing/our-sirvices/seo-screen.webp'
import hostingScreen from '../../../../images/landing/our-sirvices/hosting-screen.webp'
import otherScreen from '../../../../images/landing/our-sirvices/other-screen.webp'
// import transparentImg from '../../../../images/landing/our-sirvices/transparent-img.webp'

const OurServices = () => {
  const ourServicesData = [
    {
      title: 'Web Design',
      img: designScreen,
      imgAlt: 'Web Design services image',
    },
    {
      title: 'Development',
      img: devScreen,
      imgAlt: 'Development services image',
    },
    {
      title: 'SEO',
      img: seoScreen,
      imgAlt: 'SEO services image',
    },
    {
      title: 'Hosting',
      img: hostingScreen,
      imgAlt: 'Hosting services image',
    },
    {
      title: 'Other',
      img: otherScreen,
      imgAlt: 'Other services image',
    },
  ]

  const [imgSrc, setImgSrc] = useState({
    src: designScreen,
    alt: 'Web Design services image',
  })

  const moveEl = useRef()
  let prevX = null
  let prevY = null
  let prevTime = null
  let diffTimeOut = setTimeout(() => {}, 200)

  const increasingDecreasingRange = (length, min, max) => {
    const halfLength = Math.round(length / 2)
    let sum = min
    const res = [min]

    for (let i = 1; i < halfLength; i++) {
      let step =
        i < halfLength / 2
          ? (max - min) / halfLength
          : ((max - min) / halfLength / i) * 15
      res.push((sum += step))
    }

    const reverseRes = [...res].reverse()

    if ((length / 2) % 2) {
      reverseRes.shift()
    }

    return [...res, ...reverseRes]
  }

  const test = increasingDecreasingRange(79, 0, 1)

  const clipPathBuilder = (diffX, diffY) => {
    let topDeformation = ''
    let botDeformation = ''
    let leftDeformation = ''
    let rightDeformation = ''

    for (let i = 11; i < 90; i++) {
      topDeformation = `${topDeformation}, ${i}% ${
        10.9 + diffY * test[i - 11]
      }%`
      rightDeformation = `${rightDeformation}, ${
        89.1 + diffX * test[i - 11]
      }% ${i}%`
    }

    for (let i = 89; i > 10; i--) {
      botDeformation = `${botDeformation}, ${i}% ${
        89.1 + diffY * test[i - 11]
      }%`
      leftDeformation = `${leftDeformation}, ${
        10.9 + diffX * test[i - 11]
      }% ${i}% `
    }

    return `10.9% 10.9% ${topDeformation}, 89.1% 10.9% ${rightDeformation}, 89.1% 89.1% ${botDeformation}, 10.9% 89.1% ${leftDeformation}`
  }

  return (
    <div
      onMouseEnter={() => {
        moveEl.current.style.display = 'block'
      }}
      onMouseMove={async (e) => {
        moveEl.current.style.left =
          e.clientX - moveEl.current.offsetWidth / 2 + 'px'
        moveEl.current.style.top =
          e.clientY - moveEl.current.offsetHeight / 2 + 'px'

        clearTimeout(diffTimeOut)

        const gsap = (await import('gsap')).default

        diffTimeOut = setTimeout(() => {
          gsap.to(moveEl.current, {
            duration: 0.5,
            ease: 'sine.out',
            clipPath: `polygon(${clipPathBuilder(0, 0)})`,
          })
        }, 100)

        const x = e.clientX
        const y = e.clientY
        const time = new Date().getTime()

        if (prevX !== null && prevY !== null && prevTime !== null) {
          let diffX = (x - prevX) / 2.8
          let diffY = (y - prevY) / 1.8

          const diffTime = time - prevTime

          gsap.to(moveEl.current, {
            duration: 0.4,
            ease: 'none',
            clipPath: `polygon(${clipPathBuilder(diffX, diffY)})`,
          })
        }

        prevX = x
        prevY = y
        prevTime = time
      }}
      onMouseLeave={() => {
        moveEl.current.style.display = 'none'
      }}
      className={styles['our-services']}
    >
      <div className='container'>
        <h6
          className={`${styles['our-services-title']} text-3 text-weight-bold text-color-white`}
        >
          Our Services
        </h6>
        <div className={styles['our-services-content']}>
          <div
            className={styles['our-services-content-links']}
            onMouseEnter={async () => {
              const gsap = (await import('gsap')).default

              gsap.to(moveEl.current, { opacity: 1 })
            }}
            onMouseLeave={async () => {
              const gsap = (await import('gsap')).default

              gsap.to(moveEl.current, { opacity: 0 })
            }}
          >
            <div
              ref={moveEl}
              className={styles['our-services-content-links-move']}
            >
              <Image src={imgSrc.src} alt={'test'} />
            </div>
            {ourServicesData.map((item, index) => (
              <div
                key={index}
                style={{ transition: '0.5s' }}
                onMouseEnter={() => {
                  setImgSrc({ src: item.img, alt: item.imgAlt })
                }}
                className={styles['our-services-content-links-link']}
              >
                <a className='title-1 text-weight-extra_bold text-color-white'>
                  {item.title}
                </a>
                <Image
                  className={styles['our-services-content-links-img']}
                  src={item.img}
                  alt={item.imgAlt}
                />
              </div>
            ))}
          </div>
          <p
            className={`${styles['our-services-content-text']} text-1 text-weight-bold text-color-white`}
          >
            Whether you’re in New York, Los Angeles, Syngapore, Berlin, London
            or Beijing, we’ve got a process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurServices
