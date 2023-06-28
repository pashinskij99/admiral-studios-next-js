import cn from 'classnames'
import styles from './InputText.module.scss'

const InputText = ({ placeholder, name, register, validateOptions = {}, error, isLight }) => {
  return (
    <div className={styles['input-container']}>
      <label
        htmlFor={name}
        className={cn(styles['input-text'], { [styles['input-text--light']]: isLight })}>
        <input
          {...register(name, { ...validateOptions })}
          className='headline-3 text-weight-extra_bold text-color-black'
          id={name}
          type='text'
          placeholder={placeholder}
        />
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 691.36 15.98'
          enableBackground='new 0 0 691.36 15.98'
          xmlSpace='preserve'>
          <path
            fill='none'
            stroke='#151C26'
            strokeWidth='1.25'
            d='M 0.27 7 c 3.5 1.606 8.73 0 17.73 0 c 7.73 0 18 0 31 0 c 13 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 h 0.09 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 38.5 0 c 16 0 22.5 0 27 0'
          />
        </svg>
      </label>
      {error && <div className={`${styles['input-text__error']} text-3`}>{error.message}</div>}
    </div>
  )
}

export default InputText
