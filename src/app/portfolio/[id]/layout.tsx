// ========== Layout
// import all modules
import React, { Fragment } from 'react'

// Import all types
import { type GenerateMetadata, type IProp } from '@/types'

export const generateMetadata: GenerateMetadata = () => ({
  title: 'Portfolio Detail'
})

const RootLayout: React.FC<IProp> = ({ children }) => {
  return (
   <Fragment>
    {children}
   </Fragment>
  )
}

export default RootLayout
