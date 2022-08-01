import React from 'react'

interface Props {
  className?: string
}

const RightArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M11.1111 0.777833L9.15278 2.73617L16.9028 10.5001L-5.40908e-07 10.5001L-6.95453e-07 13.2778L16.9028 13.2778L9.15278 21.0417L11.1111 23.0001L22.2222 11.8889L11.1111 0.777833Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default RightArrow
