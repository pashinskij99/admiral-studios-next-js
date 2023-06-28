/** @format */

import Loader from '../loader/Loader'
import Wave from '../wave/Wave'
import styles from './Button.module.scss'

const Button = ({ children, onClick, isLoading }) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={isLoading}>
      {isLoading ? <Loader /> : children}
      {!isLoading && (
        <div className={styles['button-wave']}>
          <Wave fill='#006CFF' paused={false} height={120} amplitude={10} speed={0.15} points={3} />
        </div>
      )}
    </button>
  )
}

export default Button
