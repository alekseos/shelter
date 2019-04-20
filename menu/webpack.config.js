var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env && env.mode ? env.mode : 'development',
    entry: './src/index.tsx',
    output: {
      // path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/i,
          use: {
            loader: 'babel-loader',
          },
          exclude: '/node_modules/'
        },
        {
          test: /\.tson$/i,
          loader: 'json-loader'
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              },
            },
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    }
  }  
};
