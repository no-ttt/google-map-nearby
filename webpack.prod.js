const { merge } = require('webpack-merge'),
  common = require('./webpack.common.js'),
  webpack = require('webpack')
//TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: [ // 設定相依套件 (安裝此Component的使用者必須安裝的模組)
    {
      react: 'react',
      'react-dom': 'react-dom',
      'prop-types': 'prop-types',
    },
  ]
})