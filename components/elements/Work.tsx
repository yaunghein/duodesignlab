import React from 'react'
import Link from 'next/link'

// elements
import BlurImage from '$elements/BlurImage'

interface Props {
  title: string
  scope: string
  image: string
}

const Work: React.FC<Props> = ({ title, scope, image }) => {
  return (
    <Link href="/works">
      <a className="relative">
        <BlurImage src={image} alt={title} width={1732} height={1352} />
        <div className="absolute inset-0 flex flex-col items-center py-8 transition-opacity opacity-0 bg-ddl_brand text-ddl_offwhite px-28 hover:opacity-100">
          <h3 className="mt-auto secondary-title">{title}</h3>
          <p className="mt-auto font-normal text-link-size">{scope}</p>
        </div>
      </a>
    </Link>
  )
}

export default Work
