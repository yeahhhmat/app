import create from 'zustand'

export const appConfig = {
  /* use to identify origins of all strings in UI */
  debug_strings: false,
  style_productForProductGrid_textAlignment: 'left', /* 'right' | 'center' */
}

export const useStore = create((set) => ({
  state_productForProductGrid_textAlignment: appConfig.style_productForProductGrid_textAlignment,
  setState_productForProductGrid_textAlignment: (args) => set((state) => ({
    state_productForProductGrid_textAlignment: args
  })),
}))