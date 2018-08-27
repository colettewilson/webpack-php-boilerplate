const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const globImporter = require('node-sass-glob-importer');

module.exports = {
  	entry: { 
  		app: [
  			"./assets/js/app.js",
  			"./assets/scss/app.scss"
  		]
  	},
  	output: {
    	path: path.resolve(__dirname, "public/dist"),
    	filename: "app.js"
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
      			test:/\.scss$/,
      			exclude: /node_modules/,
      			use:  [
      				"style-loader", 
      				MiniCssExtractPlugin.loader,
      				"css-loader", 
      				'postcss-loader', 
      				{
      					loader: "sass-loader",
      					options: {
                			importer: globImporter()
              			},
      				},
      			]
      		}
    	]
  	},
  	plugins: [
  		new CleanWebpackPlugin("public/dist", {} ),
    	new MiniCssExtractPlugin({
    		filename: "app.css"
    	})
  	],
  	devServer: {
		contentBase: path.resolve(__dirname, "public"),
		publicPath: "/dist",
		watchContentBase: true,
		compress: true,
	}
};