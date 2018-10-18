const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.komachine.com/admin/' : '',
});
