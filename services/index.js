import { toast } from 'react-hot-toast'

export const getResource = async ({
  url,
  method = 'GET',
  body = null,
  headers = {
    'Content-Type': 'application/json',
  },
  callbacks,
}) => {
  try {
    callbacks.pending(true)
    const response = await fetch(url, { method, body, headers })

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }
    const data = await response.json()

    callbacks.fulfilled && callbacks.fulfilled()

    callbacks.pending(false)
    return data
  } catch (e) {
    callbacks.reject && callbacks.reject()
    callbacks.pending(false)

    toast.error('Form submit error')
  }
}
