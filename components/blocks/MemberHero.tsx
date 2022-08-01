import React from 'react'

// types
import { MemberType } from '$types/memberTypes'

// elements
import BlurImage from '$elements/BlurImage'

interface Props {
  member: MemberType
}

const MemberHero: React.FC<Props> = ({ member }) => {
  return (
    <section className="bg-white text-ddl_dark">
      <div className="flex pt-64 ddl-container">
        <div className="w-1/2 -mt-7">
          <h1 className="main-title">{member.name}</h1>
          <div className="flex mt-20">
            <p className="font-medium text-body whitespace-nowrap">{member.position}</p>
            <div className="flex flex-wrap max-w-sm ml-48 gap-x-12 gap-y-8">
              <a href={`mailto:${member.email}`} className="w-full font-medium underline text-body">
                {member.email}
              </a>
              {member.linkedIn && (
                <a href={member.linkedIn} target="_blank" rel="noreferrer" className="font-medium underline text-body">
                  LinkedIn
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="font-medium underline text-body">
                  GitHub
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noreferrer" className="font-medium underline text-body">
                  Facebook
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noreferrer" className="font-medium underline text-body">
                  Instagram
                </a>
              )}
            </div>
          </div>
          <div className="grid gap-12 mt-20 font-normal text-body" dangerouslySetInnerHTML={{ __html: member.biography }} />
        </div>
        <div className="relative w-1/2 px-28">
          <div className="sticky top-24">
            <BlurImage alt={member.name} src={member.image} width={1294} height={1528} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberHero
