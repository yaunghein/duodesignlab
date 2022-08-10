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
import works from '$data/works.json'

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

const WorksPage: NextPageWithLayout<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Works - Duo Design Lab</title>
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
