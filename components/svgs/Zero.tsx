import React from 'react'

interface Props {
  className?: string
}

const Zero: React.FC<Props> = ({ className }) => {
  return (
    <svg viewBox="0 0 329 255" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M327.815 112.142C335.195 190.082 273.685 244.342 175.925 253.602C77.7253 262.902 8.08528 221.952 0.625277 143.132C-6.88472 63.862 53.8252 10.5719 152.025 1.27194C249.795 -7.98806 320.395 33.7519 327.815 112.142ZM29.2453 140.422C34.9653 200.752 91.1053 230.532 173.005 222.772C255.355 214.972 304.465 175.222 298.755 114.892C293.045 54.5619 237.335 24.742 154.995 32.532C73.0853 40.292 23.5453 80.092 29.2453 140.422Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Zero
