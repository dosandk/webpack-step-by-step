const path = require('path');

const config = {
  mode: 'development',
  target: 'web',
  entry: {
    app: path.join(__dirname, './src/entry-point.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist'),
  }
};

module.exports = config;
