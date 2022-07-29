import React from 'react'
import Link from 'next/link'

// svgs
import LogoWhite from '$svgs/LogoWhite'

const Navigation = () => {
  return (
    <header className="absolute w-full top-14">
      <div className="flex items-center ddl-container">
        <div className="flex items-center gap-20 mr-auto">
          <Link href="/">
            <a className="font-bold uppercase text-ddl_offwhite text-link-size">Home</a>
          </Link>
          <Link href="/works">
            <a className="font-normal uppercase text-ddl_offwhite text-link-size">Works</a>
          </Link>
          <Link href="/about">
            <a className="font-normal uppercase text-ddl_offwhite text-link-size">About</a>
          </Link>
          <Link href="/capabilities">
            <a className="font-normal uppercase text-ddl_offwhite text-link-size">Capabilities</a>
          </Link>
          <Link href="/work-with-us">
            <a className="font-normal uppercase text-ddl_offwhite text-link-size">Work With Us</a>
          </Link>
        </div>
        <LogoWhite className="w-[5.625rem] h-[5.625rem] text-ddl_offwhite" />
      </div>
    </header>
  )
}

export default Navigation
