import React, { useState, useEffect } from 'react'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// types
import { WorkThumbnailType, WorkFilterType } from '$types/workTypes'

// elements
import FilterPill from '$elements/FilterPill'
import Work from '$elements/Work'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  works: WorkThumbnailType[]
}

const WorksWithFilters: React.FC<Props> = ({ works }) => {
  const [currentFilter, setCurrentFilter] = useState<WorkFilterType>('All')
  const [filteredWorks, setFilteredWorks] = useState(works)
  const { ref, animation, variants } = useFadeUp()
  const { changeCursorType, resetCursorType } = useCursorStore()

  useEffect(() => {
    if (currentFilter === 'All') {
      return setFilteredWorks(works)
    }
    const filteredWorksData = works.filter((work) => work.scope.includes(currentFilter))
    setFilteredWorks(filteredWorksData)
  }, [works, currentFilter])

  return (
    <motion.section
      id="next-section"
      className="relative py-8 bg-white md:py-28"
      onMouseEnter={() => changeCursorType('normal_brand')}
      onMouseLeave={resetCursorType}
    >
      <div className="ddl-container">
        <motion.div
          ref={ref}
          animate={animation}
          initial="hidden"
          variants={variants}
          className="flex items-center gap-5 px-5 -mx-5 overflow-x-scroll sm:overflow-visible sm:px-0 sm:mx-0 hide-scrollbar"
        >
          <FilterPill label="All" active={currentFilter === 'All'} setCurrentFilter={setCurrentFilter} />
          <FilterPill label="Branding" active={currentFilter === 'Branding'} setCurrentFilter={setCurrentFilter} />
          <FilterPill label="Web Development" active={currentFilter === 'Web Development'} setCurrentFilter={setCurrentFilter} />
        </motion.div>
        <div className="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-2 md:mt-12">
          {filteredWorks.map((work, i) => (
            <Work key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default WorksWithFilters
