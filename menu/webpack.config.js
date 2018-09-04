var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.json$/i,
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
};
