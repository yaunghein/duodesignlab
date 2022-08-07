import React from 'react'
import { useRouter } from 'next/router'

// stores
import useCapabilityStore from '$stores/CapabilityStore'

// utils
import cn from '$utils/cn'

const Footer: React.FC = () => {
  const router = useRouter()
  const { currentCapability } = useCapabilityStore((state) => state)

  const isBgDark = router.pathname === '/capabilities' && !currentCapability

  return (
    <footer className={cn('flex h-28 lg:h-24 mt-auto', isBgDark ? 'bg-ddl_brand' : 'bg-ddl_brand_light')}>
      <div className="flex flex-col items-center justify-center w-full lg:flex-row ddl-container">
        <div className="flex items-center gap-12 md:gap-20">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className={cn('font-normal text-sm md:text-link-size', isBgDark ? 'text-ddl_offwhite' : 'text-ddl_dark')}
          >
            Facebook
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className={cn('font-normal text-sm md:text-link-size', isBgDark ? 'text-ddl_offwhite' : 'text-ddl_dark')}
          >
            Instagram
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
            className={cn('font-normal text-sm md:text-link-size', isBgDark ? 'text-ddl_offwhite' : 'text-ddl_dark')}
          >
            LinkedIn
          </a>
        </div>
        <span
          className={cn('lg:ml-auto mt-5 lg:mt-0 font-normal text-sm md:text-link-size', isBgDark ? 'text-ddl_offwhite' : 'text-ddl_dark')}
        >
          @{new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
