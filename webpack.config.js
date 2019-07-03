const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
    // another: "./src/another-module.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Caching"
    }),
    new ManifestPlugin()
  ],
  output: {
    filename: "[name].[contenthash].js",
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
