import React from 'react'

interface Props {
  className?: string
}

const LeftArrow: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M11.1115 23.1113L13.0699 21.153L5.31988 13.3891L22.2227 13.3891L22.2227 10.6113L5.31988 10.6113L13.0699 2.84744L11.1115 0.889108L0.000437754 12.0002L11.1115 23.1113Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default LeftArrow
