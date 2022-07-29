import React from 'react'
import { NextPageWithLayout } from './_app'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import HomeHero from '$blocks/HomeHero'
import Capibilities from '$blocks/Capibilities'
import Works from '$blocks/Works'
import Ready from '$blocks/Ready'

// home page pee yin git sa thone tot
const Home: NextPageWithLayout = () => {
  return (
    <>
      <HomeHero />
      <Capibilities />
      <Works />
      <Ready />
    </>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default Home
