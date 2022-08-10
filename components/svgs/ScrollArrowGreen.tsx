import React from 'react'

// third-parties
import { motion } from 'framer-motion'

interface Props {
  className?: string
}

const ScrollArrowGreen: React.FC<Props> = ({ className }) => {
  return (
    <motion.svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <circle cx="25" cy="25" r="25" fill="#124734" />
      <path
        d="M36.1113 25L34.153 23.0417L26.3891 30.7917L26.3891 13.8889L23.6113 13.8889L23.6113 30.7917L15.8474 23.0417L13.8891 25L25.0002 36.1111L36.1113 25Z"
        fill="#CEDFD7"
      />
    </motion.svg>
  )
}

export default ScrollArrowGreen
