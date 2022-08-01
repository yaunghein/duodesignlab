import React from 'react'

const AboutHero: React.FC = () => {
  return (
    <section className="bg-ddl_brand">
      <div className="flex pt-64 ddl-container pb-28">
        <div className="w-1/2">
          <h1 className="main-title text-ddl_brand_light">
            <span className="block">About</span> Duo Design Lab
          </h1>
        </div>
        <div className="grid w-1/2 gap-12">
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
