import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { GetStaticProps } from 'next'

// third-parties
import { v4 as uuid } from 'uuid'

// types
import { WorkThumbnailType } from '$types/workTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import Hero from '$blocks/Hero'
import WorksWithFilters from '$blocks/WorksWithFilters'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualTwo from '$svgs/ReadyVisualTwo'

// data
import works from '$fixtures/works.json'

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

const WorksPage: NextPageWithLayout<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Works - Duo Design Lab</title>
        <meta
          content="No search engine loves slow and old-fashioned websites. We’re sure you won’t either. Here in Duo Design Lab, we build fast and modern Jamstack websites which align with your business needs as well. Explore some of our projects and see if we can make an awesome project together."
          name="description"
        />
        <meta content="Works - Duo Design Lab" property="og:title" />
        <meta
          content="No search engine loves slow and old-fashioned websites. We’re sure you won’t either. Here in Duo Design Lab, we build fast and modern Jamstack websites which align with your business needs as well. Explore some of our projects and see if we can make an awesome project together."
          property="og:description"
        />
      </Head>
      <Hero title="Our Works" />
      <WorksWithFilters works={works} />
      <Ready>
        <ReadyVisualTwo className="w-full sm:max-w-xl text-ddl_offwhite" />
      </Ready>
    </>
  )
}

WorksPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default WorksPage
