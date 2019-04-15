const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  watchOptions: {
    ignored: ["node_modules"],
  },
  plugins: [
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, ".stylelintrc.js"),
      files: ["assets/scss/app.scss"],
    }),
    new BrowserSyncPlugin({
      browser: "google chrome",
      files: ["./public/*.php", "**/*.css", "**/*.js"],
      proxy: "http://[::1]:8000",
    })
  ],
});
