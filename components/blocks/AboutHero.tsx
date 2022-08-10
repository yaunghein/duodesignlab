import React from 'react'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCursorStore from '$stores/CursorStore'

const p = [
  'Duo Design Lab is a multi-disciplinary, independently owned design studio.',
  'Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations, websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion. Our 23 partners are all practicing designers, and whether working collaboratively or independently, they do so in friendship.',
  'Our structure is unique. We are the only major design studio where the owners of the business are the creators of the work and serve as the primary contact for every client. This reflects our conviction that great design cannot happen without passion, intelligence and — above all — personal commitment, and is demonstrated by a portfolio that spans five decades, many industries, and clients of every size.',
]

const AboutHero: React.FC = () => {
  const { changeCursorType, resetCursorType } = useCursorStore()
  return (
    <motion.section className="bg-ddl_brand" onMouseEnter={() => changeCursorType('normal_brand_light')} onMouseLeave={resetCursorType}>
      <div className="grid grid-cols-1 pb-10 pt-44 md:pt-64 ddl-container lg:grid-cols-2 lg:pb-28">
        <div>
          <motion.h1
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            className="text-big-visual md:main-title text-ddl_brand_light"
          >
            <span className="block">About</span> Duo Design Lab
          </motion.h1>
        </div>
        <div className="grid gap-5 mt-8 lg:gap-12 lg:mt-0">
          {p.map((text, i) => (
            <motion.p
              key={i}
              className="font-normal text-body text-ddl_brand_light"
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: i * 0.05 } }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AboutHero
