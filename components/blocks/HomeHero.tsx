import React from 'react'
import Image from 'next/image'

// third-parties
import { motion } from 'framer-motion'

// svgs
import ScrollArrow from '$svgs/ScrollArrow'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useTexture from '$hooks/useTexture'

const desktopTexts = [
  'We are a humble boutique',
  'web design studio, led by a group',
  'of young people with design and',
  'development background.',
]

const mobileTexts = [
  'We are a humble',
  'boutique web design',
  'studio, led by a group of',
  'young people with',
  'design and development',
  'background.',
]

const HomeHero: React.FC = () => {
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

      <div className="relative flex items-center h-[60vh] md:h-screen ddl-container">
        <h1 className="sr-only">
          We are a humble boutique web design studio, led by a group of young people with design and development background.
        </h1>

        {/* for desktop */}
        <div className="hidden -mb-40 md:block">
          {desktopTexts.map((text, i) => (
            <motion.span
              key={text}
              className="block main-title text-ddl_brand_light"
              aria-hidden
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.05 } }}
            >
              {text}
            </motion.span>
          ))}
        </div>

        {/* for mobile */}
        <div className="-mb-[5rem] md:hidden">
          {mobileTexts.map((text, i) => (
            <motion.span
              key={text}
              className="block main-title text-ddl_brand_light"
              aria-hidden
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.05 } }}
            >
              {text}
            </motion.span>
          ))}
        </div>
      </div>
      <motion.button
        onClick={goToNextSection}
        onMouseEnter={() => changeCursorType('hover_brand_light')}
        onMouseLeave={() => changeCursorType('normal_brand_light')}
      >
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-32 transform translate-x-1/2" />
      </motion.button>
    </motion.section>
  )
}

export default HomeHero
