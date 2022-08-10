import React from 'react'

// third-parties
import { motion } from 'framer-motion'

// types
import { MemberType } from '$types/memberTypes'

// elements
import Member from '$elements/Member'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  members: MemberType[]
}

const Members: React.FC<Props> = ({ members }) => {
  const { ref, animation, variants } = useFadeUp()
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section className="py-8 bg-white md:py-28" onMouseEnter={() => changeCursorType('normal_brand')} onMouseLeave={resetCursorType}>
      <div className="ddl-container">
        <div className="max-w-6xl mx-auto">
          <motion.h2 ref={ref} animate={animation} initial="hidden" variants={variants} className="text-center main-title text-ddl_dark">
            Founding Members
          </motion.h2>
          <div className="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-2 md:mt-12">
            {members.map((member, i) => (
              <Member key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Members
