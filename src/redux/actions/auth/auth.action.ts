// =========== Auth Action
// import all types
import { type SetTokens } from './auth.action.types'

export const setTokens: SetTokens = (accessToken: string, refreshToken: string) => ({
  type: 'SET_TOKEN',
  payload: {
    data: { accessToken, refreshToken }
  }
})
