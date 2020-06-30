const path = require('path');

module.exports = env => {
  const production = env === 'production' || process.env.NODE_ENV === 'production';

  return {
    context: __dirname,
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-maps' : 'inline-source-map',
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'entry-bundle.js',
      libraryTarget: 'system',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devServer: {
      port: 4200,
      liveReload: false,
      historyApiFallback: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    module: {
      rules: [
        {
          parser: {
            system: false,
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.ts$/i,
          use: ['ts-loader', '@aurelia/webpack-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.html$/i,
          use: '@aurelia/webpack-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
};
