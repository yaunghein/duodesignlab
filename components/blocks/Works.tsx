import React from 'react'
import Link from 'next/link'

// elements
import Work from '$elements/Work'

const Works: React.FC = () => {
  return (
    <section className="bg-ddl_offwhite py-28">
      <div className="ddl-container">
        <div className="flex items-end">
          <h2 className="mr-auto main-title text-ddl_dark">Our Works</h2>
          <Link href="/works">
            <a className="underline text-link-size text-ddl_dark whitespace-nowrap">See All</a>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-12">
          <Work title="Paing Mentoring Family" scope="Website Design Concept" image="/assets/works/paing-mentoring-family.jpg" />
          <Work title="Kyaw San Htoo Pharmacy" scope="Website Design Concept" image="/assets/works/paing-mentoring-family.jpg" />
        </div>
      </div>
    </section>
  )
}

export default Works
