// ========== Layout
// import all modules
import React from 'react'
import { Rubik } from 'next/font/google'

// Import all types
import { type IProp } from '@/types'

// import all components
import { Wrapper } from '@/components'

// Import Global Style
import { GlobalStyle } from '@/style'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Mathius Kormasela',
  description: "Mathius's Personal Website"
}

const RootLayout: React.FC<IProp> = ({ children }) => {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning={true}>
        <Wrapper>
          {children}
        </Wrapper>
        <GlobalStyle />
      </body>
    </html>
  )
}

export default RootLayout
