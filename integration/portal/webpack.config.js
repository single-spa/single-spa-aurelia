const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/portal.ts',
  output: {
    publicPath: '/',
    filename: 'portal.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
};
