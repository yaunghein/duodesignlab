import React from 'react'

// blocks
import Navigation from '$blocks/Navigation'
import Footer from '$blocks/Footer'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation />
      <ScrollArrow className="w-[3.125rem] h-[3.125rem] text-ddl_brand fixed z-50 bottom-14 right-32 transform translate-x-1/2" />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
