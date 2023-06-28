import { FreeAuditForm } from './components'
import styles from './FreeAudit.module.scss'

const FreeAudit = () => {
  return (
    <div className={`${styles['free-audit']} bg-color-light-blue`}>
      <div className='container'>
        <div className={styles['free-audit__block']}>
          <div className={styles['free-audit__block__section']}>
            <h2 className='title-3 text-weight-bold text-color-white'>Book a consultation</h2>
            <p
              className={`${styles['free-audit__description']} text-weight-bold text-2 text-color-white`}>
              Looking for custom web design and development services to elevate Your online
              presence? Admiral Studios can help! Our team of experts is dedicated to creating
              innovative, professional, and creative web solutions tailored to Your business needs.
              Complete the form on this page to request a free consultation and take the first step
              towards building an exceptional website for Your business. Let&apos;s work together to
              achieve Your online goals!
            </p>
          </div>
          <div className={styles['free-audit__block__section']}>
            <FreeAuditForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeAudit
