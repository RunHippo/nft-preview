const { resolve, PROJECT_PATH } = require('./constants');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // 定义了入口文件路径
  entry: {
    index: resolve(PROJECT_PATH, './src/index.tsx'),
  },
  // 定义了编译打包之后的文件名以及所在路径。还有打包的模块类型
  output: {
    // 打包后的产物名
    filename: 'media-player.js',
    // 在全局变量中增加一个libraryStarter变量
    library: 'MediaPlayer',
    // 打包成umd模块
    libraryTarget: 'umd',
    // libraryExport这个属性需要设置，否则导出后，外层会包有一层default
    libraryExport: 'default',
    // 路径
    path: resolve(PROJECT_PATH, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { icon: true },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@docs': resolve(__dirname, '../docs'),
      '@public': resolve(__dirname, '../public'),
      '@test': resolve(__dirname, '../test'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new WebpackBar({
      name: 'build...',
      color: '#fff',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};
