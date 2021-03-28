const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/index.tsx"),
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "public/index.html"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};