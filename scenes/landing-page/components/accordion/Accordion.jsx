import Link from 'next/link'
import { Button } from '../../../../components'

import styles from './Accordion.module.scss'

const accordionData = [
  {
    title: 'Design',
    content: [
      'Every website starts from design. If You already have a design - that’s good, we can start working right away!',
      'If You don’t - that’s not a problem, we have our design team to help You with that!',
    ],
    button: {
      name: 'Contact Us',
      link: '/contact',
    },
  },
  {
    title: 'Front-end',
    content: [
      'This may be the most crucial step - bringing Your design to life.',
      'We can guarantee quality and high-performance using the newest technologies!',
    ],
    button: {
      name: 'Apply',
      link: '/contact',
    },
  },
  {
    title: 'Back-end',
    content: [
      'Bringing Your website to CMS is also very important. You can choose any CMS You are familiar with - it’s our duty to follow Your interests.',
      'But, we created a next-generation platform with the newest technologies that exceed all expectations!',
    ],
    button: {
      name: 'Contact Us',
      link: '/contact',
    },
  },
  {
    title: 'Final Testing',
    content: [
      'Before going live, every website needs to runned by a couple of tests. First of all: loading speed, functionality and SEO-compatibility.',
      'After this we always give You an opportunity to work with it - create a couple of pages, write a couple of texts.',
    ],
    button: {
      name: 'Start testing',
      link: '/contact',
    },
  },
  {
    title: 'Hosting',
    content: [
      'The final part - hosting. Server response time is key to high-loading speed of Your website. Just imagine getting the first data from the server in 5 seconds!',
      'Every client will just quit such a website - people don’t like to wait nowadays. We can assure You that after choosing our hosting You will never face such a problem!',
    ],
    button: {
      name: 'Host my website',
      link: '/contact',
    },
  },
]

const Accordion = () => {
  return (
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
  )
}

export default Accordion
