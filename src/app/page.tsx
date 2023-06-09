'use client'
// ========== Home
// import all modules
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import all types
import { type IReduxStates } from '@/types'

// import all redux actions
import { setTokens } from '@/redux/actions'

// import all components
import { Container } from '@/components'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector<IReduxStates>((states) => states.auth.accessToken)

  const handleOnClick = (): void => {
    if (accessToken === '') {
      dispatch(setTokens(Date.now().toString(), Date.now().toString()))
    } else {
      dispatch(setTokens('', ''))
    }
  }

  return (
    <Container>
      <h1>Home {process.env.NEXT_PUBLIC_API_URL}</h1>
      {accessToken !== '' && <p>There is token</p>}
      <button type='button' onClick={handleOnClick}>Set Token</button>
    </Container>
  )
}

export default Home
