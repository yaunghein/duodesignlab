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
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-44 md:pt-64 ddl-container">
        <div className="-mt-7">
          <h1 className="text-big-visual md:main-title">{member.name}</h1>
          <div className="flex flex-col mt-5 lg:flex-row lg:mt-20">
            <p className="font-medium text-body whitespace-nowrap">{member.position}</p>
            <div className="my-8 lg:hidden">
              <BlurImage alt={member.name} src={member.image} width={1294} height={1528} />
            </div>
            <div className="flex flex-wrap max-w-sm lg:ml-48 lg:gap-x-12 gap-y-8">
              <a href={`mailto:${member.email}`} className="w-full font-medium underline text-body">
                {member.email}
              </a>
              {member.linkedIn && (
                <a href={member.linkedIn} target="_blank" rel="noreferrer" className="w-1/2 font-medium underline lg:w-auto text-body">
                  LinkedIn
                </a>
              )}
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer" className="w-1/2 font-medium underline lg:w-auto text-body">
                  GitHub
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" rel="noreferrer" className="w-1/2 font-medium underline lg:w-auto text-body">
                  Facebook
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noreferrer" className="w-1/2 font-medium underline lg:w-auto text-body">
                  Instagram
                </a>
              )}
            </div>
          </div>
          <div
            className="grid gap-6 mt-8 font-normal lg:mt-20 lg:gap-12 text-body"
            dangerouslySetInnerHTML={{ __html: member.biography }}
          />
        </div>
        <div className="relative hidden lg:block px-28">
          <div className="sticky top-24">
            <BlurImage alt={member.name} src={member.image} width={1294} height={1528} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberHero
