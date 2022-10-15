import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// third-parties
import { motion } from 'framer-motion'

// svgs
import LinkArrow from '$svgs/LinkArrow'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useTexture from '$hooks/useTexture'

// stores
import useCursorStore from '$stores/CursorStore'

interface Props {
  children: React.ReactNode
}

const Ready: React.FC<Props> = ({ children }) => {
  const [ref, animation, variants] = useFadeUp()
  const [ref2, animation2, variants2] = useFadeUp(1)
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <motion.section
      className="relative z-20 bg-ddl_brand"
      style={{ WebkitTransform: 'translate3d(0,0,0)' }}
      onMouseEnter={() => changeCursorType('normal_brand_light')}
      onMouseLeave={resetCursorType}
    >
      <Image alt="" src={useTexture()} layout="fill" />

      <div className="relative flex items-center justify-center h-[60vh] lg:h-[calc(100vh-6rem)] ddl-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mx-auto max-w-[90rem]">
          <h2 className="sr-only">Ready?</h2>
          <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="w-full lg:w-[40rem]">
            {children}
          </motion.div>

          <motion.div ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="flex flex-col gap-7 lg:gap-7">
            <div className="flex items-center gap-5 lg:gap-12">
              <span className="font-normal text-body text-ddl_offwhite">Send</span>
              <div className="flex items-center gap-5 lg:gap-12">
                <Link href="/work-with-us">
                  <motion.a
                    className="flex items-center"
                    onMouseEnter={() => changeCursorType('hover_brand_light')}
                    onMouseLeave={() => changeCursorType('normal_brand_light')}
                  >
                    <span className="font-normal text-body text-ddl_offwhite">Brief</span>
                    <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
                  </motion.a>
                </Link>
                <motion.a
                  href="mailto:duodesignlab.mm@gmail.com"
                  className="flex items-center"
                  onMouseEnter={() => changeCursorType('hover_brand_light')}
                  onMouseLeave={() => changeCursorType('normal_brand_light')}
                >
                  <span className="font-normal text-body text-ddl_offwhite">Email</span>
                  <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
                </motion.a>
              </div>
            </div>

            <div className="flex items-start gap-5 lg:gap-12 md:items-center">
              <span className="ml-3 font-normal lg:ml-4 text-body text-ddl_offwhite">Call</span>
              <div className="flex flex-col items-center gap-5 lg:gap-12 md:flex-row">
                <motion.a
                  href="tel:+959 962 323 716"
                  className="flex items-center"
                  onMouseEnter={() => changeCursorType('hover_brand_light')}
                  onMouseLeave={() => changeCursorType('normal_brand_light')}
                >
                  <span className="font-normal text-body text-ddl_offwhite whitespace-nowrap">+959 962 323 716</span>
                </motion.a>
                <motion.a
                  href="tel:+959 785 958 846"
                  className="flex items-center"
                  onMouseEnter={() => changeCursorType('hover_brand_light')}
                  onMouseLeave={() => changeCursorType('normal_brand_light')}
                >
                  <span className="font-normal text-body text-ddl_offwhite whitespace-nowrap">+959 785 958 846</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Ready
