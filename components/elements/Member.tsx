import React from 'react'
import Link from 'next/link'

// types
import { MemberType } from '$types/memberTypes'

// elements
import BlurImage from '$elements/BlurImage'

interface Props {
  member: MemberType
}

const FoundingMember: React.FC<Props> = ({ member }) => {
  return (
    <Link href={`/about/${member.slug}`}>
      <a className="relative">
        <BlurImage src={member.image} alt={member.name} width={1296} height={1296} />
        <div className="absolute inset-0 flex flex-col items-center px-12 py-5 text-center transition-opacity opacity-0 lg:py-8 bg-ddl_brand text-ddl_offwhite lg:px-28 hover:opacity-100">
          <h3 className="mt-auto secondary-title">{member.name}</h3>
          <p className="mt-auto font-normal test-sm md:text-link-size">{member.position}</p>
        </div>
      </a>
    </Link>
  )
}

export default FoundingMember
