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
    <section className="bg-white py-28">
      <div className="ddl-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center main-title text-ddl_dark">Founding Members</h2>
          <div className="grid grid-cols-2 gap-2 mt-12">
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
