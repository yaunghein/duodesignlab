import React from 'react'

interface Props {
  title: string
  description: string
}

const Capibility: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex p-12 bg-ddl_brand">
      <div className="flex-1">
        <h3 className="font-bold text-body text-ddl_offwhite whitespace-nowrap">{title}</h3>
      </div>
      <div className="flex-1">
        <p className="text-body text-ddl_offwhite font-normal max-w-[22rem]">{description}</p>
      </div>
      <div className="flex items-start justify-end flex-1">
        <button className="text-body text-ddl_offwhite font-medium px-[4.5rem] py-3 border-2 border-ddl_offwhite rounded-full">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Capibility
