import React from 'react'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// types
import { MemberType } from '$types/memberTypes'

// elements
import BlurImage from '$elements/BlurImage'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  member: MemberType
}

const MemberHero: React.FC<Props> = ({ member }) => {
  const [ref, animation, variants] = useFadeUp()
  const [ref2, animation2, variants2] = useFadeUp(1)
  const [ref3, animation3, variants3] = useFadeUp(2)
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section className="bg-white text-ddl_dark" onMouseEnter={() => changeCursorType('normal_brand')} onMouseLeave={resetCursorType}>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-36 md:pt-64 ddl-container">
        <div className="-mt-7">
          <motion.h1 ref={ref} animate={animation} initial="hidden" variants={variants} className="text-big-visual md:main-title">
            {member.name}
          </motion.h1>
          <motion.div
            ref={ref2}
            animate={animation2}
            initial="hidden"
            variants={variants2}
            className="flex flex-col mt-5 lg:flex-row lg:mt-20"
          >
            <p className="font-medium text-body whitespace-nowrap">{member.position}</p>
            <div className="my-8 lg:hidden">
              <BlurImage alt={member.name} src={member.image} width={1294} height={1528} />
            </div>
            <div className="flex flex-wrap max-w-sm lg:ml-48 lg:gap-x-12 gap-y-8">
              <motion.a
                onMouseEnter={() => changeCursorType('hover_brand')}
                onMouseLeave={() => changeCursorType('normal_brand')}
                href={`mailto:${member.email}`}
                className="w-full font-medium underline text-body"
              >
                {member.email}
              </motion.a>
              {member.linkedIn && (
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href={member.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 font-medium underline lg:w-auto text-body"
                >
                  LinkedIn
                </motion.a>
              )}
              {member.github && (
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 font-medium underline lg:w-auto text-body"
                >
                  GitHub
                </motion.a>
              )}
              {member.facebook && (
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href={member.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 font-medium underline lg:w-auto text-body"
                >
                  Facebook
                </motion.a>
              )}
              {member.instagram && (
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 font-medium underline lg:w-auto text-body"
                >
                  Instagram
                </motion.a>
              )}
              {member.behance && (
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href={member.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 font-medium underline lg:w-auto text-body"
                >
                  Behance
                </motion.a>
              )}
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            animate={animation3}
            initial="hidden"
            variants={variants3}
            className="grid gap-6 mt-8 font-normal lg:mt-20 lg:gap-12 text-body mb-[2px]"
            dangerouslySetInnerHTML={{ __html: member.biography }}
          />
        </div>
        <div className="relative hidden lg:block px-28">
          <div className="sticky top-24">
            <BlurImage alt={member.name} src={member.image} width={1294} height={1528} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default MemberHero
