import React from 'react'

// blocks
import Navigation from '$blocks/Navigation'
import Footer from '$blocks/Footer'

// elements
import Cursor from '$elements/Cursor'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
      <Cursor />
    </>
  )
}

export default MainLayout
