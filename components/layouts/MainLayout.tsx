import React from 'react'

// blocks
import Navigation from '$blocks/Navigation'
import Footer from '$blocks/Footer'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
