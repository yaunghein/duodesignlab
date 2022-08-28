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
import useDDLScroll from '$hooks/useDDLScroll'

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
  const { ref, scrollTrackByElement } = useDDLScroll()

  const goToNextSection = () => {
    if (document) {
      document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      ref={ref}
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={resetCursorType}
      className="sticky top-0 transition-transform duration-300 ease-out bg-ddl_brand"
      style={{ transform: `translateY(-${scrollTrackByElement * 150}px)` }}
    >
      <Image alt="" src={useTexture()} layout="fill" />

      <div className="relative flex items-center h-[60vh] md:h-screen ddl-container" style={{ opacity: `${1 - scrollTrackByElement}` }}>
        <h1 className="sr-only">
          We are a humble boutique web design studio, led by a group of young people with design and development background.
        </h1>

        {/* for desktop */}
        <div className="hidden -mb-40 md:block" style={{ transform: `translateY(${scrollTrackByElement * 150}px)` }}>
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
        <div className="-mb-[4rem] md:hidden" style={{ transform: `translateY(${scrollTrackByElement * 150}px)` }}>
          {mobileTexts.map((text, i) => (
            <motion.span
              key={text}
              className="block xs:text-2xl main-title text-ddl_brand_light"
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
        aria-label="scroll down"
        onClick={goToNextSection}
        onMouseEnter={() => changeCursorType('hover_brand_light')}
        onMouseLeave={() => changeCursorType('normal_brand_light')}
        style={{ opacity: `${1 - scrollTrackByElement}` }}
      >
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-14 right-32 transform translate-x-1/2" />
      </motion.button>
    </motion.section>
  )
}

export default HomeHero
