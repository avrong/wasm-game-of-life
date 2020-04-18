const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  devtool: 'source-map',
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
};
