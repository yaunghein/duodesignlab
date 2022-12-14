import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// third-parties
import { motion } from 'framer-motion'

// types
import { MemberType } from '$types/memberTypes'

// elements
import BlurImage from '$elements/BlurImage'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useFadeIn from '$hooks/useFadeIn'
import useTexture from '$hooks/useTexture'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  member: MemberType
  index: number
}

const FoundingMember: React.FC<Props> = ({ member, index }) => {
  const [ref, animation, variants] = useFadeUp(index)
  const [ref2, animation2, variants2] = useFadeUp(1)
  const [ref3, animation3, variants3] = useFadeUp(2)
  const [ref4, animation4, variants4] = useFadeIn()
  const { changeCursorType } = useCursorStore()

  return (
    <Link href={`/about/${member.slug}`}>
      <motion.a
        aria-label={`get to know more about ${member.name}`}
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={variants}
        className="relative cursor-pointer"
        onMouseEnter={() => changeCursorType('member')}
        onMouseLeave={() => changeCursorType('normal_brand')}
      >
        <BlurImage src={member.image} alt={member.name} width={1296} height={1296} />

        <div className="absolute inset-0 flex-col items-center hidden px-12 py-5 text-center transition-opacity opacity-0 lg:flex lg:py-8 bg-ddl_brand text-ddl_offwhite lg:px-28 hover:opacity-100">
          <Image alt="" src={useTexture()} layout="fill" className="opacity-20" />
          <h3 className="relative mt-auto secondary-title">{member.name}</h3>
          <p className="relative mt-auto text-sm font-normal md:text-link-size">{member.position}</p>
        </div>

        <motion.div
          ref={ref4}
          animate={animation4}
          initial="hidden"
          variants={variants4}
          className="absolute bottom-0 flex flex-col w-full px-4 py-4 pt-5 bg-opacity-75 lg:hidden text-ddl_offwhite"
          style={{ background: 'linear-gradient(0deg, rgba(18, 16, 19, 0.6), rgba(18, 16, 19, 0.4), transparent)' }}
        >
          <motion.h3
            ref={ref2}
            animate={animation2}
            initial="hidden"
            variants={variants2}
            className="mt-auto text-xl font-normal sm:text-2xl"
          >
            {member.name}
          </motion.h3>
          <motion.p ref={ref3} animate={animation3} initial="hidden" variants={variants3} className="mt-1 text-xs font-normal sm:text-sm">
            {member.position}
          </motion.p>
        </motion.div>
      </motion.a>
    </Link>
  )
}

export default FoundingMember
