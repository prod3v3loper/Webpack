/**
 *
 * @see https://webpack.js.org/guides/development/
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  /**
   *
   * @see https://webpack.js.org/guides/tree-shaking/
   */
  optimization: {
    usedExports: true,
  },
  devtool: 'inline-source-map', // https://webpack.js.org/guides/development/#using-source-maps
  /**
   *
   * @see https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
    static: path.join(__dirname, 'dist'), // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserver-hot
    compress: true, // https://webpack.js.org/configuration/dev-server/#devserver-compress
    server: true,
    // port: 9000, // Activate if your port 8080 is used
  },
});
