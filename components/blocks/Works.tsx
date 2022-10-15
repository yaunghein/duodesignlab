import React from 'react'
import Link from 'next/link'

// third-parties
import { motion } from 'framer-motion'

// types
import { WorkThumbnailType } from '$types/workTypes'

// elements
import Work from '$elements/Work'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  bgColor?: 'bg-white' | 'bg-ddl_offwhite' | 'bg-ddl_brand' | 'bg-ddl_brand_light'
  title: string
  works: WorkThumbnailType[]
}

const Works: React.FC<Props> = ({ bgColor = 'bg-white', title, works }) => {
  const [ref, animation, variants] = useFadeUp()
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section
      id="next-section"
      className={`relative py-8 md:py-28 z-20 ${bgColor}`}
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
      onMouseEnter={() => changeCursorType('normal_brand')}
      onMouseLeave={resetCursorType}
    >
      <div className="ddl-container">
        <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex items-end">
          <h2 className="mr-auto main-title text-ddl_dark">{title}</h2>
          <Link href="/works">
            <motion.a
              onMouseEnter={() => changeCursorType('hover_brand')}
              onMouseLeave={() => changeCursorType('normal_brand')}
              className="hidden underline sm:block text-link-size text-ddl_dark whitespace-nowrap"
            >
              See All
            </motion.a>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-2 md:mt-12">
          {works.map((work, i) => (
            <Work key={work.id} work={work} index={i + 1} />
          ))}
        </div>
        <Link href="/works">
          <a className="block mt-5 -ml-1 text-center underline sm:hidden text-link-size text-ddl_dark whitespace-nowrap">See All</a>
        </Link>
      </div>
    </motion.section>
  )
}

export default Works
