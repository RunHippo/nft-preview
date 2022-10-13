const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, PROJECT_PATH } = require('./constants');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      openAnalyzer: false,
    }),
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      scriptLoading: 'blocking',
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 9003,
    compress: true,
    open: true,
    hot: true,
  },
});
