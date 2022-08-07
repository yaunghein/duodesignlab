import React from 'react'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

// layouts
import MainLayout from '$layouts/MainLayout'

// blocks
import Hero from '$blocks/Hero'
import ContactForm from '$blocks/ContactForm'

const WorkWithUs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Work With Us - Duo Design Lab</title>
      </Head>
      <Hero title="Start A Project" />
      <section id="next-section" className="py-8 bg-white md:py-28">
        <div className="grid grid-cols-1 ddl-container lg:grid-cols-2">
          <div className="relative">
            <div className="max-w-lg lg:sticky top-28">
              <h2 className="secondary-title text-ddl_dark">Contact Information</h2>
              <div className="flex flex-wrap mt-5 lg:mt-20 gap-y-5 lg:gap-y-10">
                <a href="mailto:contact@duodesignlab.com" className="w-full font-medium underline text-body text-ddl_dark">
                  contact@duodesignlab.com
                </a>
                <a href="tel:09123456789" className="mr-12 font-medium lg:mr-auto text-body text-ddl_dark">
                  09 123 456 789
                </a>
                <a href="tel:09123456789" className="font-medium text-body text-ddl_dark">
                  09 123 456 789
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-0">
            <h2 className="mb-5 lg:mb-20 secondary-title text-ddl_dark">Write Brief</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

WorkWithUs.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default WorkWithUs
