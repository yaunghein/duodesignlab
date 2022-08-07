import React from 'react'

// types
import { WorkType } from '$types/workTypes'

interface Props {
  work: WorkType
}

const WorkHero: React.FC<Props> = ({ work }) => {
  return (
    <section className="bg-white text-ddl_dark">
      <div className="grid grid-cols-1 pt-44 md:pt-64 ddl-container lg:grid-cols-2">
        <div>
          <h1 className="mb-14 text-big-visual md:main-title text-ddl_brand -mt-7 lg:mb-0">{work.name}</h1>
        </div>
        <div>
          <div className="grid gap-6 font-normal lg:gap-12 text-body" dangerouslySetInnerHTML={{ __html: work.description }} />
          <div className="hidden gap-5 mt-12 lg:grid">
            <div className="flex gap-2">
              <span className="font-medium text-body">Year:</span>
              <span className="font-medium text-body">{work.year}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-body">Scope:</span>
              <span className="font-medium text-body">{work.scope.join(', ')}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-body">Live at: </span>
              <a href={`https://${work.website}`} target="_blank" rel="noreferrer" className="font-medium underline text-body">
                {work.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHero
