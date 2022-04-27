import create from 'zustand'

export const appConfig = {  
  /* use to identify origins of all strings in UI */
  debug_strings: false,

  /* text alignment for ProductForProductGrid */
  style_productForProductGrid_textAlignment: 'left', /* 'right' | 'center' */

  /* role types that will be assigned upon account creation */
  role_type__APP_ADMIN: 'APP_ADMIN',
  role_type__APP_ADMIN_GUEST: 'APP_ADMIN_GUEST',
  role_type__ADMIN: 'ADMIN',
  role_type__ADMIN_GUEST: 'ADMIN_GUEST',
  role_type__USER: 'USER',
}
 

export const useStore = create((set) => ({
  state_productForProductGrid_textAlignment: appConfig.style_productForProductGrid_textAlignment,
  setState_productForProductGrid_textAlignment: (args) => set((state) => ({
    state_productForProductGrid_textAlignment: args
  })),

  
  state_adminCurrentTab: 'dashboard',
  setState_adminCurrentTab: (args) => set((state) => ({
    state_adminCurrentTab: args
  })),

  state_landingpageModule: false,
  setState_landingpageModule: (args) => set((state) => ({
    state_landingpageModule: args
  })),
}))

