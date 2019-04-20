var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  console.log(env);
  return {
    mode: env.mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/'
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
    // plugins: [
    //   new htmlWebpackPlugin()
    // ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    }
  }  
};
