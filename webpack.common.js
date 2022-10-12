/**
 * Webpack - Get Started
 *
 * @see https://webpack.js.org/guides/getting-started/
 * @see https://webpack.js.org/configuration/
 */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
const HtmlWebpackPlugin = require('html-webpack-plugin'); // https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin

module.exports = {
  /**
   * @see https://webpack.js.org/configuration/entry-context/
   */
  entry: {
    index: './src/index.tsx',
  },
  /**
   * @see https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    /**
     *
     * @see https://github.com/jantimon/html-webpack-plugin
     */
    new HtmlWebpackPlugin(),
    /**
     *
     * @see https://github.com/johnagan/clean-webpack-plugin
     */
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['./dist'],
    }),
    /**
     * Hot Module Replacement
     * @see https://webpack.js.org/guides/hot-module-replacement/
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      /**
       * Typescript
       * @see https://webpack.js.org/guides/typescript/
       * @see https://webpack.js.org/loaders/babel-loader/
       */
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['last 2 versions'],
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-typescript'],
            },
          },
          { loader: 'ts-loader' },
        ],
      },
      /**
       * We chain here that we can import CSS, SASS and LESS files into our Porject
       *
       * @see https://webpack.js.org/guides/asset-management/#loading-css
       * @see https://webpack.js.org/concepts/loaders/#configuration
       */
      {
        test: /\.(less|s?css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
          // { loader: 'less-loader' }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  /**
   * Output Management
   * @see https://webpack.js.org/guides/output-management/
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};
