import React, { useState, useEffect } from 'react'

// types
import { WorkThumbnailType, WorkFilterType } from '$types/workTypes'

// elements
import FilterPill from '$elements/FilterPill'
import Work from '$elements/Work'

interface Props {
  works: WorkThumbnailType[]
}

const WorksWithFilters: React.FC<Props> = ({ works }) => {
  const [currentFilter, setCurrentFilter] = useState<WorkFilterType>('All')
  const [filteredWorks, setFilteredWorks] = useState(works)

  useEffect(() => {
    if (currentFilter === 'All') {
      return setFilteredWorks(works)
    }
    const filteredWorksData = works.filter((work) => work.scope.includes(currentFilter))
    setFilteredWorks(filteredWorksData)
  }, [works, currentFilter])

  return (
    <section className="bg-white py-28">
      <div className="ddl-container">
        <div className="flex flex-wrap gap-5">
          <FilterPill label="All" active={currentFilter === 'All'} setCurrentFilter={setCurrentFilter} />
          <FilterPill label="Branding" active={currentFilter === 'Branding'} setCurrentFilter={setCurrentFilter} />
          <FilterPill label="Web Development" active={currentFilter === 'Web Development'} setCurrentFilter={setCurrentFilter} />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-12">
          {filteredWorks.map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksWithFilters
