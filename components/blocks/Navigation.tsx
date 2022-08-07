import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// svgs
import LogoWhite from '$svgs/LogoWhite'

// stores
import useCapabilityStore from '$stores/CapabilityStore'

// utils
import cn from '$utils/cn'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Works', path: '/works' },
  { label: 'About', path: '/about' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Work With Us', path: '/work-with-us' },
]

const Navigation: React.FC = () => {
  const router = useRouter()
  const { changeCapability } = useCapabilityStore((state) => state)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isBgLight = /\/about\/.*/.test(router.pathname) || /\/works\/.*/.test(router.pathname) || router.pathname === '/capabilities'

  const handleClick = (path: string) => path === '/capabilities' && changeCapability(null)

  return (
    <header className="fixed top-0 z-50 w-full py-12 md:py-14">
      <div className="flex items-center ddl-container">
        <div className="hidden mr-auto md:items-center md:gap-20 md:flex">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.label}>
              <a
                className={cn(
                  'uppercase text-link-size py-2',
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
            <LogoWhite
              className={cn(
                'w-[2.8rem] h-[2.925rem] md:w-[5.625rem] md:h-[5.625rem] relative z-10',
                isBgLight ? (isMenuOpen ? 'text-ddl_offwhite' : 'text-ddl_brand') : 'text-ddl_offwhite'
              )}
            />
          </a>
        </Link>

        {/* mobile menu */}
        <button
          className={cn(
            'ml-auto md:hidden text-link-size relative z-10',
            isBgLight ? (isMenuOpen ? 'text-ddl_offwhite' : 'text-ddl_brand') : 'text-ddl_offwhite'
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
        {isMenuOpen && (
          <div className="fixed inset-0 flex flex-col items-start py-8 bg-ddl_brand ddl-container">
            <div className="grid gap-8 mt-auto">
              {navLinks.slice(0, 4).map((link) => (
                <Link href={link.path} key={link.label}>
                  <a
                    className={cn(
                      'uppercase text-link-size text-ddl_offwhite',
                      router.pathname === link.path ? 'font-bold' : 'font-normal'
                    )}
                    onClick={() => {
                      handleClick(link.path)
                      setIsMenuOpen(!isMenuOpen)
                    }}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
            <div className="self-center mt-auto">
              <Link href="/work-with-us">
                <a
                  className="px-20 py-3 border-2 rounded-full text-link-size text-ddl_offwhite border-ddl_offwhite whitespace-nowrap"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Work with Us
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
