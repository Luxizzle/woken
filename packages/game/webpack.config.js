const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devtool: 'source-map',
  mode: process.NODE_ENV || 'production',

  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },

  plugins: [new CheckerPlugin()],
};
