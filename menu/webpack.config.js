const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, "");
const SRC_DIR = `${ROOT_DIR}/src`;

module.exports = (env) => {
  return {    
    context: ROOT_DIR,
    mode: env && env.mode ? env.mode : 'development',
    devtool: 'source-map',
    entry: `${SRC_DIR}/index.tsx`,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: env && env.mode === 'production' ? '' : '/dist/'
    },
    resolve: {
      extensions:
        ['.js', '.jsx', '.ts', '.tsx', '.json'],
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
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)?$/,
          exclude: /(node_modules)/,
          loader: 'ts-loader'
        },
        {
          test: /\.tson$/i,
          loader: 'json-loader'
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'src/images/[name].[ext]'
              },
            },
          ]
        },
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          }
        },
        {
          test: /\.css$/,
          use: [ 'css-loader' ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Portfolio by Andrey Alekseev'
      })
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    }
  }  
};
