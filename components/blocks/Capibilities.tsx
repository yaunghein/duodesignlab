import React from 'react'
import Link from 'next/link'

// elements
import Capibility from '$elements/Capibility'

const Capibilities: React.FC = () => {
  return (
    <section className="bg-ddl_offwhite pt-28">
      <div className="ddl-container">
        <div className="flex items-end">
          <h2 className="mr-auto main-title text-ddl_dark">Capibilities</h2>
          <Link href="/capibilities">
            <a className="underline text-link-size text-ddl_dark whitespace-nowrap">See All</a>
          </Link>
        </div>

        <div className="grid gap-2 mt-12">
          <Capibility
            title="Branding"
            description="To effectively communicate your purpose and your business to your customers, a good brand identity is a must-have. We can craft you an effective brand identity based on what you stand for and what makes you unique."
          />
          <Capibility
            title="Web Development"
            description="To effectively communicate your purpose and your business to your customers, a good brand identity is a must-have. We can craft you an effective brand identity based on what you stand for and what makes you unique."
          />
        </div>
      </div>
    </section>
  )
}

export default Capibilities
