import React from 'react'

// third-parties
import { motion, AnimatePresence } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useWindowSize from '$hooks/useWindowSize'

// types
import { WorkType } from '$types/workTypes'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  work: WorkType
  isShowMore: boolean
  setIsShowMore: React.Dispatch<React.SetStateAction<boolean>>
}

const WorkHero: React.FC<Props> = ({ work, isShowMore, setIsShowMore }) => {
  const [ref, animation, variants] = useFadeUp()
  const [ref2, animation2, variants2] = useFadeUp(1)
  const [ref3, animation3, variants3] = useFadeUp(2)
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { width } = useWindowSize()

  return (
    <motion.section className="bg-white text-ddl_dark" onMouseEnter={() => changeCursorType('normal_brand')} onMouseLeave={resetCursorType}>
      <div className="grid grid-cols-1 pt-28 md:pt-56 ddl-container lg:grid-cols-2">
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
            className="relative overflow-hidden lg:overflow-visible"
            initial={{ height: width < 1024 ? '10rem' : 'auto' }}
            animate={{ height: width < 1024 ? (isShowMore ? 'auto' : '10rem') : 'auto', transition: { duration: 0.4, type: 'spring' } }}
          >
            <motion.div
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.1 } }}
              className="grid gap-6 mb-[2px] font-normal lg:gap-12 text-body"
              dangerouslySetInnerHTML={{ __html: work.description }}
            />
            <AnimatePresence>
              {!isShowMore && width < 1024 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4 } }}
                  exit={{ opacity: 0, transition: { duration: 0.4 } }}
                  className="absolute bottom-0 w-full h-24"
                  style={{ background: 'linear-gradient(0deg, #fff, transparent)' }}
                />
              )}
            </AnimatePresence>
          </motion.div>
          {width < 1024 && (
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
              className="mt-4 font-medium text-body text-ddl_dark"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? 'Show Less' : 'Show More'}
            </motion.button>
          )}

          <div className="hidden gap-5 mt-12 lg:grid">
            <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex gap-2">
              <span className="font-medium text-body">Year:</span>
              <span className="font-medium text-body">{work.year}</span>
            </motion.div>
            <motion.div ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="flex gap-2">
              <span className="font-medium text-body">Scope:</span>
              <span className="font-medium text-body">{work.scope.join(', ')}</span>
            </motion.div>
            {work.website && (
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
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkHero
