import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { InputCheck, InputText } from '../../../../components/form/components'
import { Button } from '../../../../components'

import { sendContact } from '../../../../services/FormService'
import { validEmail } from '../../../../utils/regex'

import styles from './ContactForm.module.scss'
import { useState } from 'react'
import Loader from '../../../../components/loader/Loader'

const checkboxValues = [
  'Branding',
  'Web Design',
  'Web Development',
  'App Design',
  'HTML / CSS coding',
  'Design Concept',
  'SEO',
  'Mobile UX',
]
const radioValues = ['< 1 000', '< 5 000', '< 10 000', '> 10 000']

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  const { push } = useRouter()

  const onSubmit = (data) => {
    data.interest = data.interest.length ? data.interest.join(',') : ''

    const callbacks = {
      fulfilled: () => {
        push('/thank')
        window.isFormSubmitting = true
      },
      pending: (isPending) => {
        setIsLoading(isPending)
      },
    }
    sendContact(JSON.stringify({ ...data, budget: data.budget ? data.budget : '' }), callbacks)
  }

  return (
    <div className={styles['contact-form']}>
      <div className='container'>
        <h1 className='big-title-1 text-weight-extra_bold text-color-black'>Contact us</h1>
        <p className='headline-3 text-weight-extra_bold text-color-black'>
          Fill the form and we will be in touch shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles['contact-form-form']}>
          <div className={styles['contact-form-form-block']}>
            <InputText
              register={register}
              placeholder={'Your name'}
              name='name'
              validateOptions={{ required: 'Name is required' }}
              error={formState.errors.name}
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
            />
          </div>
          <InputText register={register} placeholder={'Short description'} name={'description'} />
          <div className={styles['contact-form-form-check']}>
            <p className='headline-3 text-weight-extra_bold text-color-black'>I am interested in</p>
            <div className={styles['contact-form-form-check-inputs']}>
              {checkboxValues.map((value) => (
                <InputCheck
                  register={register}
                  key={value}
                  type='checkbox'
                  name='interest'
                  value={value}
                />
              ))}
            </div>
          </div>
          <div className={styles['contact-form-form-check']}>
            <p className='headline-3 text-weight-extra_bold text-color-black'>Project Budget, $</p>
            <div className={styles['contact-form-form-check-inputs']}>
              {radioValues.map((value) => (
                <InputCheck
                  register={register}
                  key={value}
                  type='radio'
                  name='budget'
                  value={value}
                />
              ))}
            </div>
          </div>

          <Button isLoading={isLoading}>Send</Button>
        </form>
        <div>
          <p className='headline-3 text-weight-bold text-color-black'>Contact Us</p>
          <a
            className={`${styles['contact-form-mail-bot']} title-1 text-weight-extra_bold text-color-black link-underline link-underline-black`}
            href='mailto:admiralstudios777@gmail.com'>
            using our email
          </a>
          <p className={`${styles['contact-form-bottom-text']} text-2 text-color-black`}>
            Contact Admiral Studios today and let us help You achieve Your online goals! Our expert
            team of SEO, web design and development professionals is dedicated to creating
            innovative and creative solutions tailored to Your unique needs. Whether You&rsquo;re
            looking to build a new website, redesign an existing one, or need ongoing support and
            maintenance, we&rsquo;re here to help.{' '}
          </p>
          <p className='text-2 text-color-black'>
            We value open communication and collaboration, and we&rsquo;ll work with You every step
            of the way to ensure Your project is a success. Fill out the form on this page to
            request a consultation and take the first step towards building an exceptional website
            for Your business. Let&rsquo;s work together to make Your online presence stand out!
          </p>
        </div>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(ContactForm), { ssr: false })
