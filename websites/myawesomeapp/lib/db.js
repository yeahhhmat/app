const { Deta } = require('deta');
export const deta = Deta(process.env.DETA_BASE_API_KEY); 

// export const shopStorage = deta.Base('shopStorage');
// export const imageStorage = deta.Base('imageStorage');
