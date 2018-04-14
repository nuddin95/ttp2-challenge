const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './CalendarFrontEnd/index.js', // assumes your entry point is the index.js in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname+'/CalendarFrontEnd/public',
      filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        }, 
        { 
          test: /\.css$/, 
          loader: 'style-loader!css-loader' 
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    }
  }