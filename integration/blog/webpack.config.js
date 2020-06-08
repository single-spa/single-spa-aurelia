const path = require('path');

const cssLoader = 'css-loader';

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()],
  },
};

module.exports = env => {
  const production = env === 'production' || process.env.NODE_ENV === 'production';

  return {
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-maps' : 'inline-source-map',
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'entry-bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devServer: {
      port: 4200,
      historyApiFallback: false,
    },
    module: {
      rules: [
        { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
        {
          test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: 'url-loader',
          options: { limit: 10000, mimetype: 'application/font-woff2' },
        },
        {
          test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
          loader: 'url-loader',
          options: { limit: 10000, mimetype: 'application/font-woff' },
        },
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
        { test: /\.css$/i, use: ['style-loader', cssLoader, postcssLoader] },
        { test: /\.ts$/i, use: ['ts-loader', '@aurelia/webpack-loader'], exclude: /node_modules/ },
        { test: /\.html$/i, use: '@aurelia/webpack-loader', exclude: /node_modules/ },
      ],
    },
  };
};
