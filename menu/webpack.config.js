const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, "");
const SRC_DIR = `${ROOT_DIR}/src`;

module.exports = (env) => {
  return {
    mode: env && env.mode ? env.mode : 'development',
    entry: `${SRC_DIR}/index.tsx`,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js?|jsx?|ts?|tsx?)$/,
          loader: 'babel-loader'
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
    resolve: {
      alias: {
        App: `${SRC_DIR}`,
        Actions: `${SRC_DIR}/actions`,
        Components: `${SRC_DIR}/components`,
        Constants: `${SRC_DIR}/constants`,
        Data: `${SRC_DIR}/data`,
        Extentions: `${SRC_DIR}/extentions`,
        Images: `${SRC_DIR}/images`,
        Reducers: `${SRC_DIR}/reducers`,
        Screens: `${SRC_DIR}/screens`
      },
      extensions:
        ['.js', '.jsx', '.ts', '.tsx', '.json']
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
