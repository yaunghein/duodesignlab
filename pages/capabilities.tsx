import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import { GetStaticProps } from 'next'

// types
import { WorkThumbnailType } from '$types/workTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import Works from '$blocks/Works'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualThree from '$svgs/ReadyVisualThree'

// stores
import useCapabilityStore from '$stores/CapabilityStore'

// utils
import cn from '$utils/cn'

// data
import works from '$data/works.json'

export const getStaticProps: GetStaticProps = async () => {
  const transformedWorksData = works.map((work) => {
    return {
      id: new Date().getTime(),
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

const CapabilitiesPage: NextPageWithLayout<Props> = ({ works }) => {
  const [worksByCapability, setWorksByCapability] = useState(works)
  const { currentCapability, changeCapability } = useCapabilityStore((state) => state)

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
      <section className="relative bg-ddl_brand_light">
        {currentCapability !== 'Web Design' && (
          <button className="absolute top-32 left-96" onClick={() => changeCapability('Web Design')}>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[18rem] h-[18rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[17rem] h-[17rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="relative grid w-[16rem] h-[16rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
              Web Design
            </div>
          </button>
        )}

        {currentCapability !== 'Web Development' && (
          <button className="absolute top-32 right-96" onClick={() => changeCapability('Web Development')}>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[21rem] h-[21rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[20rem] h-[20rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="relative grid w-[19rem] h-[19rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
              Web Development
            </div>
          </button>
        )}

        {currentCapability !== 'Branding' && (
          <button className="absolute transform translate-x-1/2 bottom-10 right-1/2" onClick={() => changeCapability('Branding')}>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[15rem] h-[15rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[14rem] h-[14rem] rounded-full bg-ddl_brand bg-opacity-10"></div>
            <div className="relative grid w-[13rem] h-[13rem] font-medium rounded-full bg-ddl_brand text-ddl_brand_light text-body place-items-center">
              Branding
            </div>
          </button>
        )}

        <div
          className={cn(
            'relative flex flex-col items-center gap-20 justify-center ddl-container mix-blend-multiply pointer-events-none',
            currentCapability ? 'h-screen' : 'h-[calc(100vh-6rem)]'
          )}
        >
          <h1 className="flex items-start gap-5 main-title text-ddl_dark">
            We Do {currentCapability && <span className="text-ddl_brand">{currentCapability}</span>}
          </h1>
          {currentCapability && (
            <p className="max-w-[26.5rem] text-center text-body text-ddl_dark">
              To effectively communicate your purpose and your business to your customers, a good brand identity is a must-have. We can
              craft you an effective brand identity based on what you stand for and what makes you unique.
            </p>
          )}
        </div>
      </section>
      {currentCapability && (
        <>
          <Works bgColor="bg-white" title={`Our ${currentCapability} Works`} works={worksByCapability} />
          <Ready>
            <ReadyVisualThree className="max-w-xl text-ddl_offwhite" />
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
