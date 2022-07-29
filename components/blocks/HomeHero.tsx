import React from 'react'

const HomeHero = () => {
  return (
    <section className="bg-ddl_brand">
      <div className="ddl-container h-screen flex items-center">
        <h1 className="sr-only">
          We are a humble boutique web design studio, led by a group of young people with design and development background.
        </h1>
        <div className="-mb-28">
          <span className="main-title text-ddl_brand_light" aria-hidden>
            We are a humble boutique
          </span>
          <span className="main-title text-ddl_brand_light" aria-hidden>
            web design studio, led by a group
          </span>
          <span className="main-title text-ddl_brand_light" aria-hidden>
            of young people with design and
          </span>
          <span className="main-title text-ddl_brand_light" aria-hidden>
            development background.
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
