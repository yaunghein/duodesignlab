import React from 'react'

interface Props {
  className?: string
}

const Four: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 231 308" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M195.516 233.291L219.336 296.171L190.336 307.171L166.516 244.301L10.9864 303.211L0.986328 276.731L67.4663 15.031L107.176 0.0310059L185.466 206.821L220.216 193.651L230.216 220.131L195.516 233.291ZM156.516 217.781L89.7863 41.561L33.2663 264.471L156.516 217.781Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Four
