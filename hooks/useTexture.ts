import { useState, useEffect } from 'react'

type TextureType = 'one' | 'two' | 'three' | 'four'

const textures: TextureType[] = ['one', 'two', 'three', 'four']

const useTexture = () => {
  const [texture, setTexture] = useState<TextureType>('one')

  useEffect(() => {
    setTexture(textures[Math.floor(Math.random() * textures.length)])
  }, [])

  return `/assets/textures/${texture}.jpg`
}

export default useTexture
