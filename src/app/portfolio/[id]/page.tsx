'use client'
// ========== PortfolioDetail
// import all modules
import React from 'react'
import { useParams } from 'next/navigation'

const PortfolioDetail: React.FC = () => {
  const params = useParams()

  return (
    <div>
      <h1>Portfolio Detail {params.id}</h1>
    </div>
  )
}

export default PortfolioDetail
