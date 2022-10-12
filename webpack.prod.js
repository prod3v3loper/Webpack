/**
 *
 * @see https://webpack.js.org/guides/production/
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  /**
   *
   * @see https://webpack.js.org/guides/tree-shaking/
   */
  optimization: {
    minimize: true,
  },
});
