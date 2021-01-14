const HtmlWebpackPlugin = require("html-webpack-plugin");
const path =require('path')
const base = require('./webpack.config')
module.exports =Object.assign({},base,{
  mode:"development",
  entry: "./src/main.js",
  output: {
    filename: "main.js"
  },
  devServer: {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 8080,
  hot: true,
  open: false,
  },
  plugins:[
    ...base.plugins,
    new HtmlWebpackPlugin({template: "./index.html", title: "gulu-vue"}),
  ]
})