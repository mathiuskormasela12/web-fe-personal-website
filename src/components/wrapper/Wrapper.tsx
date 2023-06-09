'use client'
// ========== Wrapper
// import all modules
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistedStore from '@/redux/store'

// import all types
import { type IProp } from '@/types'

export const Wrapper: React.FC<IProp> = ({ children }) => {
  const { store, persistor } = persistedStore()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
