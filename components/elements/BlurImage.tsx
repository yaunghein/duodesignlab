import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

// utils
import cn from '$utils/cn'

interface Props {
  src: string
  alt: string
  width: number
  height: number
}

const BlurImage: React.FC<Props> = ({ src, alt, width, height }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('duration-700 ease-in-out', isLoading ? 'grayscale blur-md scale-105' : 'grayscale-0 blur-0 scale-100')}
      onLoadingComplete={() => setLoading(false)}
    />
  )
}

export default BlurImage
