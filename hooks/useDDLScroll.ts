import { useState, useEffect, useRef } from 'react'

// because framer-motion has a hook called useScroll (naming convension)
const useDDLScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [scrollValue, setScrollValue] = useState(0)
  const [isReachBottom, setIsReachBottom] = useState(false)
  const [scrollTrackByElement, setScrollTrackByElement] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let lastScrollTop = 0
    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
      currentScrollTop > lastScrollTop ? setScrollDirection('down') : setScrollDirection('up')
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop

      setScrollValue(window.scrollY)

      const reachBottom = Math.ceil(window.scrollY) + 1 >= document.body.offsetHeight - window.innerHeight // +1 is needed for a little offset for some reasons
      reachBottom ? setIsReachBottom(true) : setIsReachBottom(false)

      if (ref.current) {
        const elementHeight = ref.current.clientHeight
        const track = Math.min(1, document.documentElement.scrollTop / elementHeight)
        setScrollTrackByElement(track)
      }
    }

    document.addEventListener('scroll', handleScroll, false)
    return () => document.removeEventListener('scroll', handleScroll, false)
  }, [])

  return { scrollDirection, scrollValue, isReachBottom, ref, scrollTrackByElement }
}

export default useDDLScroll
