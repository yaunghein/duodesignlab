import React from 'react'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

interface Props {
  title: string
}

const Hero: React.FC<Props> = ({ title }) => {
  const goToNextSection = () => {
    if (document) {
      document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="bg-ddl_brand">
      <div className="flex items-center justify-center h-[55vh] md:h-screen ddl-container">
        <h1 className="-mb-12 text-big-visual text-ddl_brand_light md:mb-0">{title}</h1>
      </div>
      <button onClick={goToNextSection}>
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-1/2 transform translate-x-1/2" />
      </button>
    </section>
  )
}

export default Hero
