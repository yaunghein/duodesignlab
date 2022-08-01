import React from 'react'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

interface Props {
  title: string
}

const Hero: React.FC<Props> = ({ title }) => {
  return (
    <section className="bg-ddl_brand">
      <div className="flex items-center justify-center h-screen ddl-container">
        <h1 className="text-big-visual text-ddl_brand_light">{title}</h1>
      </div>
      <ScrollArrow className="w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-1/2 transform translate-x-1/2" />
    </section>
  )
}

export default Hero
