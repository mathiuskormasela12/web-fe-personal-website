// ========== Auth Reducer
// import all types
import { type Reducer } from '@reduxjs/toolkit'
import { type IAuthStates, type IAuthActionTypes } from './auth.reducer.types'

const initialStates: IAuthStates = {
  accessToken: '',
  refreshToken: ''
}

const authReducer: Reducer<IAuthStates, IAuthActionTypes> = (states = initialStates, action) => {
  switch (action.type) {
    case 'SET_TOKEN' : {
      return {
        ...states,
        accessToken: action.payload.data?.accessToken ?? '',
        refreshToken: action.payload.data?.refreshToken ?? ''
      }
    }

    default : {
      return {
        ...states
      }
    }
  }
}

export default authReducer
