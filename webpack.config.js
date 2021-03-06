const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractTextPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/scripts.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'scripts.js',
    path: Path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractTextPlugin.loader,
            options: {
            }
          },
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCSSExtractTextPlugin({
      filename: 'styles.css'
    }),
    new webpack.DefinePlugin({
      __PROD__: JSON.stringify(false),
      __DEV__: JSON.stringify(true),
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};
