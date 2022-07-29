import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex h-24 bg-ddl_brand_light">
      <div className="flex items-center w-full ddl-container">
        <div className="flex items-center gap-20">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="font-normal text-link-size text-ddl_dark">
            Facebook
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="font-normal text-link-size text-ddl_dark">
            Instagram
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer" className="font-normal text-link-size text-ddl_dark">
            LinkedIn
          </a>
        </div>
        <span className="ml-auto font-normal text-link-size text-ddl_dark">@{new Date().getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer
