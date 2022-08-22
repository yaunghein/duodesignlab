import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { NextPageWithLayout } from '../_app'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useFadeUp from '$hooks/useFadeUp'

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
import works from '$fixtures/works.json'

// stores
import useCursorStore from '$stores/CursorStore'

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
  const [isShowMore, setIsShowMore] = useState(false)
  const { ref, animation, variants } = useFadeUp()
  const { changeCursorType, resetCursorType } = useCursorStore()

  return (
    <>
      <Head>
        <title>{`${work.name} - Duo Design Lab`}</title>
        <meta content={work.description} name="description" />
        <meta content={`${work.name} - Duo Design Lab`} property="og:title" />
        <meta content={work.description} property="og:description" />
      </Head>
      <WorkHero work={work} isShowMore={isShowMore} setIsShowMore={setIsShowMore} />
      <motion.section className="bg-white" onMouseEnter={() => changeCursorType('normal_brand')} onMouseLeave={resetCursorType}>
        <div className="py-8 ddl-container md:py-28">
          <div className="grid gap-2">
            {work.images.map((image: ImageType) => (
              <BlurImage key={image.path} alt={`${work.name}`} src={image.path} width={image.width} height={image.height} />
            ))}
          </div>

          <div className="grid gap-5 mt-8 font-medium md:mt-12 lg:hidden text-body">
            <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex gap-2">
              <span className="whitespace-nowrap">Live at: </span>
              <a href={`https://${work.website}`} target="_blank" rel="noreferrer" className="underline">
                {work.website}
              </a>
            </motion.div>
            <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex gap-2">
              <span>Scope:</span>
              <span>{work.scope.join(', ')}</span>
            </motion.div>
            <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex gap-2">
              <span>Year:</span>
              <span>{work.year}</span>
            </motion.div>
          </div>

          <motion.div ref={ref} animate={animation} initial="hidden" variants={variants} className="flex items-center gap-6 mt-20 md:mt-12">
            {work.more.prev && (
              <Link href={`/works/${work.more.prev.slug}`}>
                <motion.a
                  onClick={() => setIsShowMore(false)}
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  className="flex items-center gap-2 text-sm font-medium md:text-body text-ddl_dark"
                >
                  <LeftArrow className="w-4 h-4 sm:w-6 sm:h-6" />
                  {work.more.prev.name}
                </motion.a>
              </Link>
            )}
            {work.more.next && (
              <Link href={`/works/${work.more.next.slug}`}>
                <motion.a
                  onClick={() => setIsShowMore(false)}
                  onMouseEnter={() => changeCursorType('hover_brand')}
                  onMouseLeave={() => changeCursorType('normal_brand')}
                  className="flex items-center gap-2 ml-auto text-sm font-medium text-right md:text-body text-ddl_dark"
                >
                  {work.more.next.name}
                  <RightArrow className="w-4 h-4 -mb-1 sm:w-6 sm:h-6" />
                </motion.a>
              </Link>
            )}
          </motion.div>
        </div>
      </motion.section>
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
