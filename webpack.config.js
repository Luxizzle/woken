const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
  },

  devtool: 'source-map',
  mode: process.NODE_ENV || 'production',

  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: ['ts-loader'],
      },
    ],
  },
};
