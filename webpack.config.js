const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
    // another: "./src/another-module.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Caching"
    }),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    // chunkFilename: "[name].bundle.js"
    // publicPath: "/"
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // }
};
