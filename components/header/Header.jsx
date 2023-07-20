import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import Button from '../button/Button'

import logoAdmiral from '../../images/header/logo_admiral.webp'
import logoAdmiralDark from '../../images/header/logo_dark.svg'

import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = ({ isWhite = false, isShowContactUs, bgColor, isShowBlog }) => {
  const [isScrolling, setIsScrolling] = useState(false)

  let timer

  const handleScroll = () => {
    clearTimeout(timer)
    setIsScrolling(true)
    timer = setTimeout(() => {
      setIsScrolling(false)
    }, 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [])

  return (
    <header
      className={cn(
        styles.header,
        {
          [styles['header--active']]: isScrolling,
        },
        `bg-color-${bgColor}`
      )}
    >
      <nav className={styles['header-nav']}>
        <Link href='/'>
          <div className={styles['header-logo']}>
            <Image
              src={isWhite ? logoAdmiralDark : logoAdmiral}
              alt='Admiral Studios logo'
              priority
              width={88}
              height={56}
            />
            <span
              className={`${
                styles['header-logo-text']
              } text-1 text-weight-bold ${
                isWhite ? 'text-color-black-blue' : 'text-color-white'
              }`}
            >
              {' '}
              Admiral Studios{' '}
            </span>
          </div>
        </Link>
        <div className={styles['header-wrapper']}>
          <Link
            href='/blog'
            className={`${styles['header-blog-text']} ${
              isWhite ? 'link-underline-black' : ''
            } ${
              !isShowBlog ? 'link-underline-active' : ''
            } link-underline link-underline-blog ${
              isWhite ? 'text-color-black' : 'text-color-white'
            }`}
          >
            Blog
          </Link>
          {isShowContactUs && (
            <Link href='/contact'>
              <Button>Contact Us</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
