const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  entry: {
    app: [
      "./assets/js/app.js",
      "./assets/scss/app.scss",
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use:  [
          MiniCssExtractPlugin.loader,
          {
             loader: 'css-loader',
             options: {
                importLoaders: 1,
                minimize: true
             }
          },
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              importer: globImporter(),
              minimize: true
            },
          },
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          "file-loader"
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin("public/dist", {} ),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new SVGSpritemapPlugin({
      src: path.resolve(__dirname, "./assets/sprites/svgs/*.svg"),
      filename: "sprite.svg",
      prefix: "",
      generate: [{
        title: false,
        symbol: false,
        use: true,
      }],
      svgo: {
        plugins: [{
          removeUselessDefs: false,
          removeUnknownsAndDefaults: false,
        }]
      },
      styles: "./assets/sprites/tmpl.scss",
      svg4everybody: true,
      deleteChunk: false,
    }),
    new ManifestPlugin({
      writeToFileEmit: true,
      seed: {}
    }),
  ],
};
