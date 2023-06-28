import { useRouter } from 'next/router'
import React from 'react'

const CheckSubmitProvider = ({ children }) => {
  const router = useRouter()

  const Children = () => <>{children}</>

  if (!window.isFormSubmitting) {
    router.replace('/404')
    return null
  } else {
    return <Children />
  }
}

export default CheckSubmitProvider
