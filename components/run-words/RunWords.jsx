import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'

import styles from './RunWords.module.scss'

const RunWords = ({ words, wordPadding, speedAnimation }) => {
  const runWords = useRef()

  useEffect(() => {
    setTimeout(async () => {
      const runWidth = Array.from(runWords.current.children).reduce(
        (sum, span) => {
          return (sum += span.offsetWidth)
        },
        0
      )

      const gsap = (await import('gsap')).default

      gsap.to(runWords.current, {
        duration: speedAnimation,
        x: -runWidth / 2,
        repeat: -1,
        ease: 'none',
      })
    }, 100)
  }, [])

  return (
    <div className={styles['run-words']}>
      <div ref={runWords}>
        {[...words, ...words].map((word, index) => (
          <span key={index} style={{ paddingRight: `${wordPadding}px` }}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RunWords
