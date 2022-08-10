import React from 'react'
import Link from 'next/link'

// third-parties
import { motion } from 'framer-motion'

// types
import { MemberType } from '$types/memberTypes'

// elements
import BlurImage from '$elements/BlurImage'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useFadeIn from '$hooks/useFadeIn'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  member: MemberType
  index: number
}

const FoundingMember: React.FC<Props> = ({ member, index }) => {
  const { ref, animation, variants } = useFadeUp(index)
  const { ref: ref2, animation: animation2, variants: variants2 } = useFadeUp(1)
  const { ref: ref3, animation: animation3, variants: variants3 } = useFadeUp(2)
  const { ref: ref4, animation: animation4, variants: variants4 } = useFadeIn()
  const { changeCursorType } = useCursorStore()

  return (
    <Link href={`/about/${member.slug}`}>
      <motion.a
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        className="relative cursor-pointer"
        onMouseEnter={() => changeCursorType('member')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <BlurImage src={member.image} alt={member.name} width={1296} height={1296} />
        <div className="absolute inset-0 flex-col items-center hidden px-12 py-5 text-center transition-opacity opacity-0 xl:flex lg:py-8 bg-ddl_brand bg-opacity-90 backdrop-blur-md text-ddl_offwhite lg:px-28 hover:opacity-100">
          <h3 className="mt-auto secondary-title">{member.name}</h3>
          <p className="mt-auto text-sm font-normal md:text-link-size">{member.position}</p>
        </div>
        <motion.div
          ref={ref4}
          animate={animation4}
          initial="hidden"
          variants={variants4}
          className="absolute bottom-0 flex flex-col w-full px-4 py-4 bg-opacity-75 xl:hidden bg-gradient-to-t from-ddl_brand backdrop-blur-sm text-ddl_offwhite"
        >
          <motion.h3 ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="mt-auto text-2xl">
            {member.name}
          </motion.h3>
          <motion.p ref={ref3} animate={animation3} initial="hidden" variants={variants3} className="mt-1 text-sm font-normal">
            {member.position}
          </motion.p>
        </motion.div>
      </motion.a>
    </Link>
  )
}

export default FoundingMember
