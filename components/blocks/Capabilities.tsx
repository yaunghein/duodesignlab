import React from 'react'
import Link from 'next/link'

// third-parties
import { motion } from 'framer-motion'

// elements
import Capability from '$elements/Capability'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  bgColor?: 'bg-white' | 'bg-ddl_offwhite' | 'bg-ddl_brand' | 'bg-ddl_brand_light'
}

const Capibilities: React.FC<Props> = ({ bgColor = 'bg-white' }) => {
  const [ref, animation, variants] = useFadeUp()
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section
      id="next-section"
      className={`relative pt-8 md:pt-28 z-20 ${bgColor}`}
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
      onMouseEnter={() => changeCursorType('normal_brand')}
      onMouseLeave={resetCursorType}
    >
      <div className="ddl-container">
        <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex items-end">
          <h2 className="mr-auto main-title text-ddl_dark">Our Capabilities</h2>
          <Link href="/capabilities">
            <motion.a
              onMouseEnter={() => changeCursorType('hover_brand')}
              onMouseLeave={() => changeCursorType('normal_brand')}
              className="underline text-link-size text-ddl_dark whitespace-nowrap"
            >
              See All
            </motion.a>
          </Link>
        </motion.div>

        <div className="grid gap-2 mt-5 md:mt-12">
          <Capability
            title="Brand Identity"
            description="To effectively communicate your purpose and your business to your customers, a good brand identity is a must-have. We can craft you an effective brand identity based on what you stand for and what makes you unique."
          />
          <Capability
            title="Web Development"
            description="No search engine loves slow and old-fashioned websites. We’re sure you won’t either. Here in Duo Design Lab, we build fast and modern Jamstack websites which align with your business needs as well. Looking for an example? You are browsing one of the examples right now…"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Capibilities
