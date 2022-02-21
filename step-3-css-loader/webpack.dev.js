const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.join(__dirname, './src/index.js'),
    styles: path.join(__dirname, './src/styles.css')
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name]-[id].js'
  },
  devServer: {
    port: 9002,
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
  ]
};
