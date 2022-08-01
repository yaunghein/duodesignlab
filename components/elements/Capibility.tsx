import React from 'react'
import Link from 'next/link'

// stores
import useCapabilityStore, { CapabilityTypes } from '$stores/CapabilityStore'

interface Props {
  title: CapabilityTypes
  description: string
}

const Capibility: React.FC<Props> = ({ title, description }) => {
  const { changeCapability } = useCapabilityStore((state) => state)

  const handleClick = (type: CapabilityTypes) => changeCapability(type)

  return (
    <div className="flex p-12 bg-ddl_brand">
      <div className="flex-1">
        <h3 className="font-bold text-body text-ddl_offwhite whitespace-nowrap">{title}</h3>
      </div>
      <div className="flex-1">
        <p className="text-body text-ddl_offwhite font-normal max-w-[22rem]">{description}</p>
      </div>
      <div className="flex items-start justify-end flex-1">
        <Link href="/capabilities">
          <a
            className="text-body text-ddl_offwhite font-medium px-[4.5rem] py-3 border-2 border-ddl_offwhite rounded-full"
            onClick={() => handleClick(title)}
          >
            Learn More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Capibility
