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
import works from '$fixtures/works.json'

// hooks
import useWindowSize from '$hooks/useWindowSize'
import useDDLScroll from '$hooks/useDDLScroll'
import useMousePosition from '$hooks/useMousePosition'

export const getStaticProps: GetStaticProps = async () => {
  const transformedWorksData = works
    .filter((work) => !work.personal)
    .map((work) => {
      return {
        id: uuid(),
        name: work.name,
        scope: work.scope,
        image: work.thumbnail,
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

const CapabilitiesPage: NextPageWithLayout<Props> = ({ works }) => {
  const { width } = useWindowSize()
  const [worksByCapability, setWorksByCapability] = useState(works)
  const { currentCapability, changeCapability } = useCapabilityStore()
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { ref, scrollTrackByElement } = useDDLScroll()
  const { mouseTrack } = useMousePosition()

  const goToNextSection = () => document && document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (currentCapability) {
      const worksDataByCapability = works.filter((work) => work.scope.includes(currentCapability))
      setWorksByCapability(worksDataByCapability)
    }
  }, [works, currentCapability])

  useEffect(() => window.scrollTo({ top: 1 }), [currentCapability])

  return (
    <>
      <Head>
        <title>Capabilities - Duo Design Lab</title>
        <meta
          content="Here in Duo Design Lab, we create authentic brands, and build fast and modern Jamstack websites which align with your business needs as well. Explore some of our projects and see if we can make an awesome project together."
          name="description"
        />
        <meta content="Capabilities - Duo Design Lab" property="og:title" />
        <meta
          content="Here in Duo Design Lab, we create authentic brands, and build fast and modern Jamstack websites which align with your business needs as well. Explore some of our projects and see if we can make an awesome project together."
          property="og:description"
        />
      </Head>
      <motion.section
        ref={ref}
        onMouseEnter={() => changeCursorType('normal_brand')}
        onMouseLeave={resetCursorType}
        className="sticky top-0 overflow-hidden transition-transform duration-300 ease-out bg-ddl_brand_light"
        style={{ transform: `translateY(-${scrollTrackByElement * 150}px)` }}
      >
        {currentCapability !== 'Web Development' && width > 639 && (
          <motion.button
            onClick={() => changeCapability('Web Development')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
            className={cn(
              'absolute group',
              currentCapability === 'Branding'
                ? 'bottom-[45rem] lg:bottom-[30rem] right-20 lg:right-40'
                : currentCapability === 'Web Design'
                ? 'bottom-[45rem] lg:bottom-32 right-20 lg:right-64'
                : 'bottom-[32rem] lg:bottom-72 right-20 lg:right-96'
            )}
            style={{
              opacity: `${1 - scrollTrackByElement}`,
              transform: `translate(${20 - mouseTrack.x * 20}px, ${20 - mouseTrack.y * 20}px)`,
            }}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring' }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2  w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
              <div className="relative grid w-48 h-48 md:w-[19rem] md:h-[19rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Web Development
              </div>
            </motion.div>
          </motion.button>
        )}

        {currentCapability !== 'Web Design' && width > 639 && (
          <motion.button
            onClick={() => changeCapability('Web Design')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
            className={cn(
              'absolute group',
              currentCapability === 'Branding' ? 'bottom-40 lg:bottom-28 left-20 lg:left-[20rem]' : '',
              currentCapability === 'Web Development' ? 'bottom-[50rem] lg:bottom-[14rem] left-96 lg:left-[75rem]' : '',
              !currentCapability ? 'bottom-[36rem] lg:bottom-[24rem] left-24 lg:left-[24rem]' : ''
            )}
            style={{
              opacity: `${1 - scrollTrackByElement}`,
              transform: `translate(${mouseTrack.x * 20}px, ${20 - mouseTrack.y * 20}px)`,
            }}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring', delay: 0.05 }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition"></div>
              <div className="relative grid w-40 h-40 md:w-[16rem] md:h-[16rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Web Design
              </div>
            </motion.div>
          </motion.button>
        )}

        {currentCapability !== 'Branding' && width > 639 && (
          <motion.button
            onClick={() => changeCapability('Branding')}
            onMouseEnter={() => changeCursorType('bubble')}
            onMouseLeave={() => changeCursorType('normal_brand')}
            className={cn(
              'absolute group',
              currentCapability === 'Web Development'
                ? 'bottom-40 lg:bottom-28 left-40 lg:left-[20rem]'
                : currentCapability === 'Web Design'
                ? 'bottom-40 lg:bottom-[35rem] left-40 lg:left-[16rem]'
                : 'bottom-56 lg:bottom-28 left-40 lg:left-[32rem]'
            )}
            style={{
              opacity: `${1 - scrollTrackByElement}`,
              transform: `translate(${20 - mouseTrack.x * 20}px, ${mouseTrack.y * 20}px)`,
            }}
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
              <div className="relative grid w-36 h-36 md:w-[13rem] md:h-[13rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                Branding
              </div>
            </motion.div>
          </motion.button>
        )}

        {!currentCapability && width <= 639 && (
          <div className="absolute bottom-0 transform -translate-x-1/2 left-1/2 w-80">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring' }}
              onClick={() => changeCapability('Web Development')}
              className="absolute left-0 group bottom-64"
            >
              <div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2  w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-48 h-48 md:w-[19rem] md:h-[19rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
                <div className="relative grid w-48 h-48 md:w-[19rem] md:h-[19rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                  Web Development
                </div>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', delay: 0.1 }}
              onClick={() => changeCapability('Web Design')}
              className="absolute right-0 group bottom-[7.5rem]"
            >
              <div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-40 h-40 md:w-[16rem] md:h-[16rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition"></div>
                <div className="relative grid w-40 h-40 md:w-[16rem] md:h-[16rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                  Web Design
                </div>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring', delay: 0.2 }}
              onClick={() => changeCapability('Branding')}
              className="absolute group bottom-10 right-44"
            >
              <div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.12] transition delay-[50ms] border border-ddl_brand border-opacity-10"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-36 h-36 md:w-[13rem] md:h-[13rem] rounded-full bg-ddl_brand bg-opacity-10 group-hover:scale-[1.06] transition delay-[50ms]"></div>
                <div className="relative grid w-36 h-36 md:w-[13rem] md:h-[13rem] font-normal rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
                  Branding
                </div>
              </div>
            </motion.button>
          </div>
        )}

        <div
          className={cn(
            'relative flex items-start md:items-center justify-center ddl-container mix-blend-multiply pointer-events-none',
            currentCapability ? 'h-screen' : 'h-[calc(100vh-7rem)] lg:h-[calc(100vh-6rem)]'
          )}
          style={{ opacity: `${1 - scrollTrackByElement}`, transform: `translateY(${scrollTrackByElement * 150}px)` }}
        >
          <div
            className={cn(
              currentCapability ? 'mt-48 lg:-mb-20' : 'mt-32',
              'flex flex-col items-center justify-center gap-8 lg:gap-16 md:mt-0 transition-all'
            )}
          >
            <motion.h1
              className="text-center xs:text-4xl text-big-visual md:main-title text-ddl_dark"
              initial={{ y: 64, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            >
              <span>We Do</span> {/* FadeIn effect htae loh ya chin loh dynamically ma use tr */}
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

            {currentCapability === 'Web Development' && (
              <motion.p
                className="max-w-[34rem] text-center text-body text-ddl_dark"
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
              >
                No search engine loves slow and old-fashioned websites. We’re sure you won’t either. Here in Duo Design Lab, we build fast
                and modern Jamstack websites which align with your business needs as well. Looking for an example? You are browsing one of
                the examples right now…
              </motion.p>
            )}

            {currentCapability === 'Web Design' && (
              <motion.p
                className="max-w-[26.5rem] text-center text-body text-ddl_dark"
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
              >
                We believe that every business has their own unique audiences and unique audiences call for unique design. We create all our
                design scratch based on your business needs and audiences.
              </motion.p>
            )}

            {currentCapability === 'Branding' && (
              <motion.p
                className="max-w-[26.5rem] text-center text-body text-ddl_dark"
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
              >
                To effectively communicate your purpose and your business to your customers,a good brand identity is a must-have. We can
                craft you an effective brand identity based on what you stand for and what makes you unique.
              </motion.p>
            )}
          </div>
        </div>

        {currentCapability && width <= 639 && (
          <div className="absolute left-5 bottom-20">
            <div className="text-ddl_dark text-link-size">See Also</div>
            <div className="flex items-center gap-3 mt-5">
              {currentCapability !== 'Branding' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="py-3 text-sm font-normal transition-colors border-2 rounded-full px-7 border-ddl_dark whitespace-nowrap"
                  onClick={() => changeCapability('Branding')}
                >
                  Branding
                </motion.button>
              )}
              {currentCapability !== 'Web Design' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="py-3 text-sm font-normal transition-colors border-2 rounded-full px-7 border-ddl_dark whitespace-nowrap"
                  onClick={() => changeCapability('Web Design')}
                >
                  Web Design
                </motion.button>
              )}
              {currentCapability !== 'Web Development' && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="py-3 text-sm font-normal transition-colors border-2 rounded-full px-7 border-ddl_dark whitespace-nowrap"
                  onClick={() => changeCapability('Web Development')}
                >
                  Web Development
                </motion.button>
              )}
            </div>
          </div>
        )}

        {currentCapability && (
          <motion.button
            aria-label="scroll down"
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
