const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/main.ts",
  output: {
    filename: "./app/dist/bundle.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // if you have anymore problems tweet me at @gdi2290
      // The (\\|\/) piece accounts for path separators for Windows and MacOS
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, "app"), // location of your src
      {} // a map of your routes
    ),
  ],
};
