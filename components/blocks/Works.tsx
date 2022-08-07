import React from 'react'
import Link from 'next/link'

// types
import { WorkThumbnailType } from '$types/workTypes'

// elements
import Work from '$elements/Work'

interface Props {
  bgColor?: 'bg-white' | 'bg-ddl_offwhite' | 'bg-ddl_brand' | 'bg-ddl_brand_light'
  title: string
  works: WorkThumbnailType[]
}

const Works: React.FC<Props> = ({ bgColor = 'bg-white', title, works }) => {
  return (
    <section className={`py-8 md:py-28 ${bgColor}`}>
      <div className="ddl-container">
        <div className="flex items-end">
          <h2 className="mr-auto main-title text-ddl_dark">{title}</h2>
          <Link href="/works">
            <a className="hidden underline sm:block text-link-size text-ddl_dark whitespace-nowrap">See All</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-2 md:mt-12">
          {works.map((work) => (
            <Work key={work.id} work={work} />
          ))}
        </div>
        <Link href="/works">
          <a className="block mt-5 text-center underline sm:hidden text-link-size text-ddl_dark whitespace-nowrap">See All</a>
        </Link>
      </div>
    </section>
  )
}

export default Works
