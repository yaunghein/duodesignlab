import React from 'react'
import { useRouter } from 'next/router'

// third-parties
import { motion } from 'framer-motion'

// stores
import useCapabilityStore from '$stores/CapabilityStore'
import useCursorStore from '$stores/CursorStore'

// utils
import cn from '$utils/cn'

const Footer: React.FC = () => {
  const router = useRouter()
  const { currentCapability } = useCapabilityStore()
  const { changeCursorType, resetCursorType } = useCursorStore()

  const isBgDark = router.pathname === '/capabilities' && !currentCapability

  return (
    <motion.footer
      onMouseEnter={() => (isBgDark ? changeCursorType('normal_brand_light') : changeCursorType('normal_brand'))}
      onMouseLeave={resetCursorType}
      className={cn('relative flex h-28 lg:h-24 mt-auto z-20', isBgDark ? 'bg-ddl_brand' : 'bg-ddl_brand_light')}
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
    >
      <div className="flex flex-col items-center justify-center w-full lg:flex-row ddl-container">
        <div className={cn('flex items-center gap-12 md:gap-20', isBgDark ? 'text-ddl_offwhite' : 'text-ddl_brand')}>
          <motion.a
            onMouseEnter={() => (isBgDark ? changeCursorType('hover_brand_light') : changeCursorType('hover_brand'))}
            onMouseLeave={() => (isBgDark ? changeCursorType('normal_brand_light') : changeCursorType('normal_brand'))}
            href="https://www.facebook.com/duodesignlab/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-normal uppercase md:text-link-size"
          >
            Facebook
          </motion.a>
          <motion.a
            onMouseEnter={() => (isBgDark ? changeCursorType('hover_brand_light') : changeCursorType('hover_brand'))}
            onMouseLeave={() => (isBgDark ? changeCursorType('normal_brand_light') : changeCursorType('normal_brand'))}
            href="https://www.linkedin.com/company/duodesignlab/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-normal uppercase md:text-link-size"
          >
            LinkedIn
          </motion.a>
          <motion.a
            onMouseEnter={() => (isBgDark ? changeCursorType('hover_brand_light') : changeCursorType('hover_brand'))}
            onMouseLeave={() => (isBgDark ? changeCursorType('normal_brand_light') : changeCursorType('normal_brand'))}
            href="https://www.behance.net/duodesignlab"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-normal uppercase md:text-link-size"
          >
            Behance
          </motion.a>
        </div>
        <span
          className={cn(
            'lg:ml-auto mt-5 lg:mt-0 font-normal text-sm md:text-link-size uppercase',
            isBgDark ? 'text-ddl_offwhite' : 'text-ddl_brand'
          )}
        >
          @{new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </motion.footer>
  )
}

export default Footer
