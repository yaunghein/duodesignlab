import React, { SetStateAction } from 'react'

// third-parties
import { motion } from 'framer-motion'

// types
import { WorkFilterType } from '$types/workTypes'

// utils
import cn from '$utils/cn'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  label: WorkFilterType
  active: boolean
  setCurrentFilter: React.Dispatch<SetStateAction<WorkFilterType>>
}

const FilterPill: React.FC<Props> = ({ label, active, setCurrentFilter }) => {
  const { changeCursorType } = useCursorStore()
  return (
    <motion.button
      className={cn(
        'px-7 sm:px-12 py-3 border-2 rounded-full text-sm sm:text-body border-ddl_dark font-medium transition-colors whitespace-nowrap',
        active ? 'bg-ddl_dark text-ddl_offwhite' : 'text-ddl_dark'
      )}
      onClick={() => setCurrentFilter(label)}
      onMouseEnter={() => !active && changeCursorType('hover_brand')}
      onMouseLeave={() => changeCursorType('normal_brand')}
    >
      {label}
    </motion.button>
  )
}

export default FilterPill
