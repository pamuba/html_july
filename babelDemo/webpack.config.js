const path = require('path')

module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        // loader: 'babel-loader',
        // options: {
        //     presets: ['@babel/preset-env'] // <-- here
        // }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    output: {
      path: __dirname + '/build',
      publicPath: '/',
      filename: 'app.bundle.js'
    },
    devServer: {
      contentBase: './build'
    }
  };