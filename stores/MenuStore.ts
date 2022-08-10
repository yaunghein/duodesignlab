import create from 'zustand'

export type MenuThemeType = 'ddl_brand' | 'ddl_brand_light' | 'white'

interface MenuState {
  menuTheme: MenuThemeType
  changeMenuTheme: (type: MenuThemeType) => void
}

const useMenuStore = create<MenuState>((set) => ({
  menuTheme: 'ddl_brand',
  changeMenuTheme: (theme) => set(() => ({ menuTheme: theme })),
}))

export default useMenuStore
