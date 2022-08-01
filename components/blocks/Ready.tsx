import React, { FunctionComponent } from 'react'
import Link from 'next/link'

// svgs
import LinkArrow from '$svgs/LinkArrow'
import ReadyVisualOne from '$svgs/ReadyVisualOne'

interface Props {
  children: React.ReactNode
}

const Ready: React.FC<Props> = ({ children }) => {
  return (
    <section className="bg-ddl_brand">
      <div className="flex items-center justify-center h-[calc(100vh-6rem)] ddl-container">
        <div className="flex items-center gap-24 mx-auto max-w-[90rem]">
          <h2 className="sr-only">Ready?</h2>
          {children}

          <div className="flex flex-wrap items-center flex-grow gap-y-5">
            <span className="w-[20%] text-body font-normal text-ddl_offwhite">Send</span>

            <div className="w-[70%] flex items-center gap-16">
              <Link href="/work-with-us">
                <a className="flex items-center">
                  <span className="font-bold text-body text-ddl_offwhite">Brief</span>
                  <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
                </a>
              </Link>
              <a href="mailto:duodesignlab.com" className="flex items-center">
                <span className="font-bold text-body text-ddl_offwhite">Email</span>
                <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
              </a>
            </div>

            <span className="w-[20%] text-body font-normal text-ddl_offwhite">Call</span>

            <div className="w-[70%] flex items-center gap-16">
              <a href="tel:+959 123 456 789" className="flex items-center">
                <span className="font-bold text-body text-ddl_offwhite whitespace-nowrap">+959 123 456 789</span>
                <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
              </a>
              <a href="tel:+959 123 456 789" className="flex items-center">
                <span className="font-bold text-body text-ddl_offwhite whitespace-nowrap">+959 123 456 789</span>
                <LinkArrow className="-mb-1 w-9 h-9 text-ddl_offwhite" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ready
