// ========== Store
// import all modules
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'
import { type PersitedStore } from '@/types'

const persistedStore: PersitedStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
  })

  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}

export default persistedStore
