const path = require('path');
//handled by node js run time
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }

};

module.exports = config;
