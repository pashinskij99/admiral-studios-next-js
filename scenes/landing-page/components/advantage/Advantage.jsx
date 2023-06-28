import { useEffect, useRef } from 'react'
import { RunWords } from '../../../../components'

import styles from './Advantage.module.scss'

const Advantage = () => {
  return (
    <div className={styles.advantage}>
      <div className={`${styles['advantage-text']} big-title-1 text-weight-extra_bold`}>
        <RunWords
          words={['Innovative Design', 'Custom websites', 'Ecommerce Solutions']}
          wordPadding={120}
          speedAnimation={15}
        />
      </div>
    </div>
  )
}

export default Advantage