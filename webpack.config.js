const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
import favicon from "serve-favicon";
server.use(favicon(path.join(__dirname, "../assets/images/favicon.ico")));