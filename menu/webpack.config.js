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
      filename: 'app.bundle.js',
      publicPath: env === 'production' ? '' : '',
      sourceMapFilename: 'app.bundle.js.map'
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
          test: /\.(jpg|png|gif|svg|pdf|ico)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.(eot|ttf|otf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          options: {
            name: 'styles/[name].[ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Portfolio by Andrey Alekseev',
        files: {
          "css": [ "./styles/css/main.css" ],
        }
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
