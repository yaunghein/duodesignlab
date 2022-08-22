import { useState, useEffect } from 'react'

// because framer-motion has a hook called useScroll (naming convension)
const useDDLScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [scrollValue, setScrollValue] = useState(0)
  const [isReachBottom, setIsReachBottom] = useState(false)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      currentScrollTop > lastScrollTop ? setScrollDirection('down') : setScrollDirection('up')
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
      setScrollValue(window.scrollY)

      const reachBottom = Math.ceil(window.scrollY) >= document.body.offsetHeight - window.innerHeight
      reachBottom ? setIsReachBottom(true) : setIsReachBottom(false)
    }

    document.addEventListener('scroll', handleScroll, false)
    return () => document.removeEventListener('scroll', handleScroll, false)
  }, [])

  return { scrollDirection, scrollValue, isReachBottom }
}

export default useDDLScroll
