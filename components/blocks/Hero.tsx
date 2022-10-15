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

interface Props {
  title: string
}

const Hero: React.FC<Props> = ({ title }) => {
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
      className="sticky top-0 z-10 bg-ddl_brand"
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 transition duration-300 ease-out pointer-events-none bg-opacity-60 bg-ddl_dark"
        style={{ opacity: scrollTrackByElement }}
      />

      <Image
        alt=""
        src={useTexture()}
        layout="fill"
        className="transition duration-300 ease-out transform"
        style={{ transform: `scale(${1.1 - scrollTrackByElement / 10})` }}
      />

      <div
        className="relative flex items-center justify-center h-[55vh] md:h-screen ddl-container transition duration-300 ease-out"
        style={{ transform: `scale(${1 - scrollTrackByElement / 10})` }}
      >
        <motion.h1
          className="text-center text-big-visual text-ddl_brand_light "
          initial={{ y: 64, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
        >
          {title}
        </motion.h1>
      </div>
      <motion.button
        aria-label="scroll down"
        onClick={goToNextSection}
        onMouseEnter={() => changeCursorType('hover_brand_light')}
        onMouseLeave={() => changeCursorType('normal_brand_light')}
        style={{ opacity: `${1 - scrollTrackByElement}` }}
      >
        <ScrollArrow className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand absolute bottom-16 right-1/2 transform translate-x-1/2" />
      </motion.button>
    </motion.section>
  )
}

export default Hero
