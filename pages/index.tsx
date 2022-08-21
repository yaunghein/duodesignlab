import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import { GetStaticProps } from 'next'

// third-parties
import { v4 as uuid } from 'uuid'

// types
import { WorkThumbnailType } from '$types/workTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import HomeHero from '$blocks/HomeHero'
import Capibilities from '$blocks/Capibilities'
import Works from '$blocks/Works'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualOne from '$svgs/ReadyVisualOne'

// data
import works from '$fixtures/works.json'

export const getStaticProps: GetStaticProps = async () => {
  const transformedWorksData = works
    .filter((work) => !work.personal)
    .slice(0, 2)
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

const HomePage: NextPageWithLayout<Props> = ({ works }) => {
  return (
    <>
      <Head>
        <title>Home - Duo Design Lab</title>
        <meta
          content="We are a humble boutiqueweb design studio, led by a groupof young people with design anddevelopment background."
          name="description"
        />
        <meta content="Home - Duo Design Lab" property="og:title" />
        <meta
          content="We are a humble boutiqueweb design studio, led by a groupof young people with design anddevelopment background."
          property="og:description"
        />
      </Head>
      <HomeHero />
      <Capibilities bgColor="bg-ddl_offwhite" />
      <Works bgColor="bg-ddl_offwhite" title="Our Works" works={works} />
      <Ready>
        <ReadyVisualOne className="w-full sm:max-w-xl text-ddl_offwhite" />
      </Ready>
    </>
  )
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
