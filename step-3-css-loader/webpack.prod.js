const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.join(__dirname, './src/index.js')
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
    chunkFilename: '[name]-[id].js'
  }
};
