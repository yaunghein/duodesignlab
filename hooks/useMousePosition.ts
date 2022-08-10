import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

export default useMousePosition
