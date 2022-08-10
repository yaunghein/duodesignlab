import React from 'react'
import Link from 'next/link'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCapabilityStore, { CapabilityTypes } from '$stores/CapabilityStore'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  title: CapabilityTypes
  description: string
}

const Capibility: React.FC<Props> = ({ title, description }) => {
  const { ref, animation, variants } = useFadeUp()
  const { changeCapability } = useCapabilityStore((state) => state)
  const { changeCursorType } = useCursorStore()

  const handleClick = (type: CapabilityTypes) => changeCapability(type)

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
      className="flex flex-col px-4 py-5 lg:flex-row md:px-12 md:py-12 bg-ddl_brand"
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={() => changeCursorType('normal_brand')}
    >
      <div className="flex-1">
        <h3 className="font-bold text-body text-ddl_offwhite whitespace-nowrap">{title}</h3>
      </div>
      <div className="flex-1 my-12 lg:my-0">
        <p className="text-body text-ddl_offwhite font-normal lg:max-w-[22rem]">{description}</p>
      </div>
      <div className="flex items-start flex-1 lg:justify-end">
        <Link href="/capabilities">
          <motion.a
            className="text-body text-ddl_offwhite font-medium px-16 sm:px-[4.5rem] py-2 sm:py-3 border-2 border-ddl_offwhite rounded-full"
            onClick={() => handleClick(title)}
            onMouseEnter={() => changeCursorType('hover_brand_light')}
            onMouseLeave={() => changeCursorType('normal_brand_light')}
          >
            Learn More
          </motion.a>
        </Link>
      </div>
    </motion.div>
  )
}

export default Capibility
