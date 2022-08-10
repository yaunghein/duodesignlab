import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import Hero from '$blocks/Hero'
import ContactForm from '$blocks/ContactForm'

// stores
import useCursorStore from '$stores/CursorStore'

const WorkWithUs: NextPageWithLayout = () => {
  const { ref, animation, variants } = useFadeUp()
  const { ref: ref2, animation: animation2, variants: variants2 } = useFadeUp(1)
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <>
      <Head>
        <title>Work With Us - Duo Design Lab</title>
      </Head>
      <Hero title="Start A Project" />
      <motion.section
        id="next-section"
        className="py-8 bg-white md:py-28"
        onMouseEnter={() => changeCursorType('normal_brand')}
        onMouseLeave={resetCursorType}
      >
        <div className="grid grid-cols-1 ddl-container lg:grid-cols-2">
          <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="relative">
            <div className="max-w-lg lg:sticky top-28">
              <h2 className="secondary-title text-ddl_dark">Contact Information</h2>
              <div className="flex flex-wrap mt-5 lg:mt-20 gap-y-5 lg:gap-y-10">
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href="mailto:contact@duodesignlab.com"
                  className="w-full font-medium underline text-body text-ddl_dark"
                >
                  contact@duodesignlab.com
                </motion.a>
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href="tel:09123456789"
                  className="mr-12 font-medium lg:mr-auto text-body text-ddl_dark"
                >
                  09 123 456 789
                </motion.a>
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href="tel:09123456789"
                  className="font-medium text-body text-ddl_dark"
                >
                  09 123 456 789
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="mt-20 lg:mt-0">
            <h2 className="mb-5 lg:mb-20 secondary-title text-ddl_dark">Write Brief</h2>
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

WorkWithUs.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default WorkWithUs
