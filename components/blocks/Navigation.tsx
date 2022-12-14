import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// third-parties
import { AnimatePresence, motion } from 'framer-motion'

// svgs
import LogoWhite from '$svgs/Logo'

// stores
import useCapabilityStore from '$stores/CapabilityStore'
import useMenuStore, { MenuThemeType } from '$stores/MenuStore'
import useCursorStore from '$stores/CursorStore'

// utils
import cn from '$utils/cn'

// hooks
import useDDLScroll from '$hooks/useDDLScroll'
import useWindowSize from '$hooks/useWindowSize'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Works', path: '/works' },
  { label: 'About', path: '/about' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Work With Us', path: '/work-with-us' },
]

const Navigation: React.FC = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollDirection, scrollValue, isReachBottom } = useDDLScroll()
  const { currentCapability, changeCapability } = useCapabilityStore()
  const { menuTheme, changeMenuTheme } = useMenuStore()
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { width, height } = useWindowSize()

  const isBgLight =
    (width < 1024
      ? /\/about\/.*/.test(router.pathname) || /\/works\/.*/.test(router.pathname) || router.pathname === '/capabilities'
      : !isReachBottom && (/\/about\/.*/.test(router.pathname) || /\/works\/.*/.test(router.pathname))) ||
    (currentCapability ? router.pathname === '/capabilities' && !isReachBottom : router.pathname === '/capabilities')

  const isShortNavTransitionPage = /\/about\/.*/.test(router.pathname) || /\/works\/.*/.test(router.pathname)

  const handleClick = (label: string) => label === 'Capabilities' && changeCapability(null)

  const handleMenuTheme = (currentTheme: MenuThemeType) => {
    if (currentTheme === 'ddl_brand') return changeMenuTheme('ddl_brand_light')
    if (currentTheme === 'ddl_brand_light') return changeMenuTheme('white')
    if (currentTheme === 'white') return changeMenuTheme('ddl_brand')
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  return (
    <motion.header
      onMouseEnter={() => (isBgLight ? changeCursorType('normal_brand') : changeCursorType('normal_brand_light'))}
      onMouseLeave={resetCursorType}
      style={{
        transitionProperty: 'padding, opacity',
        WebkitTransform: 'translate3d(0,0,20px)',
      }}
      className={cn(
        'fixed top-0 z-30 w-full transform duration-200 ease-out',
        scrollValue > height - 400 && scrollDirection === 'down' && !isReachBottom
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100 pointer-events-auto',
        scrollValue > (isShortNavTransitionPage ? 1 : width > 1023 ? height : 500)
          ? isReachBottom && width > 1023
            ? router.pathname === '/work-with-us'
              ? 'bg-ddl_brand bg-opacity-90 backdrop-blur-md py-4'
              : 'py-4'
            : isBgLight
            ? router.pathname === '/capabilities' && scrollDirection === 'up'
              ? 'bg-ddl_brand_light bg-opacity-70 backdrop-blur-md py-4'
              : 'bg-white bg-opacity-70 backdrop-blur-md py-4'
            : 'bg-ddl_brand bg-opacity-90 backdrop-blur-md py-4'
          : 'py-4'
      )}
    >
      <div className="flex items-center ddl-container">
        <div className="hidden mr-auto lg:items-center lg:gap-20 lg:flex">
          {navLinks.map((link, i) => (
            <Link href={link.path} key={link.label}>
              <motion.a
                initial={{ y: -32, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.4, delay: i * 0.05 } }}
                className={cn(
                  'uppercase text-link-size py-2 cursor-pointer',
                  isBgLight ? 'text-ddl_brand' : 'text-ddl_offwhite',
                  router.pathname === link.path ? 'font-bold' : 'font-normal'
                )}
                onClick={() => handleClick(link.label)}
                onMouseEnter={() => (isBgLight ? changeCursorType('hover_brand') : changeCursorType('hover_brand_light'))}
                onMouseLeave={() => (isBgLight ? changeCursorType('normal_brand') : changeCursorType('normal_brand_light'))}
              >
                {link.label}
              </motion.a>
            </Link>
          ))}
        </div>
        <Link href="/">
          <motion.a
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.25 } }}
            onMouseEnter={() => (isBgLight ? changeCursorType('hover_brand') : changeCursorType('hover_brand_light'))}
            onMouseLeave={() => (isBgLight ? changeCursorType('normal_brand') : changeCursorType('normal_brand_light'))}
          >
            <LogoWhite
              className={cn(
                'w-[2.8rem] h-[2.925rem] md:w-[5.2rem] md:h-[5.2rem] relative z-10 transition cursor-pointer',
                isMenuOpen
                  ? menuTheme === 'ddl_brand'
                    ? 'text-ddl_brand_light'
                    : 'text-ddl_brand'
                  : isBgLight
                  ? 'text-ddl_brand'
                  : 'text-ddl_brand_light'
              )}
            />
          </motion.a>
        </Link>

        {/* mobile menu */}
        <motion.button
          aria-label="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
          className={cn(
            'ml-auto lg:hidden text-link-size relative z-10 transition',
            isMenuOpen
              ? menuTheme === 'ddl_brand'
                ? 'text-ddl_brand_light'
                : 'text-ddl_brand'
              : isBgLight
              ? 'text-ddl_brand'
              : 'text-ddl_brand_light'
          )}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            isMenuOpen && handleMenuTheme(menuTheme)
          }}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </motion.button>
        <AnimatePresence>
          {isMenuOpen && (
            <div className="fixed inset-0 flex flex-col items-start h-screen py-8 ddl-container">
              <div className="absolute inset-0">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%', transition: { duration: 0.3 } }}
                  exit={{ width: '0%', transition: { duration: 0.3, delay: 0.4 } }}
                  className={cn('absolute left-0 top-0 w-full h-[50.2%]', `bg-${menuTheme}`)}
                ></motion.div>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%', transition: { duration: 0.3 } }}
                  exit={{ width: '0%', transition: { duration: 0.3, delay: 0.4 } }}
                  className={cn('absolute right-0 bottom-0 w-full h-[50.2%]', `bg-${menuTheme}`)}
                ></motion.div>
              </div>
              <div className="grid gap-8 mt-auto">
                {navLinks.slice(0, 4).map((link, i) => (
                  <Link href={link.path} key={link.label}>
                    <motion.a
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', delay: i * 0.05 } }}
                      exit={{ opacity: 0, y: -32, transition: { duration: 0.6, type: 'spring', delay: i * 0.05 } }}
                      className={cn(
                        'uppercase text-link-size relative cursor-pointer',
                        router.pathname === link.path ? 'font-bold' : 'font-normal',
                        isMenuOpen
                          ? menuTheme === 'ddl_brand'
                            ? 'text-ddl_brand_light'
                            : 'text-ddl_brand'
                          : isBgLight
                          ? 'text-ddl_brand'
                          : 'text-ddl_brand_light'
                      )}
                      onClick={() => {
                        handleClick(link.label)
                        setIsMenuOpen(!isMenuOpen)
                        handleMenuTheme(menuTheme)
                      }}
                    >
                      {link.label}
                    </motion.a>
                  </Link>
                ))}
              </div>
              <motion.div
                className={cn('relative self-center mt-auto', isReachBottom ? 'mb-6' : 'mb-[4.5rem]')}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', delay: 0.2 } }}
                exit={{ opacity: 0, y: -32, transition: { duration: 0.6, type: 'spring', delay: 0.2 } }}
              >
                <Link href="/work-with-us">
                  <a
                    className={cn(
                      'px-20 py-3 border-2 rounded-full text-link-size whitespace-nowrap transition',
                      isMenuOpen
                        ? menuTheme === 'ddl_brand'
                          ? 'text-ddl_offwhite border-ddl_offwhite'
                          : 'text-ddl_brand border-ddl_brand'
                        : isBgLight
                        ? 'text-ddl_brand border-ddl_brand'
                        : 'text-ddl_offwhite border-ddl_offwhite'
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    Work with Us
                  </a>
                </Link>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navigation
