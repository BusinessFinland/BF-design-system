const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '.styleguide', 'index.js'),
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    host: '0.0.0.0',
    port: 8080
  },
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '.styleguide', 'public', 'index.html'),
      filename: path.resolve('dist/index.html')
    }),
    new CopyWebpackPlugin([
      { from: 'assets/css', to: 'assets/css' },
      { from: 'package.template.json', to: 'package.json' }
    ])
  ]
};
