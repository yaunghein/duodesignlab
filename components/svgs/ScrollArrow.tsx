import React from 'react'

interface Props {
  className?: string
}

const ScrollArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
      <path
        d="M36.1111 25L34.1528 23.0417L26.3889 30.7917L26.3889 13.8889L23.6111 13.8889L23.6111 30.7917L15.8472 23.0417L13.8889 25L25 36.1111L36.1111 25Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default ScrollArrow
