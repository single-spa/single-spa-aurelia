const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, { mode }) => {
  const port = 4200;
  const sourceDirectory = path.resolve(__dirname, 'src');

  const isProduction = mode === 'production';

  return {
    context: __dirname,
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      libraryTarget: 'system',
      publicPath: `http://localhost:${port}/`,
    },
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'source-maps' : 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [sourceDirectory, 'node_modules'],
      mainFields: ['module', 'main'],
      plugins: [new TsconfigPathsPlugin()],
    },
    devServer: {
      port,
      hot: false,
      open: false,
      liveReload: false,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
      },
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  };
};
