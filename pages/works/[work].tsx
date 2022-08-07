import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NextPageWithLayout } from '../_app'

// types
import { WorkType, ImageType } from '$types/workTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import WorkHero from '$blocks/WorkHero'
import Ready from '$blocks/Ready'

// elements
import BlurImage from '$elements/BlurImage'

// svgs
import ReadyVisualOne from '$svgs/ReadyVisualOne'
import LeftArrow from '$svgs/LeftArrow'
import RightArrow from '$svgs/RightArrow'

// data
import works from '$data/works.json'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works.map((work) => ({ params: { work: work.slug } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = works.filter((work) => work.slug === params?.work)[0]

  if (!work) return { notFound: true }

  return {
    props: { work },
  }
}

interface Props {
  work: WorkType
}

const WorkPage: NextPageWithLayout<Props> = ({ work }) => {
  return (
    <>
      <Head>
        <title>{`${work.name} - Duo Design Lab`}</title>
      </Head>
      <WorkHero work={work} />
      <section className="bg-white">
        <div className="py-8 ddl-container md:py-28">
          <div className="grid gap-2">
            {work.images.map((image: ImageType) => (
              <BlurImage key={image.path} alt={`${work.name}`} src={image.path} width={image.width} height={image.height} />
            ))}
          </div>

          <div className="grid gap-5 mt-8 md:mt-12 lg:hidden">
            <div className="flex gap-2">
              <span className="text-base font-medium whitespace-nowrap">Live at: </span>
              <a href={`https://${work.website}`} target="_blank" rel="noreferrer" className="text-base font-medium underline">
                {work.website}
              </a>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Scope:</span>
              <span className="text-base font-medium">{work.scope.join(', ')}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium">Year:</span>
              <span className="text-base font-medium">{work.year}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8 md:mt-12">
            <Link href="works/paing-mentoring-family">
              <a className="flex items-center gap-2 mr-auto text-sm font-medium md:text-body text-ddl_dark">
                <LeftArrow className="w-6 h-6" />
                Kyaw San Htoo Pharmacy
              </a>
            </Link>
            <Link href="works/paing-mentoring-family">
              <a className="flex items-center gap-2 text-sm font-medium text-right md:text-body text-ddl_dark">
                Kyaw San Htoo Pharmacy
                <RightArrow className="w-6 h-6 -mb-1" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Ready>
        <ReadyVisualOne className="w-full sm:max-w-xl text-ddl_offwhite" />
      </Ready>
    </>
  )
}

WorkPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default WorkPage
