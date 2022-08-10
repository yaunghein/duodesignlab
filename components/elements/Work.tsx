import React from 'react'
import Link from 'next/link'

// third-parties
import { motion } from 'framer-motion'

// types
import { WorkThumbnailType } from '$types/workTypes'

// elements
import BlurImage from '$elements/BlurImage'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useFadeIn from '$hooks/useFadeIn'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  work: WorkThumbnailType
  index: number
}

const Work: React.FC<Props> = ({ work, index }) => {
  const { ref, animation, variants } = useFadeUp(index)
  const { ref: ref2, animation: animation2, variants: variants2 } = useFadeUp(1)
  const { ref: ref3, animation: animation3, variants: variants3 } = useFadeUp(2)
  const { ref: ref4, animation: animation4, variants: variants4 } = useFadeIn()
  const { changeCursorType } = useCursorStore()

  return (
    <Link href={`/works/${work.slug}`}>
      <motion.a
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        className="relative cursor-pointer"
        onMouseEnter={() => changeCursorType('work')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <BlurImage src={work.image.path} alt={work.name} width={work.image.width} height={1305} />

        {/* for desktop */}
        <div className="absolute inset-0 flex-col items-center hidden px-12 py-5 transition-opacity opacity-0 text-centerm hover:opacity-100 xl:flex lg:py-8 bg-ddl_brand bg-opacity-90 backdrop-blur-md text-ddl_offwhite lg:px-28">
          <h3 className="mt-auto secondary-title">{work.name}</h3>
          <p className="mt-auto text-sm font-normal md:text-link-size">{work.scope.join(', ')}</p>
        </div>

        {/* for mobile */}
        <motion.div
          ref={ref4}
          animate={animation4}
          initial="hidden"
          variants={variants4}
          className="absolute bottom-0 flex flex-col w-full px-4 py-4 bg-opacity-75 xl:hidden bg-gradient-to-t from-ddl_brand backdrop-blur-sm text-ddl_offwhite"
        >
          <motion.h3 ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="mt-auto text-2xl">
            {work.name}
          </motion.h3>
          <motion.p ref={ref3} animate={animation3} initial="hidden" variants={variants3} className="mt-1 text-sm font-normal">
            {work.scope.join(', ')}
          </motion.p>
        </motion.div>
      </motion.a>
    </Link>
  )
}

export default Work
