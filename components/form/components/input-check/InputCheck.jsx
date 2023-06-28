import { v4 as uuid } from 'uuid'

import styles from './InputCheck.module.scss'

const InputCheck = ({ type, value, name, register }) => {
  const id = uuid()

  return (
    <label className={`${styles['input-check']} text-1 text-weight-bold text-color-black`} htmlFor={id}>
      <input
        {...register(name)}
        id={id}
        type={type}
        value={value}
      />
      {value}
      <span/>
    </label>
  )
}

export default InputCheck