import React from 'react'

interface Props {
  className?: string
}

const LinkArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M9.2612 9.51847L9.2612 12.4298L20.7932 12.4402L8.22879 25.0045L10.2936 27.0694L22.858 14.505L22.8683 26.037H25.7797V9.51847H9.2612Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default LinkArrow
