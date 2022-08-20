export type WorkScopeType = 'Branding' | 'Web Design' | 'Web Development' | 'Webflow Development'

export type WorkFilterType = 'All' | WorkScopeType

type OwnerType = 'Aung Pyae Kyaw' | 'Yan Aung Hein' | undefined

export type ImageType = {
  path: string
  width: number
  height: number
}

export interface WorkType {
  id: string
  name: string
  slug: string
  description: string
  scope: WorkScopeType[]
  year: string
  website: string
  owners: OwnerType[]
  images: ImageType[]
  more: {
    next?: {
      name: string
      slug: string
    }
    prev?: {
      name: string
      slug: string
    }
  }
  personal: boolean
}

export interface WorkThumbnailType {
  id: string
  name: string
  scope: WorkScopeType[]
  image: ImageType
  slug: string
}
