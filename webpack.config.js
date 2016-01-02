"use strict"

var webpack = require("webpack"),
    path    = require("path");

function isProd() { return process.env.NODE_ENV === "production" }
var NullPlugin = {apply: function() {/* NOP */}}
var node_modules = function(p) { return path.join(__dirname, "node_modules", p) }

var paths = {
  React:    node_modules(isProd() ? "react/dist/react.min.js" : "react/dist/react.js"),
  ReactDOM: node_modules(isProd() ? "react-dom/dist/react-dom.min.js" : "react-dom/dist/react-dom.js"),
}

module.exports = {

  entry: {
    app: ["./src/entry.js", 'webpack-hot-middleware/client'],
  },

  resolve: {
    root: ".",
    extensions: ["", ".js"],
    modulesDirectories: ["node_modules", "."],
    alias: {
      "react":     [paths.React],
      "react-dom": [paths.ReactDOM],
    },
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.[name].js",
    chunkFilename: "[chunkhash].js",
  },

  module: {
    loaders: [
      { test: /(\.js)$/, loader: 'babel?cacheDirectory', exclude: /node_modules/ },
      { test: /\.styl$/, loader: 'style!css!stylus' },
    ],

    noParse: [paths.React],  // to supress warnings
  },

  plugins: [
    isProd() ? new webpack.optimize.UglifyJsPlugin() : NullPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.IgnorePlugin(/electron|remote/),
  ],

  debug: !isProd(),

  devtool: isProd() ? "cheap-module-source-map" : "source-map",
}
