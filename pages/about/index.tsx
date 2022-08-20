import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { GetStaticProps } from 'next'

// third-parties
import { v4 as uuid } from 'uuid'

// types
import { MemberType } from '$types/memberTypes'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import AboutHero from '$blocks/AboutHero'
import Capibilities from '$blocks/Capibilities'
import Members from '$blocks/Members'
import Ready from '$blocks/Ready'

// svgs
import ReadyVisualThree from '$svgs/ReadyVisualThree'

// data
import members from '$fixtures/members.json'

export const getStaticProps: GetStaticProps = async () => {
  const transformedMembersData = members.map((member) => {
    return {
      id: uuid(),
      ...member,
    }
  })
  return {
    props: {
      members: transformedMembersData,
    },
  }
}

interface Props {
  members: MemberType[]
}

const AboutPage: NextPageWithLayout<Props> = ({ members }) => {
  return (
    <>
      <Head>
        <title>About - Duo Design Lab</title>
      </Head>
      <AboutHero />
      <Capibilities />
      <Members members={members} />
      <Ready>
        <ReadyVisualThree className="w-full sm:max-w-xl text-ddl_offwhite" />
      </Ready>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default AboutPage
