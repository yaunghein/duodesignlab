import React, { useState, useEffect, useCallback } from 'react'

// third-parties
import { motion } from 'framer-motion'

// hooks
import useMousePosition from '$hooks/useMousePosition'
import useWindowSize from '$hooks/useWindowSize'

// stores
import useCursorStore from '$stores/CursorStore'

const Cursor: React.FC = () => {
  const [isMousePress, setIsMousePress] = useState(false)
  const { cursorType } = useCursorStore()
  const { width } = useWindowSize()
  const mousePosition = useMousePosition()

  // to have a scale effect on cursor when click
  useEffect(() => {
    const handleMouseDown = () => setIsMousePress(true)
    const handleMouseUp = () => setIsMousePress(false)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const getCursorClasses = useCallback(() => {
    switch (cursorType) {
      case 'normal_brand':
        return 'w-8 h-8 bg-ddl_brand border-2 border-ddl_brand'
      case 'normal_brand_light':
        return 'w-8 h-8 bg-ddl_brand_light border-2 border-ddl_brand_light'
      case 'hover_brand':
        return 'w-28 h-28 border-2 2xl:border-[4px] border-ddl_brand'
      case 'hover_brand_light':
        return 'w-28 h-28 border-2 2xl:border-[4px] border-ddl_brand_light'
      case 'bubble':
        return 'w-28 h-28 border-2 2xl:border-[4px] border-ddl_brand_light backdrop-blur-sm text-ddl_brand_light'
      case 'work':
      case 'member':
        return 'w-32 h-32 border-2 2xl:border-[4px] border-ddl_brand_light backdrop-blur-sm text-ddl_brand_light'
      default:
        return ''
    }
  }, [cursorType])

  const getCursorLabelProperties = useCallback(() => {
    const cursorTypesToShowLabel = ['bubble', 'work', 'member']
    let isLabelShow = cursorTypesToShowLabel.includes(cursorType)
    let labelText = ''

    switch (cursorType) {
      case 'bubble':
        labelText = 'Click'
        break
      case 'work':
        labelText = 'View Project'
        break
      case 'member':
        labelText = 'Know More About Him'
        break
      default:
        labelText = ''
    }

    return { isLabelShow, labelText }
  }, [cursorType])

  if (width < 640) {
    return null
  }

  return (
    <div
      className="fixed z-50 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
    >
      <div
        className={`grid place-items-center rounded-full transition-all duration-200 
        ${getCursorClasses()} 
        ${isMousePress ? 'scale-[0.8]' : ''}`}
      >
        {getCursorLabelProperties().isLabelShow && (
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-medium text-center">
            {getCursorLabelProperties().labelText}
          </motion.span>
        )}
      </div>
    </div>
  )
}

export default Cursor
