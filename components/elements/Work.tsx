import React from 'react'
import Link from 'next/link'

// types
import { WorkThumbnailType } from '$types/workTypes'

// elements
import BlurImage from '$elements/BlurImage'

interface Props {
  work: WorkThumbnailType
}

const Work: React.FC<Props> = ({ work }) => {
  return (
    <Link href={`/works/${work.slug}`}>
      <a className="relative">
        <BlurImage src={work.image.path} alt={work.name} width={work.image.width} height={1305} />
        <div className="absolute inset-0 flex flex-col items-center py-8 transition-opacity opacity-0 bg-ddl_brand text-ddl_offwhite px-28 hover:opacity-100">
          <h3 className="mt-auto secondary-title">{work.name}</h3>
          <p className="mt-auto font-normal text-link-size">{work.scope.join(', ')}</p>
        </div>
      </a>
    </Link>
  )
}

export default Work
