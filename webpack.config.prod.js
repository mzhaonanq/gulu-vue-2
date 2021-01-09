const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader")
module.exports = {
  mode: "production",
  entry: "./lib/output.js",
  output: {
    filename: "gulu.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.scss$/i,
        use:["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./index.html", title: "gulu-vue"}),
    new VueLoaderPlugin()
  ]
};