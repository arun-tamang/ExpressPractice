var path = require('path');
const webpack = require('webpack');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var BUILD_DIR = path.resolve(__dirname, './public');
var CLIENT_APP_DIR = path.resolve(__dirname, './src/client');

const browserConfig = {
  entry: CLIENT_APP_DIR + '/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
};

var SERVER_APP_DIR = path.resolve(__dirname, './src/server');
const serverConfig = {
  entry: SERVER_APP_DIR + '/index.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server.js',
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
};

module.exports = [browserConfig, serverConfig];