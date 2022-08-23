import React, { useState, useEffect, useRef } from 'react'

// hooks
import useMousePosition from '$hooks/useMousePosition'

interface Props {
  className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
  const [track, setTrack] = useState({ x: 0, y: 0 })
  const ref = useRef<SVGSVGElement>(null)
  const { mousePosition } = useMousePosition()

  useEffect(() => {
    if (ref.current) {
      const logo = ref.current
      const logoPosition = {
        x: Math.ceil(logo.getBoundingClientRect().x + logo.getBoundingClientRect().width / 2),
        y: Math.ceil(logo.getBoundingClientRect().y + logo.getBoundingClientRect().height / 2),
      }
      const mousePositionToLogo = {
        x: logoPosition.x - mousePosition.x,
        y: mousePosition.y - logoPosition.y,
      }
      setTrack({
        x: Number((mousePositionToLogo.x / window.innerWidth).toFixed(1)),
        y: Number((mousePositionToLogo.y / window.innerHeight).toFixed(1)),
      })
    }
  }, [mousePosition])

  return (
    <svg ref={ref} viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M45 0C20.1857 0 0 20.1857 0 45C0 69.8143 20.1857 90 45 90C69.8143 90 90 69.8143 90 45C90 20.1857 69.8143 0 45 0ZM45.0334 85.2094C22.8253 85.2094 4.824 67.2094 4.824 45C4.824 22.7906 22.824 4.79057 45.0334 4.79057C67.2429 4.79057 85.2429 22.7931 85.2429 45C85.2429 67.2069 67.2429 85.2094 45.0334 85.2094Z"
        fill="currentColor"
      />
      <path
        d="M61.3736 25.7142H54.3561V44.9999H61.5407C67.113 44.9999 71.0049 41.0502 71.0049 35.3931C71.0049 29.6999 67.0436 25.7142 61.3736 25.7142ZM59.1801 30.2978H61.0856C64.2163 30.2978 66.0124 32.1557 66.0124 35.3931C66.0124 38.5855 64.278 40.4164 61.2553 40.4164H59.1801V30.2978Z"
        fill="currentColor"
        className="transition"
        style={{
          transform: `translate(${-track.x * 10}px, ${track.y * 10}px)`,
        }}
      />
      <path
        d="M26.3018 25.7142H19.2857V44.9999H26.4703C32.0413 44.9999 35.9331 41.0502 35.9331 35.3931C35.9331 29.6999 31.9731 25.7142 26.3018 25.7142ZM24.1084 40.4164V30.2978H26.0138C29.1458 30.2978 30.942 32.1557 30.942 35.3931C30.942 38.5855 29.2076 40.4164 26.1848 40.4164H24.1084Z"
        fill="currentColor"
        className="transition"
        style={{
          transform: `translate(${-track.x * 10}px, ${track.y * 10}px)`,
        }}
      />
      <path
        d="M43.3941 51.4286H38.5714V70.7143H51.4286V66.132H43.3941V51.4286Z"
        fill="currentColor"
        className="transition"
        style={{
          transform: `translate(${-track.x * 10}px, ${track.y * 10}px)`,
        }}
      />
    </svg>
  )
}

export default Logo
