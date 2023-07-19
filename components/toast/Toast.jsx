import Image from 'next/image'
import { Toaster, resolveValue } from 'react-hot-toast'
import cn from 'classnames'

import warningIcon from '../../images/icons/warning.svg'
import successIcon from '../../images/icons/success.svg'

import styles from './Toast.module.scss'

const Toast = () => {
  return (
    <Toaster
      position='top-center'
      toastOptions={{
        duration: 3000,
      }}
    >
      {(t) => {
        return (
          <div
            className={cn(styles['toast'], {
              [styles['toast--error']]: t.type === 'error',
              [styles['toast--success']]: t.type === 'success',
            })}
          >
            <div className={styles['toast__wrapper']}>
              <Image
                src={t.type === 'error' ? warningIcon : successIcon}
                alt='toast icon'
              />
              <div className={`${styles['toast__content']}`}>
                <p className='text-weight-bold text-1'>
                  {t.type === 'error' ? 'Error' : 'Success'}
                </p>
                <p>{resolveValue(t.message, t)}</p>
              </div>
            </div>
          </div>
        )
      }}
    </Toaster>
  )
}

export default Toast
