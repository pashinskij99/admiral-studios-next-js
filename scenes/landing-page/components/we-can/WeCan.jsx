/** @format */

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

import Button from '../../../../components/button/Button'
import yellowLine from '../../../../images/landing/we-can/yellow-line-we-can.svg'

import styles from './WeCan.module.scss'

const weCanData = [
  {
    title: 'Design',
    description: [
      'Our professional team of designers will take care of Your website’s user experience!',
      'If You have any edits on our work during the process - no problem, we will try our best to fulfill Your desires!',
    ],
    buttonText: 'Contact Us',
  },
  {
    title: 'Development',
    description: [
      'What websites need the most? Traffic! And high-loading speed without bugs is Your guarantee in this case',
      'Our professional team of full-stack developers can create magnificent, fast-loading websites in a matter of days!',
    ],
    buttonText: 'Apply',
  },
  {
    title: 'Seo',
    description: [
      'The best website is the SEO-optimised website! Who doesn’t want to bring clients directly from the browser almost for Free?',
      'Just a couple of tweaks on Your website - and Your traffic can blow up 50%!',
    ],
    buttonText: 'Boost SEO',
  },
  {
    title: 'Hosting',
    description: [
      'Tired of waiting for Your website to load? Switch to our hosting, and let us take care of loading speed for Your website!',
      'The best part of all of this - if You choose our hosting, You don’t need to worry about managing it! We do all the needed work for Free!',
    ],
    buttonText: 'Host my website',
  },
  {
    title: 'Other',
    description: ['Whatever else you are looking for - we are ready to discuss!'],
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
    }),
  )
  const [stage, setStage] = useState(0)

  const descriptionRef = useRef()

  const handleChangeActive = (item, index) => {
    setStage(index)
    gsap.to(descriptionRef.current, { duration: 0.2, transformOrigin: '50% 50%', scale: 0 })
    setTimeout(() => {
      setData(
        data.map((el) => {
          return {
            ...el,
            active: item.title === el.title,
          }
        }),
      )
      gsap.to(descriptionRef.current, { duration: 0.2, transformOrigin: '50% 50%', scale: 1 })
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
        <h6 className='text-3 text-weight-bold text-color-black'>We can help you with</h6>
        <div className={styles['we-can-content']}>
          <ul className={styles['we-can-content-list']}>
            {data.map((item, index) => (
              <li
                onClick={() => handleChangeActive(item, index)}
                key={index}
                className={`${styles['we-can-content-list-item']} ${
                  item.active && styles['we-can-content-list-item-active']
                } title-1 text-weight-bold text-color-black`}>
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
                        <div key={index} className={styles['we-can-content-description-text']}>
                          <span className='text-1 text-weight-regular text-color-silver'>{`0${
                            index + 1
                          }`}</span>
                          <p className='headline-3 text-weight-regular text-color-black'>{text}</p>
                        </div>
                      ))}
                      <Link href='/contact'>
                        <Button>{item.buttonText}</Button>
                      </Link>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeCan
