import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [ref, animation, variants] = useFadeUp()
  const { changeCapability } = useCapabilityStore()
  const { changeCursorType } = useCursorStore()

  const handleClick = (type: CapabilityTypes) => changeCapability(type)

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
      className="relative flex flex-col px-4 py-5 lg:flex-row md:px-12 md:py-12 bg-ddl_brand"
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={() => changeCursorType('normal_brand')}
    >
      <div className="relative flex-1">
        <h3 className="font-normal text-body text-ddl_offwhite whitespace-nowrap">{title}</h3>
      </div>
      <div className="relative flex-1 my-12 lg:my-0">
        <p className="font-normal text-body text-ddl_offwhite lg:max-w-[26rem]">{description}</p>
      </div>
      <div className="relative flex items-start flex-1 xs:justify-center lg:justify-end">
        <Link href="/capabilities">
          <motion.a
            aria-label={`learn more about ${title}`}
            className="text-body text-ddl_offwhite font-normal px-16 sm:px-[4.5rem] py-2 sm:py-3 border-2 border-ddl_offwhite rounded-full"
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
