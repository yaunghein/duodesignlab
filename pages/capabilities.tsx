import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import { GetStaticProps } from 'next'

// third-parties
import { v4 as uuid } from 'uuid'
import { motion, Variants } from 'framer-motion'

// types
import { WorkThumbnailType } from '$types/workTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import Works from '$blocks/Works'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualThree from '$svgs/ReadyVisualThree'
import ScrollArrowGreen from '$svgs/ScrollArrowGreen'

// stores
import useCapabilityStore from '$stores/CapabilityStore'
import useCursorStore from '$stores/CursorStore'

// utils
import cn from '$utils/cn'

// data
import works from '$data/works.json'

// hooks
import useWindowSize from '$hooks/useWindowSize'

export const getStaticProps: GetStaticProps = async () => {
  const transformedWorksData = works.map((work) => {
    return {
      id: uuid(),
      name: work.name,
      scope: work.scope,
      image: work.images[0],
      slug: work.slug,
    }
  })
  return {
    props: {
      works: transformedWorksData,
    },
  }
}

interface Props {
  works: WorkThumbnailType[]
}

const webDevelopment: Variants = {
  initial: { bottom: '0%', left: '0%' },
  animate: {
    bottom: ['0%', '50%', '10%', '50%', '0%'],
    left: ['0%', '80%', '60%', '20%', '0%'],
    transition: { duration: 60, repeat: Infinity },
  },
}

const webDesign: Variants = {
  initial: { bottom: '0%', right: '0%' },
  animate: {
    bottom: ['0%', '50%', '10%', '50%', '0%'],
    right: ['0%', '80%', '60%', '20%', '0%'],
    transition: { duration: 50, repeat: Infinity },
  },
}

const branding: Variants = {
  initial: { bottom: '0%', right: '45%' },
  animate: {
    bottom: ['50%', '30%', '0%', '50%'],
    right: ['45%', '60%', '30%', '45%'],
    transition: { duration: 40, repeat: Infinity },
  },
}

const CapabilitiesPage: NextPageWithLayout<Props> = ({ works }) => {
  const [worksByCapability, setWorksByCapability] = useState(works)
  const { currentCapability, changeCapability } = useCapabilityStore((state) => state)
  const { changeCursorType, resetCursorType } = useCursorStore((state) => state)
  const { width } = useWindowSize()

  const goToNextSection = () => {
    if (document) {
      document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (currentCapability) {
      const worksDataByCapability = works.filter((works) => works.scope.includes(currentCapability))
      setWorksByCapability(worksDataByCapability)
    }
  }, [works, currentCapability])

  return (
    <>
      <Head>
        <title>Capabilities - Duo Design Lab</title>
      </Head>
      <motion.section
        onMouseEnter={() => changeCursorType('normal_brand')}
        onMouseLeave={resetCursorType}
        className="relative overflow-hidden bg-ddl_brand_light"
      >
        {currentCapability !== 'Web Development' && (
          <motion.button
            variants={width > 639 ? webDevelopment : {}}
            initial="initial"
            animate="animate"
            className="absolute group bottom-72 left-10"
            onClick={() => changeCapability('Web Development')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring' }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2  w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
              <div className="relative grid w-48 h-48 md:w-[19rem] md:h-[19rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Web Development
              </div>
            </motion.div>
          </motion.button>
        )}

        {currentCapability !== 'Web Design' && (
          <motion.button
            variants={width > 639 ? webDesign : {}}
            initial="initial"
            animate="animate"
            className="absolute group bottom-36 right-10"
            onClick={() => changeCapability('Web Design')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring', delay: 0.05 }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition"></div>
              <div className="relative grid w-40 h-40 md:w-[16rem] md:h-[16rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Web Design
              </div>
            </motion.div>
          </motion.button>
        )}

        {currentCapability !== 'Branding' && (
          <motion.button
            variants={width > 639 ? branding : {}}
            initial="initial"
            animate="animate"
            className="absolute group bottom-10 right-52"
            onClick={() => changeCapability('Branding')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
              <div className="relative grid w-36 h-36 md:w-[13rem] md:h-[13rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Branding
              </div>
            </motion.div>
          </motion.button>
        )}

        <div
          className={cn(
            'relative flex flex-col items-center gap-5 lg:gap-20 justify-start md:justify-center ddl-container mix-blend-multiply pointer-events-none',
            currentCapability ? 'h-screen' : 'h-[calc(100vh-7rem)] lg:h-[calc(100vh-6rem)]'
          )}
        >
          <motion.h1
            className="text-center text-big-visual lg:main-title text-ddl_dark mt-36 md:mt-0"
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          >
            <span>We Do</span> {/* FadeIn effect htae loh ya chin loh */}
            {currentCapability === 'Web Development' && (
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-ddl_brand whitespace-nowrap"
              >
                Web Development
              </motion.span>
            )}
            {currentCapability === 'Web Design' && (
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-ddl_brand whitespace-nowrap"
              >
                Web Design
              </motion.span>
            )}
            {currentCapability === 'Branding' && (
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-block text-ddl_brand"
              >
                Branding
              </motion.span>
            )}
          </motion.h1>
          {currentCapability && (
            <motion.p
              className="max-w-[26.5rem] text-center text-body text-ddl_dark"
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            >
              To effectively communicate your purpose and your business to your customers, a good brand identity is a must-have. We can
              craft you an effective brand identity based on what you stand for and what makes you unique.
            </motion.p>
          )}
        </div>
        {currentCapability && (
          <motion.button
            className="absolute transform -translate-x-1/2 bottom-14 left-1/2"
            onClick={goToNextSection}
            onMouseEnter={() => changeCursorType('hover_brand')}
            onMouseLeave={() => changeCursorType('normal_brand')}
          >
            <ScrollArrowGreen className="hidden md:block w-[3.125rem] h-[3.125rem] text-ddl_brand" />
          </motion.button>
        )}
      </motion.section>
      {currentCapability && (
        <>
          <Works bgColor="bg-white" title={`Our ${currentCapability} Works`} works={worksByCapability} />
          <Ready>
            <ReadyVisualThree className="w-full sm:max-w-xl text-ddl_offwhite" />
          </Ready>
        </>
      )}
    </>
  )
}

CapabilitiesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default CapabilitiesPage
