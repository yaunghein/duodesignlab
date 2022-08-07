import React from 'react'

const AboutHero: React.FC = () => {
  return (
    <section className="bg-ddl_brand">
      <div className="grid grid-cols-1 pb-10 pt-44 md:pt-64 ddl-container lg:grid-cols-2 lg:pb-28">
        <div>
          <h1 className="text-big-visual md:main-title text-ddl_brand_light">
            <span className="block">About</span> Duo Design Lab
          </h1>
        </div>
        <div className="grid gap-5 mt-8 lg:gap-12 lg:mt-0">
          <p className="font-normal text-body text-ddl_brand_light">
            Duo Design Lab is a multi-disciplinary, independently owned design studio.
          </p>
          <p className="font-normal text-body text-ddl_brand_light">
            Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations,
            websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion. Our 23
            partners are all practicing designers, and whether working collaboratively or independently, they do so in friendship.
          </p>
          <p className="font-normal text-body text-ddl_brand_light">
            Our structure is unique. We are the only major design studio where the owners of the business are the creators of the work and
            serve as the primary contact for every client. This reflects our conviction that great design cannot happen without passion,
            intelligence and — above all — personal commitment, and is demonstrated by a portfolio that spans five decades, many industries,
            and clients of every size.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
