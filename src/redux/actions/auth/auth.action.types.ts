// ========== Auth Action Types
// import all types
import { type IAuthStates, type AuthActionTypes } from '@/redux/reducers/auth/auth.reducer.types'

export type SetTokens = (accessToken: string, refreshToken: string) => ({
  type: AuthActionTypes
  payload: {
    data: IAuthStates
  }
})
