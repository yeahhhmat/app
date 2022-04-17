import create from 'zustand'

export const appConfig = {
  /* use to identify origins of all strings in UI */
  debug_strings: false,

  /* text alignment for ProductForProductGrid */
  style_productForProductGrid_textAlignment: 'left', /* 'right' | 'center' */
}

export const useStore = create((set) => ({
  state_productForProductGrid_textAlignment: appConfig.style_productForProductGrid_textAlignment,
  setState_productForProductGrid_textAlignment: (args) => set((state) => ({
    state_productForProductGrid_textAlignment: args
  })),

  
  state_adminCurrentTab: 'dashboard',
  setState_adminCurrentTab: (args) => set((state) => ({
    state_adminCurrentTab: args
  }))
}))

