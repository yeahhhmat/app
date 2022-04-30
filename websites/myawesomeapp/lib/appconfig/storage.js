// renders via server
import { deta } from '../db';
const appConfigInStorage = deta.Base('appConfigInStorage');

/**
 * 
 * @param {{debug_strings:false,style_productForProductGrid_textAlignment:'left'|'center'|'right'}} params
 * @returns 
 */
export const setAppConfigInStorage = async ({
  /** debug_strings should remain false */
  debug_strings = false,
  style_productForProductGrid_textAlignment = 'left' /** default */
}) => {
  const updatedConfig = await appConfigInStorage.put({
    /** debug_strings should remain false */
    debug_strings: false,
    style_productForProductGrid_textAlignment,
  })
  return updatedConfig;
}