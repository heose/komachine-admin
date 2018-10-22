const path = require('path');
const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.komachine.com/admin/' : '',
  webpack(config, options) {
    const extendAlias = {
      components: path.resolve(__dirname, 'components/')
    };
    config.resolve.alias = { ...config.resolve.alias, ...extendAlias};
    return config;
  }
});
