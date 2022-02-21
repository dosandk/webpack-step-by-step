const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.join(__dirname, './src/entry-point.js')
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.[hash].js',
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name]-[id].js'
  },
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    devMiddleware: {
      index: true,
      publicPath: '/',
      writeToDisk: true,
    },
    client: {
      progress: true,
      logging: 'log',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
  ]
};
