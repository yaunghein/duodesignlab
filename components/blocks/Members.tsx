import React from 'react'

// types
import { MemberType } from '$types/memberTypes'

// elements
import Member from '$elements/Member'

interface Props {
  members: MemberType[]
}

const Members: React.FC<Props> = ({ members }) => {
  return (
    <section className="py-8 bg-white md:py-28">
      <div className="ddl-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center main-title text-ddl_dark">Founding Members</h2>
          <div className="grid grid-cols-1 gap-2 mt-5 lg:grid-cols-2 md:mt-12">
            {members.map((member) => (
              <Member key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
