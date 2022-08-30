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
  const [ref, animation, variants] = useFadeUp()
  const [ref2, animation2, variants2] = useFadeUp(1)
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <>
      <Head>
        <title>Work With Us - Duo Design Lab</title>
        <meta
          content="We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s."
          name="description"
        />
        <meta content="Work With Us - Duo Design Lab" property="og:title" />
        <meta
          content="We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s."
          property="og:description"
        />
      </Head>
      <Hero title="Start A Project" />
      <motion.section
        id="next-section"
        className="relative py-8 bg-white md:py-28"
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
                  href="mailto:duodesignlab.mm@gmail.com"
                  className="w-full font-normal underline text-body text-ddl_dark"
                >
                  duodesignlab.mm@gmail.com
                </motion.a>
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href="tel:+959962323716"
                  className="mr-12 font-normal lg:mr-auto xs:text-base text-body text-ddl_dark"
                >
                  +959 962 323 716
                </motion.a>
                <motion.a
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  href="tel:+959785958846"
                  className="font-normal xs:text-[1rem] text-body text-ddl_dark"
                >
                  +959 785 958 846
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            animate={animation2}
            initial="hidden"
            variants={variants2}
            className="mt-20 -mb-4 overflow-hidden lg:-mb-12 lg:mt-0"
          >
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
