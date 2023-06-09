'use client'
// ========== Style
// import all modules
import { createGlobalStyle } from 'styled-components'
import { Colors } from '@/themes'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    background-color: ${Colors.light};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.6rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2.2rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
  }
`
