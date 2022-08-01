import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// svgs
import LogoWhite from '$svgs/LogoWhite'

// stores
import useCapabilityStore from '$stores/CapabilityStore'

// utils
import cn from '$utils/cn'

const navLiks = [
  { label: 'Home', path: '/' },
  { label: 'Works', path: '/works' },
  { label: 'About', path: '/about' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Work With Us', path: '/work-with-us' },
]

const Navigation: React.FC = () => {
  const router = useRouter()
  const isBgLight = /\/about\/.*/.test(router.pathname) || /\/works\/.*/.test(router.pathname) || router.pathname === '/capabilities'
  const { changeCapability } = useCapabilityStore((state) => state)

  const handleClick = (path: string) => path === '/capabilities' && changeCapability(null)

  return (
    <header className="absolute z-50 w-full top-14">
      <div className="flex items-center ddl-container">
        <div className="flex items-center gap-20 mr-auto">
          {navLiks.map((link) => (
            <Link href={link.path} key={link.label}>
              <a
                className={cn(
                  'uppercase text-link-size',
                  isBgLight ? 'text-ddl_brand' : 'text-ddl_offwhite',
                  router.pathname === link.path ? 'font-bold' : 'font-normal'
                )}
                onClick={() => handleClick(link.path)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        <Link href="/">
          <a>
            <LogoWhite className={cn('w-[5.625rem] h-[5.625rem]', isBgLight ? 'text-ddl_brand' : 'text-ddl_offwhite')} />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Navigation
