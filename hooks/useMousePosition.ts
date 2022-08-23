import { useState, useEffect, useCallback } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrack, setMouseTrack] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })

    if (window) {
      setMouseTrack({
        x: Number((e.clientX / window.innerWidth).toFixed(2)),
        y: Number((e.clientY / window.innerHeight).toFixed(2)),
      })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return { mousePosition, mouseTrack }
}

export default useMousePosition
