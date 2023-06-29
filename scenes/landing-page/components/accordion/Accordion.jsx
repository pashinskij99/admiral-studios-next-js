import Link from 'next/link'
import { Button } from '../../../../components'

import styles from './Accordion.module.scss'

const accordionData = [
  {
    title: <>Cutting-Edge <br/> Technology</>,
    content: [
      'At Admiral Studios, an expert web development company, we embrace the latest and most advanced technologies.',
      'Our team ensures that your website stays ahead of the curve, giving you a competitive edge.',
    ],
    button: {
      name: 'Contact Us',
      link: '/contact',
    },
  },
  {
    title: <>Personalized <br/> Solutions</> ,
    content: [
      'We understand that each business is unique.',
      'Our tailored web services for businesses are designed to align with your specific goals and objectives, ensuring that your online presence is impactful and effective.',
    ],
    button: {
      name: 'Reach Out to Us',
      link: '/contact',
    },
  },
  {
    title: <>Dedicated <br/> Support</>,
    content: [
      'Our commitment to your success doesn’t end with the launch of your website.',
      'Admiral Studios provides ongoing support and assistance to ensure your site performs optimally.',
    ],
    button: {
      name: 'Get in Touch',
      link: '/contact',
    },
  },
  {
    title: 'Robust Security',
    content: [
      'Security is our priority.',
      'We at Admiral Studios are dedicated to ensuring that your website is protected against threats and vulnerabilities, keeping your data and your customer’s information safe.',
    ],
    button: {
      name: 'Connect with Us',
      link: '/contact',
    },
  },
  {
    title: 'Scalable Growth',
    content: [
      'With our forward-thinking approach, Admiral Studios ensures your website can grow alongside your business.',
      'Our scalable solutions adapt to your evolving needs and aspirations.',
    ],
    button: {
      name: 'Contact Us Now',
      link: '/contact',
    },
  },
]

const Accordion = () => {
  return (
      <div className={styles.sectionWrapper}>
        <h2 className='title-3 text-weight-bold text-color-black text-center'>Why Choosing Admiral Studios for Your Web Success?</h2>
        <div className={styles.accordion}>
          {accordionData.map((item, index) => (
              <div
                  key={index}
                  className={`${styles['accordion-item']} ${
                      index === 0 && styles['accordion-item-default']
                  }`}>
                <div className={styles['accordion-item-container']}>
                  <h2
                      className={`${styles['accordion-title']} title-2 text-weight-bold text-color-white`}>
                    {item.title}
                  </h2>
                  <div className={`${styles['accordion-item-content']}`}>
                    {item.content.map((text, index) => (
                        <p className='text-2 text-weight-regular text-color-white' key={index}>
                          {text}
                        </p>
                    ))}
                    <Link href={item.button.link}>
                      <Button>{item.button.name}</Button>
                    </Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  )
}

export default Accordion
