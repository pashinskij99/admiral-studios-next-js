/** @format */

import { useRef, useState } from 'react'
// import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

import Button from '../../../../components/button/Button'
import yellowLine from '../../../../images/landing/we-can/yellow-line-we-can.svg'

import styles from './WeCan.module.scss'

const weCanData = [
  {
    title: 'Design',
    description: [
      'Tap into our creative web design services for a stunning and user-friendly website.',
      'Our dedicated team is all ears for your ideas and edits, offering affordable web design services that are tailored to your needs.',
    ],
    buttonText: 'Contact Us',
  },
  {
    title: 'Web Development',
    description: [
      'Leverage our full-stack web development services to build a fast and bug-free website that’s primed for traffic.',
      'With our affordable web development services, our adept team can craft a high-performance site efficiently and effectively.',
    ],
    buttonText: 'Apply',
  },
  {
    title: 'Seo',
    description: [
      "Elevate your website's performance with our top-notch SEO services, designed to drive organic traffic directly to your doorstep.",
      "Through comprehensive SEO solutions, we implement powerful strategies that can substantially increase your website's traffic and visibility.",
    ],
    buttonText: 'Boost SEO',
  },
  {
    title: 'Hosting',
    description: [
      "Experience seamless website performance with our secure and fast web hosting services, ensuring your visitors don't have to wait.",
      'Our high-performance web hosting not only guarantees speed but also comes with hassle-free management, leaving you with more time to focus on your business.',
    ],
    buttonText: 'Host my website',
  },
  {
    title: 'Other',
    description: [
      'Whatever else you are looking for - we are ready to discuss!',
    ],
    buttonText: "Let's discuss",
  },
]

const WeCan = () => {
  const [data, setData] = useState(
    weCanData.map((item, index) => {
      return {
        title: item.title,
        description: item.description,
        buttonText: item.buttonText,
        active: index === 0,
      }
    })
  )
  const [stage, setStage] = useState(0)

  const descriptionRef = useRef()

  const handleChangeActive = async (item, index) => {
    setStage(index)
    // const gsap = (await import('gsap')).default
    gsap.to(descriptionRef.current, {
      duration: 0.2,
      transformOrigin: '50% 50%',
      scale: 0,
    })
    setTimeout(() => {
      setData(
        data.map((el) => {
          return {
            ...el,
            active: item.title === el.title,
          }
        })
      )
      gsap.to(descriptionRef.current, {
        duration: 0.2,
        transformOrigin: '50% 50%',
        scale: 1,
      })
    }, 100)
  }

  return (
    <div className={styles['we-can']}>
      <Image
        className={`${styles['we-can__yellow-line']} ${
          styles[`we-can__yellow-line--stage-${stage}`]
        }`}
        src={yellowLine}
        alt='Yellow decoration line'
      />
      <div className='container'>
        <h6 className='text-3 text-weight-bold text-color-black'>
          Explore Our Diverse Range of Tailored Web Solutions
        </h6>
        <div className={styles['we-can-content']}>
          <ul className={styles['we-can-content-list']}>
            {data.map((item, index) => (
              <li
                onClick={() => handleChangeActive(item, index)}
                key={index}
                className={`${styles['we-can-content-list-item']} ${
                  item.active && styles['we-can-content-list-item-active']
                } title-1 text-weight-bold text-color-black`}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className={styles['we-can-content-description']}>
            <div ref={descriptionRef}>
              {data.map(
                (item) =>
                  item.active && (
                    <div key={item.title}>
                      {item.description.map((text, index) => (
                        <div
                          key={index}
                          className={styles['we-can-content-description-text']}
                        >
                          <span className='text-1 text-weight-regular text-color-silver'>{`0${
                            index + 1
                          }`}</span>
                          <p className='headline-3 text-weight-regular text-color-black'>
                            {text}
                          </p>
                        </div>
                      ))}
                      <Link prefetch={false} href='/contact'>
                        <Button>{item.buttonText}</Button>
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeCan
