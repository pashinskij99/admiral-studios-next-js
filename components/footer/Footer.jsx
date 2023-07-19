import Image from 'next/image'
// @ts-ignore
// import facebookIcon from '../../images/icons/facebook.svg'
// @ts-ignore
// import facebookDarkIcon from '../../images/icons/facebookDark.svg'
// @ts-ignore
import linkedInIcon from '../../images/icons/linked-in.svg'
// @ts-ignore
import linkedInDarkIcon from '../../images/icons/linked-inDark.svg'
// @ts-ignore
// import twitterIcon from '../../images/icons/twitter.svg'
// @ts-ignore
// import twitterDarkIcon from '../../images/icons/twitterDark.svg'
// @ts-ignore
import instagramIcon from '../../images/icons/instagram.svg'
// @ts-ignore
import instagramDarkIcon from '../../images/icons/instagram-dark.svg'
import Wave from '../wave/Wave'

import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = ({ isWhite = false }) => {
  return (
    <footer
      className={`${styles.footer} ${
        isWhite ? 'bg-color-white' : 'bg-color-blue'
      }`}
    >
      <div className={styles['footer-wave']}>
        <Wave
          fill={`${isWhite ? '#FFF' : '#006CFF'}`}
          paused={false}
          height={90}
          amplitude={30}
          speed={0.15}
          points={3}
        />
      </div>
      <div className='container'>
        <p
          className={`${styles['footer-text']} text-1 text-weight-regular ${
            isWhite ? 'text-color-black' : 'text-color-white'
          }`}
        >
          Let’s have a talk about your future
        </p>
        <Link
          className={`${styles['footer-contact_link']} ${
            isWhite ? 'link-underline-black' : ''
          } link-underline big-title-1 text-weight-extra_bold ${
            isWhite ? 'text-color-black' : 'text-color-white'
          }`}
          href='/contact'
        >
          Let’s Chat
        </Link>
        <div className={styles['footer-bot']}>
          <div className={styles['footer-bot-left']}>
            <a
              className={`${
                isWhite ? 'link-underline-black' : ''
              } link-underline text-email text-2 text-weight-bold ${
                isWhite ? 'text-color-black' : 'text-color-white'
              }`}
              href='mailto:admiralstudios777@gmail.com'
            >
              admiralstudios777@gmail.com
            </a>
          </div>
          <div className={styles['footer-bot-right']}>
            <p
              className={`${
                isWhite ? 'link-underline-black' : ''
              } link-underline text-2 text-weight-bold ${
                isWhite ? 'text-color-black' : 'text-color-white'
              }`}
            >
              Kyiv, Ukraine
            </p>
            <div className={styles['footer-bot-right-links']}>
              {/* <a target='_blank' href='https://www.facebook.com/Admiral.Studios/' rel='noreferrer'>
                <Image
                  src={isWhite ? facebookDarkIcon : facebookIcon}
                  alt='Admiral Studios Facebook icon'
                />
              </a> */}
              <a
                target='_blank'
                href={`${
                  isWhite
                    ? 'https://www.instagram.com/admiral_studios/?hl=en'
                    : 'https://www.instagram.com/admiral_studios/'
                }`}
                className={styles['footer-inst']}
                rel='noreferrer'
              >
                <Image
                  src={isWhite ? instagramDarkIcon : instagramIcon}
                  alt='Admiral Studios Instagram icon'
                  width={24}
                  height={24}
                />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/company/admiralstudios/'
                rel='noreferrer'
              >
                <Image
                  src={isWhite ? linkedInDarkIcon : linkedInIcon}
                  alt='Admiral Studios Linkedin icon'
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
