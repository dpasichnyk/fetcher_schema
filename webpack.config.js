const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, 'dist'),
    filename: 'fetcher_schema.js',
    library: 'fetcher_schema',
    libraryTarget: 'umd',
  },
};
