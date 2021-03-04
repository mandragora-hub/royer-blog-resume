const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },

  module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
              test: /\.md$/i,
              exclude: /node_modules/,
              use: 'raw-loader',
            },
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public", "index.html")
        })
    ],
    output: {
        path: path.resolve(__dirname, "build")
    }
};