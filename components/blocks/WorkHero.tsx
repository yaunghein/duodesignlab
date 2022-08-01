import React from 'react'

// types
import { WorkType } from '$types/workTypes'

interface Props {
  work: WorkType
}

const WorkHero: React.FC<Props> = ({ work }) => {
  return (
    <section className="bg-white text-ddl_dark">
      <div className="flex pt-64 ddl-container">
        <div className="w-1/2">
          <h1 className="main-title text-ddl_brand -mt-7">{work.name}</h1>
        </div>
        <div className="relative w-1/2">
          <div className="grid gap-12 font-normal text-body" dangerouslySetInnerHTML={{ __html: work.description }} />
          <div className="grid gap-5 mt-12">
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
