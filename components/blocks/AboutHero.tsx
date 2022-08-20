import React from 'react'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCursorStore from '$stores/CursorStore'

const p = [
  'We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s.',
  'As a team of young and passionate professional, we are open-minded meaning, we are not afraid to experiment different things and learn from the feedback of anyone on the team. Although we are young, we understand the importance of commitment and responsibility. As our team is working remotely, commitment is a crucial value to keep things running and get the job done.',
]

const AboutHero: React.FC = () => {
  const { changeCursorType, resetCursorType } = useCursorStore()
  return (
    <motion.section className="bg-ddl_brand" onMouseEnter={() => changeCursorType('normal_brand_light')} onMouseLeave={resetCursorType}>
      <div className="grid grid-cols-1 pb-10 pt-36 lg:pt-44 md:pt-64 ddl-container lg:grid-cols-2 lg:pb-28">
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
