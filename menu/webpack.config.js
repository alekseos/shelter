const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

const ROOT_DIR = path.resolve(__dirname, "");
const SRC_DIR = `${ROOT_DIR}/src`;

module.exports = (env) => {
  return {    
    entry: `${SRC_DIR}/index.tsx`,
    mode: env && env.mode ? env.mode : 'development',
    devtool: '#source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[chunkhash:7].js',
      publicPath: env === 'production' ? '' : '',
      sourceMapFilename: '[chunkhash:7].js.map'
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
        Screens: `${SRC_DIR}/screens`,
        Styles: `${SRC_DIR}/styles`,
        Utils: `${SRC_DIR}/utils`
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(jpg|png|gif|pdf|ico)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'react-svg-loader'
            }
          ]
        },
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        // title: 'Portfolio by Andrey Alekseev',
        title: 'Shelter project',
      }),
      new HtmlWebpackRootPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    }
  }  
};
