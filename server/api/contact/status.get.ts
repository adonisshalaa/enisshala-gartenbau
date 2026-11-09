import { getContactConfig } from '../../utils/contact-config'

export default defineEventHandler((event) => {
  return { available: getContactConfig(event).available }
})
