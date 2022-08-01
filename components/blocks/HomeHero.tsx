import React from 'react'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

const HomeHero: React.FC = () => {
  return (
    <section className="bg-ddl_brand">
      <div className="flex items-center h-screen ddl-container">
        <h1 className="sr-only">
          We are a humble boutique web design studio, led by a group of young people with design and development background.
        </h1>
        <div className="-mb-28">
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            We are a humble boutique
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            web design studio, led by a group
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            of young people with design and
          </span>
          <span className="block main-title text-ddl_brand_light" aria-hidden>
            development background.
          </span>
        </div>
      </div>
      <ScrollArrow className="w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-32 transform translate-x-1/2" />
    </section>
  )
}

export default HomeHero
