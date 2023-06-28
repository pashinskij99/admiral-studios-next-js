import { getResource } from './index'

const baseUrl = 'https://api-admiral-studios.pp.ua/'

export const sendContact = async (body, callbacks) => {
  await getResource({ url: `${baseUrl}order/`, method: 'POST', body, callbacks })
}

export const sendFreeAudit = async (body, callbacks) => {
  await getResource({ url: `${baseUrl}free-audit/`, method: 'POST', body, callbacks })
}
