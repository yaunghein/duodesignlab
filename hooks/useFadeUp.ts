import { useRef, useEffect, useMemo } from 'react'

// third-parties
import { useInView, useAnimation } from 'framer-motion'

const useFadeUp = (delay?: number) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-8%' })
  const animation = useAnimation()

  const variants = useMemo(
    () => ({
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: delay ? delay * 0.1 : 0 } },
      hidden: { opacity: 0, y: 40 },
    }),
    [delay]
  )

  useEffect(() => {
    isInView && animation.start('visible')
  }, [animation, isInView])

  return { ref, animation, variants }
}

export default useFadeUp
