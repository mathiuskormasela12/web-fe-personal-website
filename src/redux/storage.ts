// ========== Storage
// import all modules
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import { type CreateNoopStorage } from '@/types'

const createNoopStorage: CreateNoopStorage = () => ({
  async getItem () {
    return await Promise.resolve(null)
  },
  async setItem (_: unknown, value: unknown) {
    return await Promise.resolve(value)
  },
  async removeItem () {
    await Promise.resolve()
  }
})

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

export default storage
