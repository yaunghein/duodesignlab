import React from 'react'
import Image from 'next/image'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useTexture from '$hooks/useTexture'
import useDDLScroll from '$hooks/useDDLScroll'

const p = [
  'We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s.',
  'As a team of young and passionate professional, we are open-minded meaning, we are not afraid to experiment different things and learn from the feedback of anyone on the team. Although we are young, we understand the importance of commitment and responsibility.',
]

const AboutHero: React.FC = () => {
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { ref, scrollTrackByElement } = useDDLScroll()

  return (
    <motion.section
      ref={ref}
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={resetCursorType}
      className="sticky top-0 transition-transform duration-300 ease-out bg-ddl_brand"
      style={{ transform: `translateY(-${scrollTrackByElement * 150}px)` }}
    >
      <Image alt="" src={useTexture()} layout="fill" />

      <div
        className="relative grid items-center h-screen grid-cols-1 pb-10 pt-28 md:pt-64 ddl-container lg:grid-cols-2 lg:pb-28"
        style={{ opacity: `${1 - scrollTrackByElement}` }}
      >
        <div>
          <motion.h1
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            className="mt-0 lg:-mt-56 text-big-visual md:main-title text-ddl_brand_light"
          >
            <span className="sm:block">About</span> Duo Design Lab
          </motion.h1>
        </div>
        <div className="grid gap-5 lg:gap-12">
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
