var path = require('path');

module.exports = (mode) => {
  console.log(mode);
  return {
    mode,
    entry: './src/index.jsx',
    output: {
      // path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: '/node_modules/'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
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
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000,
    }
  }  
};
