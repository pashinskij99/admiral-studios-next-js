import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { Button } from '../../../../../../components'
import InputText from '../../../../../../components/form/components/input-text/InputText'
// import Loader from '../../../../../../components/loader/Loader'

import { sendFreeAudit } from '../../../../../../services/FormService'
import { validEmail } from '../../../../../../utils/regex'

import styles from './FreeAuditForm.module.scss'

const FreeAuditForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  const { push } = useRouter()

  const onSubmit = (data) => {
    const callbacks = {
      fulfilled: () => {
        window.isFormSubmitting = true
        push('/thank')
      },
      pending: (isPending) => {
        setIsLoading(isPending)
      },
    }
    sendFreeAudit(JSON.stringify(data), callbacks)
  }

  return (
    <div className={styles['free-audit-form']}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          register={register}
          placeholder={'Your name'}
          name='name'
          validateOptions={{ required: 'Name is required' }}
          error={formState.errors.name}
          isLight
        />
        <InputText
          register={register}
          placeholder={'Your email'}
          name='email'
          validateOptions={{
            required: 'Email is required',
            pattern: {
              value: validEmail,
              message: 'Please enter a valid email address',
            },
          }}
          error={formState.errors.email}
          isLight
        />
        <InputText
          register={register}
          placeholder={'Message'}
          name={'description'}
          isLight
        />
        <Button isLoading={isLoading}>Send</Button>
      </form>
    </div>
  )
}

export default FreeAuditForm
