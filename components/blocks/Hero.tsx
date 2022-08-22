import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// third-parties
import { motion } from 'framer-motion'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useTexture from '$hooks/useTexture'

interface Props {
  title: string
}

const Hero: React.FC<Props> = ({ title }) => {
  const { changeCursorType, resetCursorType } = useCursorStore()

  const goToNextSection = () => {
    if (document) {
      document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      className="relative bg-ddl_brand"
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={resetCursorType}
    >
      <Image alt="" src={useTexture()} layout="fill" />

      <div className="relative flex items-center justify-center h-[55vh] md:h-screen ddl-container">
        <motion.h1
          className="-mb-12 text-center text-big-visual text-ddl_brand_light md:mb-0"
          initial={{ y: 64, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        >
          {title}
        </motion.h1>
      </div>
      <motion.button
        onClick={goToNextSection}
        onMouseEnter={() => changeCursorType('hover_brand_light')}
        onMouseLeave={() => changeCursorType('normal_brand_light')}
      >
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-1/2 transform translate-x-1/2" />
      </motion.button>
    </motion.section>
  )
}

export default Hero
