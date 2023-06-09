// =========== Auth Reducer Types

export interface IAuthStates {
  accessToken: string
  refreshToken: string
}

export type AuthActionTypes = 'SET_TOKEN'

export interface IAuthActionTypes {
  type: AuthActionTypes
  payload: {
    data: Partial<IAuthStates>
  }
}
