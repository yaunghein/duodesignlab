import React, { SetStateAction } from 'react'

// types
import { WorkFilterType } from '$types/workTypes'

// utils
import cn from '$utils/cn'

interface Props {
  label: WorkFilterType
  active: boolean
  setCurrentFilter: React.Dispatch<SetStateAction<WorkFilterType>>
}

const FilterPill: React.FC<Props> = ({ label, active, setCurrentFilter }) => {
  return (
    <button
      className={cn(
        'px-12 py-3 border-2 rounded-full text-body border-ddl_dark font-medium transition-colors whitespace-nowrap',
        active ? 'bg-ddl_dark text-ddl_offwhite' : 'text-ddl_dark'
      )}
      onClick={() => setCurrentFilter(label)}
    >
      {label}
    </button>
  )
}

export default FilterPill
