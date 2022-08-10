import create from 'zustand'

export type CursorType = 'normal_brand' | 'normal_brand_light' | 'hover_brand' | 'hover_brand_light' | 'bubble' | 'work' | 'member'

interface MenuState {
  cursorType: CursorType | ''
  changeCursorType: (type: CursorType) => void
  resetCursorType: () => void
}

const useCursorStore = create<MenuState>((set) => ({
  cursorType: 'normal_brand',
  changeCursorType: (type) => set(() => ({ cursorType: type })),
  resetCursorType: () => set(() => ({ cursorType: '' })),
}))

export default useCursorStore
