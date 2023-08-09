const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'}),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
};