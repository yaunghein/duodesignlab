import React from 'react'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// types
import { WorkType } from '$types/workTypes'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  work: WorkType
}

const WorkHero: React.FC<Props> = ({ work }) => {
  const { ref, animation, variants } = useFadeUp()
  const { ref: ref2, animation: animation2, variants: variants2 } = useFadeUp(1)
  const { ref: ref3, animation: animation3, variants: variants3 } = useFadeUp(2)
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section className="bg-white text-ddl_dark" onMouseEnter={() => changeCursorType('normal_brand')} onMouseLeave={resetCursorType}>
      <div className="grid grid-cols-1 pt-36 md:pt-64 ddl-container lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            className="mb-14 text-big-visual md:main-title text-ddl_brand lg:-mt-7 lg:mb-0"
          >
            {work.name}
          </motion.h1>
        </div>
        <div>
          <motion.div
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 } }}
            className="grid gap-6 font-normal lg:gap-12 text-body"
            dangerouslySetInnerHTML={{ __html: work.description }}
          />
          <div className="hidden gap-5 mt-12 lg:grid">
            <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex gap-2">
              <span className="font-medium text-body">Year:</span>
              <span className="font-medium text-body">{work.year}</span>
            </motion.div>
            <motion.div ref={ref2} animate={animation2} initial="hidden" variants={variants3} className="flex gap-2">
              <span className="font-medium text-body">Scope:</span>
              <span className="font-medium text-body">{work.scope.join(', ')}</span>
            </motion.div>
            <motion.div ref={ref3} animate={animation3} initial="hidden" variants={variants3} className="flex gap-2 pb-1">
              <span className="font-medium text-body">Live at: </span>
              <motion.a
                onMouseEnter={() => changeCursorType('hover_brand')}
                onMouseLeave={() => changeCursorType('normal_brand')}
                href={`https://${work.website}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline text-body"
              >
                {work.website}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkHero
