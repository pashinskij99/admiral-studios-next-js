import dynamic from 'next/dynamic'
// import { FreeAuditForm } from './components'
import styles from './FreeAudit.module.scss'

const DynamicFreeAuditForm = dynamic(() =>
  import('./components/index').then((data) => data.FreeAuditForm)
)

const FreeAudit = () => {
  return (
    <div className={`${styles['free-audit']} bg-color-light-blue`}>
      <div className='container'>
        <div className={styles['free-audit__block']}>
          <div className={styles['free-audit__block__section']}>
            <h2 className='title-3 text-weight-bold text-color-white'>
              Unlock Your Success - Book a Consultation Now!
            </h2>
            <p
              className={`${styles['free-audit__description']} text-weight-bold text-2 text-color-white`}
            >
              Are you looking to boost your online presence? Admiral Studios has
              got your back! Our team is all about creating smart, snappy, and
              custom websites that really match what your business is about.
              Plus, our SEO solutions ensure your site is easy to find on search
              engines. Excited to get started? Fill in the form for a free chat
              about how we can help. Let’s team up and grow your business
              online!
            </p>
          </div>
          <div className={styles['free-audit__block__section']}>
            <DynamicFreeAuditForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeAudit
