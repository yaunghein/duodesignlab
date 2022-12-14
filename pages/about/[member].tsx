import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { GetStaticProps, GetStaticPaths } from 'next'

// third-parties
import { v4 as uuid } from 'uuid'

// types
import { WorkThumbnailType } from '$types/workTypes'
import { MemberType } from '$types/memberTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import MemberHero from '$blocks/MemberHero'
import Works from '$blocks/Works'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualTwo from '$svgs/ReadyVisualTwo'

// data
import works from '$fixtures/works.json'
import members from '$fixtures/members.json'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = members.map((member) => ({ params: { member: member.slug } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const transformedMemberData = members.filter((member) => member.slug === params?.member)[0]

  const transformedWorksData = works
    // .filter((work) => work.owners.includes(params?.member)) // this doesn't work
    .filter((work) => work.owners.includes((params?.member as string) || '')) // wth, it just works :3
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
      member: transformedMemberData,
      works: transformedWorksData,
    },
  }
}

interface Props {
  member: MemberType
  works: WorkThumbnailType[]
}

const MemberPage: NextPageWithLayout<Props> = ({ member, works }) => {
  return (
    <>
      <Head>
        <title>{`${member.name} - Duo Design Lab`}</title>
        <meta content={member.biography} name="description" />
        <meta content={`${member.name} - Duo Design Lab`} property="og:title" />
        <meta content={member.biography} property="og:description" />
        <meta content={member.image} property="og:image" />
      </Head>
      <MemberHero member={member} />
      <Works title="Projects" works={works} />
      <Ready>
        <ReadyVisualTwo className="w-full sm:max-w-xl text-ddl_offwhite" />
      </Ready>
    </>
  )
}

MemberPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default MemberPage
