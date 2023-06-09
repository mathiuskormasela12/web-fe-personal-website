// ========== Root Reducer
// import all modules
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import storage from '@/redux/storage'

// import all reducers
import authReducer from './auth/auth.reducer'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const authPersistConfig = {
  key: 'auth',
  storage,
  hardSet
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer)
})

export default persistReducer(rootPersistConfig, rootReducer)
