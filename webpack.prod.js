const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const clientConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.js"
  },
  target: 'web',
  entry: path.join(__dirname, "src/index.tsx"),
  devtool: "source-map",
};

const serverConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js"
  },
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'server/index.js'),
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
  ],
};



module.exports = { clientConfig, serverConfig };