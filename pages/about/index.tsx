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
import Capabilities from '$blocks/Capabilities'
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
        <meta
          content="We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s."
          name="description"
        />
        <meta content="About - Duo Design Lab" property="og:title" />
        <meta
          content="We are a boutique web design studio based in Yangon, Myanmar. We create high performing websites that are safe and easy to maintain. We also make sure that the websites we created are aligned with the client business needs as well as the audience’s."
          property="og:description"
        />
      </Head>
      <AboutHero />
      <Capabilities />
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
