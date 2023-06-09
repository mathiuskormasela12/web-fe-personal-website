// ========== Redux Types
// import all types
import { type Store } from '@reduxjs/toolkit'
import { type Persistor } from 'redux-persist'
import { type IAuthStates } from '@/redux/reducers/auth/auth.reducer.types'

export interface IReduxStates {
  auth: IAuthStates
}

export type CreateNoopStorage = () => ({
  getItem: () => Promise<unknown>
  setItem: (_: unknown, value: unknown) => Promise<unknown>
  removeItem: () => Promise<unknown>
})

export type PersitedStore = () => ({
  store: Store
  persistor: Persistor
})
